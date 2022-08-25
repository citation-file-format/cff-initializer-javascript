<template>
    <q-card flat bordered class="bg-formcard q-pa-md">
        <div class="row">
            <h3 class="subquestion">
                The person's given names
                <SchemaGuideLink anchor="#definitionspersongiven-names" />
            </h3>
        </div>
        <div class="row">
            <q-input autofocus bg-color="white" class="col" dense label="given-names" outlined standout
                title="The person's given names." v-bind:model-value="givenNames" v-bind:error="false"
                v-bind:error-message="''" v-on:update:modelValue="$emit('update', 'givenNames', $event)" />
        </div>
        <div class="row">
            <h3 class="subquestion">
                The person's last names, split into parts
                <q-icon
                    name="ion-information-circle-outline"
                    size="24px"
                    color="primary"
                    v-on:click="showLastNameHelp = true"
                    style="cursor:pointer;"
                />
                <SchemaGuideLink anchor="#definitionspersonname-particle" />
                <SchemaGuideLink anchor="#definitionspersonname-suffix" class="q-pt-sm" />
                <SchemaGuideLink anchor="#definitionspersonfamily-names" class="q-pt-sm" />
            </h3>
        </div>
        <div class="row">
            <q-input bg-color="white" class="col-3" dense label="name-particle" outlined standout
                title="The person's name particle, e.g., a nobiliary particle or a [preposition] meaning 'of' or 'from' (for example 'von' in 'Alexander von Humboldt')."
                v-bind:model-value="nameParticle" v-bind:error="false" v-bind:error-message="''"
                v-on:update:modelValue="$emit('update', 'nameParticle', $event)" />
            <q-input bg-color="white" class="col" dense label="family-names" outlined standout
                title="The person's family names." v-bind:model-value="familyNames" v-bind:error="false"
                v-bind:error-message="''" v-on:update:modelValue="$emit('update', 'familyNames', $event)" />
            <q-input bg-color="white" class="col-3" dense label="name-suffix" outlined standout
                title="The person's name suffix, e.g. 'Jr.' for Sammy Davis Jr. or 'III' for Frank Edwin Wright III."
                v-bind:model-value="nameSuffix" v-bind:error="false" v-bind:error-message="''"
                v-on:update:modelValue="$emit('update', 'nameSuffix', $event)" />
        </div>
        <div class="row">
            <h3 class="subquestion">
                The person's email address
                <SchemaGuideLink anchor="#definitionspersonemail" />
            </h3>
        </div>
        <div class="row">
            <q-input bg-color="white" class="col" dense label="email" outlined standout
                title="The person's email address." type="email" v-bind:model-value="email"
                v-bind:class="emailErrors.length > 0 ? 'has-error' : ''" v-bind:error="emailErrors.length > 0"
                v-bind:error-message="emailErrors.join(', ')"
                v-on:update:modelValue="$emit('update', 'email', $event)" />
        </div>
        <div class="row">
            <h3 class="subquestion col">
                The person's affiliation
                <SchemaGuideLink anchor="#definitionspersonaffiliation" />
            </h3>
            <h3 class="subquestion col">
                The person's ORCID
                <SchemaGuideLink anchor="#definitionspersonorcid" />
            </h3>
        </div>
        <div class="row">
            <q-input bg-color="white" class="col" dense label="affiliation" outlined standout
                title="The person's affiliation." v-bind:model-value="affiliation" v-bind:error="false"
                v-bind:error-message="''" v-on:update:modelValue="$emit('update', 'affiliation', $event)" />
            <q-input bg-color="white" class="col" dense hint="Format: https://orcid.org/0000-0000-0000-0000"
                label="orcid" mask="https://orcid.org/####-####-####-###X" outlined standout
                title="The person's ORCID identifier." v-bind:class="orcidErrors.length > 0 ? 'has-error' : ''"
                v-bind:model-value="orcid" v-bind:error="orcidErrors.length > 0"
                v-bind:error-message="orcidErrors.join(', ')"
                v-on:update:modelValue="$emit('update', 'orcid', $event)" />
        </div>

        <q-card-actions align="right">
            <q-btn color="negative" dense icon="delete" label="Remove" v-on:click="$emit('removePressed')" />
            <q-btn dense icon="done" label="Done" v-on:click="$emit('closePressed')" />
        </q-card-actions>
    </q-card>
    <InfoDialog v-model="showLastNameHelp" v-bind:data="helpData.lastName" />
