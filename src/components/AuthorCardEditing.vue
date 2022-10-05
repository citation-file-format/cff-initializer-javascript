<template>
    <q-card
        flat
        bordered
        class="bg-formcard q-pa-md"
    >
        <div class="row">
            <h3 class="subquestion">
                The person's given names
                <q-icon
                    name="ion-information-circle-outline"
                    size="24px"
                    color="primary"
                    v-on:click="showNameHelp = true"
                    style="cursor:pointer;"
                />
            </h3>
        </div>
        <div class="row">
            <q-input
                autofocus
                bg-color="white"
                class="col"
                data-cy="input-given-names"
                dense
                label="given-names"
                outlined
                standout
                v-bind:model-value="givenNames"
                v-bind:error="false"
                v-bind:error-message="''"
                v-on:update:modelValue="$emit('update', 'givenNames', $event)"
            />
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
            </h3>
        </div>
        <div class="row">
            <q-input
                bg-color="white"
                class="col-3"
                data-cy="input-name-particle"
                dense
                label="name-particle"
                outlined
                standout
                v-bind:model-value="nameParticle"
                v-bind:error="false"
                v-bind:error-message="''"
                v-on:update:modelValue="$emit('update', 'nameParticle', $event)"
            />
            <q-input
                bg-color="white"
                class="col"
                data-cy="input-family-names"
                dense
                label="family-names"
                outlined
                standout
                v-bind:model-value="familyNames"
                v-bind:error="false"
                v-bind:error-message="''"
                v-on:update:modelValue="$emit('update', 'familyNames', $event)"
            />
            <q-input
                bg-color="white"
                class="col-3"
                data-cy="input-name-suffix"
                dense
                label="name-suffix"
                outlined
                standout
                v-bind:model-value="nameSuffix"
                v-bind:error="false"
                v-bind:error-message="''"
                v-on:update:modelValue="$emit('update', 'nameSuffix', $event)"
            />
        </div>
        <div class="row">
            <h3 class="subquestion">
                The person's email address
                <q-icon
                    name="ion-information-circle-outline"
                    size="24px"
                    color="primary"
                    v-on:click="showEmailHelp = true"
                    style="cursor:pointer;"
                />
            </h3>
        </div>
        <div class="row">
            <q-input
                bg-color="white"
                class="col"
                data-cy="input-email"
                dense
                label="email"
                outlined
                standout
                type="email"
                v-bind:model-value="email"
                v-bind:class="emailErrors.length > 0 ? 'has-error' : ''"
                v-bind:error="emailErrors.length > 0"
                v-bind:error-message="emailErrors.join(', ')"
                v-on:update:modelValue="$emit('update', 'email', $event)"
            />
        </div>
        <div class="row">
            <h3 class="subquestion col">
                The person's affiliation
                <q-icon
                    name="ion-information-circle-outline"
                    size="24px"
                    color="primary"
                    v-on:click="showAffiliationHelp = true"
                    style="cursor:pointer;"
                />
            </h3>
            <h3 class="subquestion col">
                The person's ORCID
                <q-icon
                    name="ion-information-circle-outline"
                    size="24px"
                    color="primary"
                    v-on:click="showOrcidHelp = true"
                    style="cursor:pointer;"
                />
            </h3>
        </div>
        <div class="row">
            <q-input
                bg-color="white"
                class="col"
                data-cy="input-affiliation"
                dense
                label="affiliation"
                outlined
                standout
                v-bind:model-value="affiliation"
                v-bind:error="false"
                v-bind:error-message="''"
                v-on:update:modelValue="$emit('update', 'affiliation', $event)"
            />
            <q-input
                bg-color="white"
                class="col"
                data-cy="input-orcid"
                dense
                hint="Format: https://orcid.org/0000-0000-0000-0000"
                label="orcid"
                mask="https://orcid.org/####-####-####-###X"
                outlined
                standout
                v-bind:class="orcidErrors.length > 0 ? 'has-error' : ''"
                v-bind:model-value="orcid"
                v-bind:error="orcidErrors.length > 0"
                v-bind:error-message="orcidErrors.join(', ')"
                v-on:update:modelValue="$emit('update', 'orcid', $event)"
            />
        </div>

        <q-card-actions align="right">
            <q-btn
                color="negative"
                data-cy="btn-remove"
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
        v-model="showNameHelp"
        v-bind:data="helpData.name"
    />
    <InfoDialog
        v-model="showLastNameHelp"
        v-bind:data="helpData.lastName"
    />
    <InfoDialog
        v-model="showEmailHelp"
        v-bind:data="helpData.email"
    />
    <InfoDialog
        v-model="showAffiliationHelp"
        v-bind:data="helpData.affiliation"
    />
    <InfoDialog
        v-model="showOrcidHelp"
        v-bind:data="helpData.orcid"
    />
