<template>
    <q-card
        flat
        bordered
        class="bg-formcard q-pa-md"
    >
        <q-card-section>
            <div class="items-center no-wrap">
                <q-option-group
                    data-cy="radio-identifier"
                    inline
                    type="radio"
                    v-bind:model-value="type"
                    v-bind:options="typeOptions"
                    v-on:update:modelValue="$emit('updateType', 'type', $event)"
                />
            </div>
            <div class="q-mt-md items-center no-wrap">
                <div class="row">
                    <h3 class="subquestion">
                        What is the value of the {{ label }}?
                        <InfoDialog v-bind:data="helpData[identifierType]" />
                    </h3>
                </div>
                <q-input
                    autofocus
                    bg-color="white"
                    data-cy="input-identifier-value"
                    label="Value"
                    outlined
                    standout
                    dense
                    v-bind:class="identifierValueErrors.length > 0 ? 'has-error' : ''"
                    v-bind:error="identifierValueErrors.length > 0"
                    v-bind:error-message="identifierValueErrors.join(', ')"
                    v-bind:model-value="value"
                    v-on:update:modelValue="$emit('updateValue', 'value', $event)"
                />
            </div>
            <div class="q-mt-md items-center no-wrap">
                <div class="row">
                    <h3 class="subquestion">
                        What is the description for the {{ label }}?
                        <InfoDialog v-bind:data="helpData.description" />
                    </h3>
                </div>
                <q-input
                    bg-color="white"
                    data-cy="input-identifier-description"
                    label="Description"
                    outlined
                    standout
                    dense
                    v-bind:model-value="description"
                    v-on:update:modelValue="$emit('updateDescription', 'description', $event)"
                />
            </div>
        </q-card-section>
        <q-card-actions align="right">
            <q-btn
                color="negative"
                data-cy="btn-identifier-remove"
                dense
                icon="delete"
                label="Remove"
                v-on:click="$emit('removePressed')"
            />
            <q-btn
                data-cy="btn-identifier-done"
                dense
                icon="done"
                label="Done"
                v-on:click="$emit('closePressed')"
            />
        </q-card-actions>
    </q-card>
</template>

<script lang="ts">
import { PropType, computed, defineComponent } from 'vue'
import { byError, identifierValueQueries, unique } from 'src/error-filtering'
import { IdentifierTypeType } from 'src/types'
import InfoDialog from 'src/components/InfoDialog.vue'
import { useValidation } from 'src/store/validation'

export default defineComponent({
    name: 'IdentifierCardEditing',
    props: {
        index: {
            type: Number,
            required: true
        },
        type: {
            type: String as PropType<IdentifierTypeType>,
            default: ''
        },
        value: {
            type: String,
            default: ''
        },
        description: {
            type: String,
            default: ''
        }
    },
    components: {
        InfoDialog
    },
    setup (props) {
        const { errors } = useValidation()
        const labels = {
            doi: 'DOI',
            url: 'URL',
            swh: 'Software Heritage identifier',
            other: 'identifier'
        }
        const identifierValueErrors = computed(() => {
            return identifierValueQueries(props.index, ['doi', 'url', 'swh', 'other'].indexOf(props.type))
                .filter(byError(errors.value))
                .map(query => query.replace.message)
                .filter(unique)
        })
        const helpData = {
            doi: {
                title: 'doi',
                url: [
                    {
                        text: 'Click here to see the documentation for doi.',
                        link: 'https://github.com/citation-file-format/citation-file-format/blob/1.2.0/schema-guide.md#definitionsdoi'
                    }
                ],
                description: 'The DOI (https://en.wikipedia.org/wiki/Digital_object_identifier) of the work.',
                examples: [
                    '10.5281/zenodo.1003150'
                ]
            },
            url: {
                title: 'url',
                url: [
                    {
                        text: 'Click here to see the documentation for url.',
                        link: 'https://github.com/citation-file-format/citation-file-format/blob/1.2.0/schema-guide.md#definitionsurl'
                    }
                ],
                description: 'A URL.',
                examples: [
                    'https://research-software-project.org',
                    'http://research-software-project.org',
                    'sftp://files.research-software-project.org',
                    'ftp://files.research-software-project.org'
                ]
            },
            swh: {
                title: 'swh',
                url: [
                    {
                        text: 'Click here to see the documentation for swh.',
                        link: 'https://github.com/citation-file-format/citation-file-format/blob/1.2.0/schema-guide.md#definitionsswh-identifier'
                    }
                ],
                description: 'The Software Heritage identifier (https://www.softwareheritage.org/).',
                examples: [
                    'swh:1:rev:309cf2674ee7a0749978cf8265ab91a60aea0f7d'
                ]
            },
            other: {
                title: 'other',
                url: [
                    {
                        text: 'Click here to see the documentation for other.',
                        link: 'https://github.com/citation-file-format/citation-file-format/blob/1.2.0/schema-guide.md#definitionsidentifier'
                    }
                ],
                description: 'An identifier that does not fit in the other categories.',
                examples: [
                    'arXiv:2103.06681'
                ]
            },
            description: {
                title: 'description',
                url: [
                    {
                        text: 'Click here to see the documentation for description.',
                        link: 'https://github.com/citation-file-format/citation-file-format/blob/1.2.0/schema-guide.md#definitionsidentifier-description'
                    }
                ],
                description: 'A description of the identifier.',
                examples: [
                    'The concept DOI of the work.',
                    'The URL of version 1.1.0 of the software',
                    'The Software Heritage link for version 1.1.0.',
                    'The ArXiv deposit of the encompassing paper.'
                ]
            }
        }
        return {
            helpData,
            typeOptions: [
                { label: 'DOI', value: 'doi' },
                { label: 'URL', value: 'url' },
                { label: 'Software Heritage', value: 'swh' },
                { label: 'Other', value: 'other' }
            ],
            identifierType: computed(() => props.type),
            label: computed(() => labels[props.type]),
            identifierValueErrors
        }
    },
    emits: [
        'closePressed',
        'removePressed',
        'updateType',
        'updateValue',
        'updateDescription'
    ]
})
</script>
<style scoped>
.row {
  display: flex;
  flex-direction: row;
  column-gap: 10px;
}
</style>