</template>

<script lang="ts">
import { byError, emailQueries, orcidQueries } from 'src/error-filtering'
import { computed, defineComponent, onUpdated, ref } from 'vue'
import InfoDialog from 'components/InfoDialog.vue'
import SchemaGuideLink from 'src/components/SchemaGuideLink.vue'
import { useStepperErrors } from 'src/store/stepper-errors'
import { useValidation } from 'src/store/validation'

export default defineComponent({
    name: 'AuthorCardEditing',
    props: {
        index: {
            type: Number,
            required: true
        },
        givenNames: {
            type: String,
            default: ''
        },
        nameParticle: {
            type: String,
            default: ''
        },
        familyNames: {
            type: String,
            default: ''
        },
        nameSuffix: {
            type: String,
            default: ''
        },
        email: {
            type: String,
            default: ''
        },
        affiliation: {
            type: String,
            default: ''
        },
        orcid: {
            type: String,
            default: ''
        }
    },
    setup (props) {
        onUpdated(() => {
            const { setErrorStateScreenAuthors } = useStepperErrors()
            setErrorStateScreenAuthors(document.getElementsByClassName('has-error').length > 0)
        })
        const { errors } = useValidation()
        const orcidErrors = computed(() => {
            return orcidQueries(props.index)
                .filter(byError(errors.value))
                .map(query => query.replace.message)
        })
        const emailErrors = computed(() => {
            return emailQueries(props.index)
                .filter(byError(errors.value))
                .map(query => query.replace.message)
        })
        const helpData = {
            name: {
                title: 'name',
                url: 'https://github.com/citation-file-format/citation-file-format/blob/1.2.0/schema-guide.md#type',
                description: 'The type of the work that is being described by this CITATION.cff file.'
            },
            lastName: {
                title: 'lastName',
                url: 'https://github.com/citation-file-format/citation-file-format/blob/1.2.0/schema-guide.md#title',
                description: 'The name of the software or dataset.',
                examples: [
                    'cffconvert',
                    'Firefox',
                    'LibreOffice'
                ]
            },
            email: {
                title: 'email',
                url: 'https://github.com/citation-file-format/citation-file-format/blob/1.2.0/schema-guide.md#message',
                description: 'A message to the human reader of the CITATION.cff file to let them know what to do with the citation metadata.',
                examples: [
                    'If you use this software, please cite it using the metadata from this file.',
                    'Please cite this software using these metadata.',
                    'Please cite this software using the metadata from "preferred-citation".'
                ]
            },
            affiliation: {
                title: 'affiliation',
                url: 'https://github.com/citation-file-format/citation-file-format/blob/1.2.0/schema-guide.md#message',
                description: 'A message to the human reader of the CITATION.cff file to let them know what to do with the citation metadata.',
                examples: [
                    'If you use this software, please cite it using the metadata from this file.',
                    'Please cite this software using these metadata.',
                    'Please cite this software using the metadata from "preferred-citation".'
                ]
            },
            orcid: {
                title: 'orcid',
                url: 'https://github.com/citation-file-format/citation-file-format/blob/1.2.0/schema-guide.md#message',
                description: 'A message to the human reader of the CITATION.cff file to let them know what to do with the citation metadata.',
                examples: [
                    'If you use this software, please cite it using the metadata from this file.',
                    'Please cite this software using these metadata.',
                    'Please cite this software using the metadata from "preferred-citation".'
                ]
            }
        }
        return {
            emailErrors,
            helpData,
            orcidErrors,
            showLastNameHelp: ref(false),
        }
    },
    emits: ['closePressed', 'removePressed', 'update'],
    components: { SchemaGuideLink }
})
</script>
<style scoped>
.row {
    display: flex;
    flex-direction: row;
    column-gap: 10px;
}
</style>