</template>

<script lang="ts">
import { byError, emailQueries, orcidQueries } from 'src/error-filtering'
import { computed, defineComponent, onUpdated, ref } from 'vue'
import InfoDialog from 'components/InfoDialog.vue'
import { useStepperErrors } from 'src/store/stepper-errors'
import { useValidation } from 'src/store/validation'

export default defineComponent({
    name: 'AuthorCardEditing',
    components: {
        InfoDialog
    },
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
                title: 'given-names',
                url: [
                    {
                        text: 'Click here to see the documentation for given-names.',
                        link: 'https://github.com/citation-file-format/citation-file-format/blob/1.2.0/schema-guide.md#definitionspersongiven-names'
                    }
                ],
                description: 'The person\'s given names.',
                examples: [
                    'Jane',
                    'John'
                ]
            },
            lastName: {
                title: 'name-particle, family-names, name-suffix',
                url: [
                    {
                        text: 'Click here to see the documentation for name-particle.',
                        link: 'https://github.com/citation-file-format/citation-file-format/blob/1.2.0/schema-guide.md#definitionspersonname-particle'
                    },
                    {
                        text: 'Click here to see the documentation for family-name.',
                        link: 'https://github.com/citation-file-format/citation-file-format/blob/1.2.0/schema-guide.md#definitionspersonfamily-names'
                    },
                    {
                        text: 'Click here to see the documentation for name-suffix.',
                        link: 'https://github.com/citation-file-format/citation-file-format/blob/1.2.0/schema-guide.md#definitionspersonname-suffix'
                    }
                ],
                description: 'The person\'s last names, split into parts.',
                examples: [
                    'name-particle: von',
                    'family-name: Doe',
                    'name-suffix: Jr.'
                ]
            },
            email: {
                title: 'email',
                url: [
                    {
                        text: 'Click here to see the documentation for email.',
                        link: 'https://github.com/citation-file-format/citation-file-format/blob/1.2.0/schema-guide.md#definitionspersonemail'
                    }
                ],
                description: 'The person\'s email address.',
                examples: [
                    'mail@research-project.org'
                ]
            },
            affiliation: {
                title: 'affiliation',
                url: [
                    {
                        text: 'Click here to see the documentation for affiliation.',
                        link: 'https://github.com/citation-file-format/citation-file-format/blob/1.2.0/schema-guide.md#definitionspersonaffiliation'
                    }
                ],
                description: 'The person\'s affiliation.',
                examples: [
                    'Netherlands eScience Center',
                    'German Aerospace Center (DLR)'
                ]
            },
            orcid: {
                title: 'orcid',
                url: [
                    {
                        text: 'Click here to see the documentation for orcid.',
                        link: 'https://github.com/citation-file-format/citation-file-format/blob/1.2.0/schema-guide.md#definitionspersonorcid'
                    },
                    {
                        text: 'https://orcid.org',
                        link: 'https://orcid.org'
                    }
                ],
                description: 'The person\'s ORCID identifier.',
                examples: [
                    'https://orcid.org/0000-0003-4925-7248'
                ]
            }
        }
        return {
            emailErrors,
            helpData,
            orcidErrors,
            showLastNameHelp: ref(false),
            showNameHelp: ref(false),
            showEmailHelp: ref(false),
            showAffiliationHelp: ref(false),
            showOrcidHelp: ref(false)
        }
    },
    emits: ['closePressed', 'removePressed', 'update']
})
</script>
<style scoped>
.row {
    display: flex;
    flex-direction: row;
    column-gap: 10px;
}
</style>
