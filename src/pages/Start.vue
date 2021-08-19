<template>
    <div class="q-pa-md col-flex">
        <div
            class="q-gutter-md title-field text-dark"
        >
            <p class="q-mt-xl page-title">
                Start
            </p>

            <p class="question">
                What is the title of the work?
            </p>
            <q-input
                bg-color="white"
                label="title"
                outlined
                standout
                v-bind:model-value="title"
                v-bind:rules="[ val => val && val.length > 3 || 'Please use minimum 3 characters']"
                v-on:update:modelValue="setTitle"
            />
            <p class="question">
                What do you want citers to do with the information provided in your CITATION.cff file?
            </p>
            <q-input
                bg-color="white"
                label="message"
                outlined
                v-bind:model-value="message"
                v-bind:rules="[ val => val && val.length > 3 || 'Please use minimum 3 characters']"
                v-on:update:modelValue="setMessage"
            />
            <p class="question">
                What type of work does this CITATION.cff describe?
            </p>
            <q-option-group
                type="radio"
                v-bind:model-value="type"
                v-bind:options="typeOptions"
                v-on:update:modelValue="setType"
            />
        </div>
    </div>
    <div>
        <q-btn
            label="Import from existing DOI"
            v-on:click="importOpen = true"
        />
        <q-dialog
            v-model="importOpen"
            persistent
        >
            <q-card style="min-width: 350px">
                <q-card-section>
                    <div class="text-h6">
                        DOI to import
                    </div>
                </q-card-section>

                <q-card-section class="q-pt-none">
                    <q-input
                        dense
                        v-model="doi2import"
                        autofocus
                        v-on:keyup.enter="importOpen = false"
                    />
                </q-card-section>

                <q-card-actions
                    align="right"
                    class="text-primary"
                >
                    <q-btn
                        flat
                        label="Cancel"
                        v-close-popup
                    />
                    <q-btn
                        flat
                        label="Import"
                        v-close-popup
                        v-on:click="importDoi"
                    />
                </q-card-actions>
            </q-card>
        </q-dialog>
    </div>
    <StepperActions />
</template>

<script lang="ts">
import StepperActions from 'components/StepperActions.vue'
import { AuthorType } from '../types'
import { defineComponent, ref } from 'vue'
import { useCff } from '../store/cff'
import { useQuasar } from 'quasar'

export default defineComponent({
    name: 'Start',
    components: {
        StepperActions
    },
    setup () {
        const { message, title, type, setMessage, setTitle, setType, setAuthors, setKeywords, setUrl, setVersion, setDateReleased } = useCff()
        const importOpen = ref(false)
        const doi2import = ref('10.1038/s41589-020-00724-z')
        const $q = useQuasar()

        async function importDoi () {
            const url = `https://doi.org/${doi2import.value}`
            const res = await fetch(
                url,
                {
                    headers: new Headers([
                        ['Accept', 'application/vnd.citationstyles.csl+json']
                    ])
                }
            )
            type CslAuthor = {
                    ORCID?: string,
                    given: string,
                    family: string,

                }
            type CslJson = {
                title: string
                author: CslAuthor[]
                subject: string[]
                categories: string[]
                type: 'software' | 'dataset' | 'article'
                URL?: string
                'published-online': {
                    'date-parts': number[][]
                },
                version?: string
                publisher: 'Zenodo' | string
            }
            const body = await res.json() as CslJson
            console.log(body)
            setTitle(body.title)
            if (body.type === 'software') {
                setType(body.type)
            } else if (body.type === 'dataset') {
                setType(body.type)
            }
            const newAuthors: AuthorType[] = body.author.map((a) => {
                const newAuthor: AuthorType = {
                    givenNames: a.given,
                    familyNames: a.family
                }
                if (a.ORCID) {
                    newAuthor.orcid = a.ORCID
                }
                return newAuthor
            })
            setAuthors(newAuthors)
            const newKeywords: string[] = []
            setKeywords(newKeywords.concat(body.subject, body.categories))
            if (body.URL) {
                setUrl(body.URL)
            }
            if (body.version) {
                setVersion(body.version)
            }
            setDateReleased(body['published-online']['date-parts'][0].join('-'))
            $q.notify('DOI has been imported')
        }

        return {
            message,
            title,
            type,
            typeOptions: [
                { label: 'Software', value: 'software' },
                { label: 'Dataset', value: 'dataset' }
            ],
            setMessage,
            setTitle,
            setType,
            importOpen,
            doi2import,
            importDoi
        }
    }
})
</script>

<style scoped>

.col-flex {
    flex: 1;
}
.title-field {
    margin-right: 120px;
    max-width: 700px;
    min-width: 300px;
}

</style>
