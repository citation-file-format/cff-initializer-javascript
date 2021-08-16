<template>
    <div>
        <div class="page-title">
            Authors
        </div>

        <div>
            <q-card
                v-for="(author, index) in authors"
                v-bind:key="index"
                flat
                bordered
                class="my-card bg-grey-1"
            >
                <q-card-section>
                    <div class="row items-center no-wrap">
                        <div class="col">
                            <div class="text-subtitle1">
                                {{ author.givenNames }} {{ author.familyNames }}
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
                                v-on:click="() => editingId = index"
                            />
                        </div>
                    </div>
                </q-card-section>

                <q-card-section>
                    {{ author.affiliation }} {{ author.orcid }} {{ index }} {{ editingId }}
                </q-card-section>
            </q-card>
        </div>
        <q-btn>Add author</q-btn>

        <StepperActions />
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import StepperActions from 'components/StepperActions.vue'

type Author = {
    givenNames?: string;
    nameParticle?: string;
    nameSuffix?: string;
    orcid?: string;
    familyNames?: string;
    affiliation?: string;
    email?: string;
}

export default defineComponent({
    name: 'Authors',
    components: {
        StepperActions
    },
    setup () {
        const authors = ref<Author[]>([{
            givenNames: 'Stefan',
            familyNames: 'Verhoeven',
            email: 'me@bla.com',
            affiliation: 'NLeSC',
            orcid: 'https://orcid/123434'
        }, {
            givenNames: 'Faruk',
            familyNames: 'Diblen',
            email: 'me@bla.com',
            affiliation: 'NLeSC',
            orcid: 'https://orcid/123434'
        }])

        const editingId = ref(-1)
        return {
            authors,
            editingId
        }
    }
})
</script>
