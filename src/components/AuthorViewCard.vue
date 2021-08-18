<template>
    <q-card
        flat
        bordered
        class="my-card bg-grey-1"
    >
        <q-card-section>
            <div class="row items-center no-wrap">
                <div class="col">
                    <div class="text-subtitle1">
                        {{ author.givenNames }} {{ author.nameParticle }} {{ author.familyNames }} {{ author.nameSuffix }}
                    </div>
                    <div class="text-subtitle1">
                        {{ author.email }}
                    </div>
                </div>

                <div class="col-auto">
                    <q-btn
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
import { defineComponent, PropType } from 'vue'
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
    emits: ['editPressed']
})
</script>
