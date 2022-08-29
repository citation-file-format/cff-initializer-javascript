<template>
    <q-card
        flat
        bordered
        class="bg-formcard q-pa-md"
    >
        <q-card-section>
            <div class="items-center no-wrap">
                <q-option-group
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
                        <q-icon
                            name="ion-information-circle-outline"
                            size="24px"
                            color="primary"
                            v-on:click="showIdentifierHelp = true"
                            style="cursor:pointer;"
                        />
                    </h3>
                </div>
                <q-input
                    autofocus
                    bg-color="white"
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
                        <q-icon
                            name="ion-information-circle-outline"
                            size="24px"
                            color="primary"
                            v-on:click="showDescriptionHelp = true"
                            style="cursor:pointer;"
                        />
                    </h3>
                </div>
                <q-input
                    bg-color="white"
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
                dense
                icon="delete"
                label="Remove"
                v-on:click="$emit('removePressed')"
            />
            <q-btn
                dense
                icon="done"
                label="Done"
                v-on:click="$emit('closePressed')"
            />
        </q-card-actions>
    </q-card>
    <InfoDialog
        v-model="showIdentifierHelp"
        v-bind:data="helpData[identifierType]"
    />
    <InfoDialog
        v-model="showDescriptionHelp"
        v-bind:data="helpData.description"
    />
</template>

<script lang="ts">
import { PropType, computed, defineComponent, ref } from 'vue'
import { byError, identifierValueQueries, unique } from 'src/error-filtering'
import { IdentifierTypeType } from 'src/types'
import InfoDialog from 'src/components/InfoDialog.vue'
import { useCff } from 'src/store/cff'
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
        const cffType = useCff().type
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
                url: 'https://github.com/citation-file-format/citation-file-format/blob/1.2.0/schema-guide.md#definitionsdoi',
                description: `The DOI (https://en.wikipedia.org/wiki/Digital_object_identifier) of the ${cffType.value}.`,
                examples: [
                    '10.5281/zenodo.1003150'
                ]
            },
            url: {
                title: 'url',
                url: 'https://github.com/citation-file-format/citation-file-format/blob/1.2.0/schema-guide.md#definitionsurl',
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
                url: 'https://github.com/citation-file-format/citation-file-format/blob/1.2.0/schema-guide.md#definitionsswh-identifier',
                description: 'The Software Heritage identifier (https://www.softwareheritage.org/).',
                examples: [
                    'swh:1:rev:309cf2674ee7a0749978cf8265ab91a60aea0f7d'
                ]
            },
            other: {
                title: 'other',
                url: 'https://github.com/citation-file-format/citation-file-format/blob/1.2.0/schema-guide.md#definitionsidentifier',
                description: 'An identifier that does not fit in the other categories.',
                examples: [
                    'arXiv:2103.06681'
                ]
            },
            description: {
                title: 'description',
                url: 'https://github.com/citation-file-format/citation-file-format/blob/1.2.0/schema-guide.md#definitionsidentifier-description',
                description: 'A description of the identifier.',
                examples: [
                    `The concept DOI of the ${cffType.value}.`,
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
            identifierValueErrors,
            showDescriptionHelp: ref(false),
            showIdentifierHelp: ref(false)
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
