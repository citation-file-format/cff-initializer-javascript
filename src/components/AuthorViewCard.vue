<template>
    <q-card
        flat
        bordered
        class="bg-formcard"
        v-on:mouseover="showEdit = true"
        v-on:mouseleave="showEdit = false"
    >
        <q-card-section>
            <div class="row items-center no-wrap">
                <div class="col-11">
                    <div class="text-subtitle1">
                        {{ author.givenNames }} {{ author.nameParticle }} {{ author.familyNames }} {{ author.nameSuffix }}
                    </div>
                    <div class="text-subtitle1">
                        {{ author.email }}
                    </div>
                </div>

                <div class="col-1">
                    <q-btn
                        v-if="showEdit"
                        color="primary"
                        round
                        flat
                        icon="edit"
                        v-on:click="$emit('editPressed')"
                    />
                </div>
            </div>
        </q-card-section>

        <q-card-section>
            {{ author.affiliation }} {{ author.orcid }}
        </q-card-section>
    </q-card>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue'
import { AuthorType } from 'src/types'

export default defineComponent({
    name: 'AuthorViewCard',
    props: {
        index: {
            type: Number,
            required: true
        },
        author: {
            type: Object as PropType<AuthorType>,
            required: true
        }
    },
    setup () {
        const showEdit = ref(false)
        return {
            showEdit
        }
    },
    emits: ['editPressed']
})
</script>
