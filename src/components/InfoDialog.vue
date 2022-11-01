<template>
    <q-btn
        class="transparent"
        flat
        icon="ion-information-circle-outline"
        round
        v-bind:data-cy="'info-icon-' + data.title"
        v-bind:aria-label="'Open help for ' + data.title"
        v-on:click="showDialog = true"
    />
    <q-dialog
        aria-modal="true"
        role="dialog"
        v-bind:aria-label="'Help for ' + data.title"
        v-bind:data-cy="'info-dialog-' + data.title"
        v-model="showDialog"
    >
        <q-card
            class="window-width"
        >
            <q-card-section class="row items-center q-pb-none">
                <h2>
                    CFF field: {{ data.title }}
                </h2>
                <q-space />
                <q-btn
                    icon="close"
                    flat
                    label="close"
                    dense
                    v-close-popup
                />
            </q-card-section>

            <q-card-section>
                <p>
                    {{ data.description }}
                </p>
            </q-card-section>
            <q-card-section v-if="data.examples">
                <h3>
                    Examples
                </h3>
                <ul>
                    <li
                        v-for="item in data.examples"
                        v-bind:key="item"
                        class="q-mt-sm"
                    >
                        <div
                            v-for="(line, index) in item.split('\n')"
                            v-bind:key="index"
                        >
                            {{ line }}
                        </div>
                    </li>
                </ul>
            </q-card-section>
            <q-card-section v-if="data.url">
                <h3>
                    Related links
                </h3>
                <ul>
                    <li
                        v-for="item in data.url"
                        v-bind:key="item"
                    >
                        <a
                            v-bind:href="item.link"
                            target="_blank"
                        >
                            {{ item.text }}
                        </a>
                    </li>
                </ul>
            </q-card-section>
        </q-card>
    </q-dialog>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import { helpData } from 'src/store/help-data'

export default defineComponent({
    name: 'InfoDialog',
    props: {
        name: {
            type: String,
            required: true,
            default: null
        }
    },
    setup (props) {
        const showDialog = ref(false)

        return {
            data: computed(() => helpData[props.name as keyof typeof helpData]),
            showDialog
        }
    }
})
</script>
