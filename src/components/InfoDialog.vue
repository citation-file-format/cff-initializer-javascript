<template>
    <div
        class="q-pa-md q-gutter-sm"
    >
        <q-dialog
            v-model="showDialog"
        >
            <q-card
                class="window-width help-dialog"
            >
                <q-card-section class="row items-center q-pb-none">
                    <div class="text-h5">
                        CFF field: {{ data.title }}
                    </div>
                    <q-space />
                    <q-btn
                        icon="close"
                        flat
                        round
                        dense
                        v-close-popup
                    />
                </q-card-section>

                <q-card-section>
                    {{ data.description }}
                </q-card-section>
                <q-card-section v-if="data.examples">
                    <div class="text-h6">
                        Examples
                    </div>
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
                    <div class="text-h6">
                        Related links
                    </div>
                    <div
                        v-for="item in data.url"
                        v-bind:key="item"
                    >
                        <a
                            v-bind:href="item.link"
                            tabindex="-1"
                            target="_blank"
                        >
                            {{ item.text }}
                        </a>
                    </div>
                </q-card-section>
            </q-card>
        </q-dialog>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'

export default defineComponent({
    name: 'InfoDialog',
    props: {
        modelValue: {
            type: Boolean,
            required: true,
            default: false
        },
        data: {
            type: Object,
            required: true,
            default: null
        }
    },
    emits: ['update:modelValue'],
    setup (props, { emit }) {
        const showDialog = computed({
            get () { return props.modelValue },
            set (newValue) { emit('update:modelValue', newValue) }
        })

        return {
            showDialog
        }
    }
})
</script>

<style scoped>
.help-dialog {
    background-color: var(--fgcolor, lightslategray);
}
</style>

}
