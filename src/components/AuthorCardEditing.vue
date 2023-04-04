<template>
    <q-card
        bordered
        class="bg-formcard q-pa-md"
        flat
    >
        <fieldset class="q-mb-md">
            <legend>
                Author's name, split into four parts
                <InfoDialog name="authorNames" />
            </legend>
            <div class="q-gutter-sm row">
                <q-input
                    autofocus
                    class="col"
                    data-cy="input-given-names"
                    dense
                    label="Given names"
                    outlined
                    standout
                    v-bind:model-value="givenNames"
                    v-bind:error="false"
                    v-bind:error-message="''"
                    v-on:update:modelValue="$emit('update', 'givenNames', $event)"
                />
                <q-input
                    class="small-input"
                    data-cy="input-name-particle"
                    dense
                    label="Name particle"
                    outlined
                    standout
                    v-bind:model-value="nameParticle"
                    v-bind:error="false"
                    v-bind:error-message="''"
                    v-on:update:modelValue="$emit('update', 'nameParticle', $event)"
                />
            </div>
            <div class="q-gutter-sm row">
                <q-input
                    class="col"
                    data-cy="input-family-names"
                    dense
                    label="Family names"
                    outlined
                    standout
                    v-bind:model-value="familyNames"
                    v-bind:error="false"
                    v-bind:error-message="''"
                    v-on:update:modelValue="$emit('update', 'familyNames', $event)"
                />
                <q-input
                    class="small-input"
                    data-cy="input-name-suffix"
                    dense
                    label="Name suffix"
                    outlined
                    standout
                    v-bind:model-value="nameSuffix"
                    v-bind:error="false"
                    v-bind:error-message="''"
                    v-on:update:modelValue="$emit('update', 'nameSuffix', $event)"
                />
            </div>
        </fieldset>
        <div class="row q-pb-sm">
            <q-input
                aria-label="E-mail. Press tab to reach help button."
                class="col"
                data-cy="input-email"
                dense
                label="E-mail"
                outlined
                standout
                type="email"
                v-bind:model-value="email"
                v-bind:error="emailErrors.length > 0"
                v-bind:error-message="emailErrors.join(', ')"
                v-on:update:modelValue="$emit('update', 'email', $event)"
            >
                <template v-slot:after>
                    <InfoDialog name="authorEmail" />
                </template>
            </q-input>
        </div>
        <div class="row">
            <q-input
                aria-label="Affiliation. Press tab to reach help button."
                class="col"
                data-cy="input-affiliation"
                dense
                label="Affiliation"
                outlined
                standout
                v-bind:model-value="affiliation"
                v-bind:error="false"
                v-bind:error-message="''"
                v-on:update:modelValue="$emit('update', 'affiliation', $event)"
            >
                <template v-slot:after>
                    <InfoDialog name="authorAffiliation" />
                </template>
            </q-input>
            <q-input
                aria-label="ORCID. Press tab to reach help button."
                class="col"
                data-cy="input-orcid"
                dense
                label="ORCID"
                mask="https://orcid.org/####-####-####-###X"
                outlined
                standout
                v-bind:model-value="orcid"
                v-bind:error="orcidErrors.length > 0"
                v-bind:error-message="orcidErrors.join(', ')"
                v-on:update:modelValue="$emit('update', 'orcid', $event)"
            >
                <template v-slot:after>
                    <InfoDialog name="authorOrcid" />
                </template>
            </q-input>
        </div>

        <q-card-actions align="right">
            <q-btn
                aria-label="Remove author being edited"
                class="rounded-borders"
                color="negative"
                data-cy="btn-remove"
                icon="delete"
                label="Remove"
                no-caps
                v-on:click="$emit('removePressed')"
            />
            <q-btn
                data-cy="btn-done"
                class="rounded-borders"
                color="secondary"
                icon="done"
                label="Done"
                no-caps
                v-on:click="$emit('closePressed')"
            />
        </q-card-actions>
    </q-card>
</template>

<script lang="ts">
import axios from 'axios'
// eslint-disable-next-line sort-imports
import { byError, emailQueries, orcidQueries } from 'src/error-filtering'
import { computed, defineComponent } from 'vue'
import InfoDialog from 'components/InfoDialog.vue'
import { useQuasar } from 'quasar'
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
        const $q = useQuasar()
        const { errors } = useValidation()
        const orcidErrors = computed(() => {
            const orcidErrors = orcidQueries(props.index)
                .filter(byError(errors.value))
            return orcidErrors
                .map(query => query.replace.message)
        })
        const emailErrors = computed(() => {
            return emailQueries(props.index)
                .filter(byError(errors.value))
                .map(query => query.replace.message)
        })
        return {
            emailErrors,
            orcidErrors
        }
    },
    watch: {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        orcid (_oldVal, _newVal) {
            if (this.orcid.length === 37 && this.orcidErrors.length === 0) {
                // If a valid orcid is found, look for data in the orcid API (maybe only if we do not have data already)
                const orcidSearchApi = 'https://pub.orcid.org/v3.0/expanded-search/?q=orcid:'
                const orcidEndpoint = this.orcid.replace('https://orcid.org/', orcidSearchApi) + '&rows=1'
                // This is a test endpoint on Zenodo sandbox.
                // const orcidEndpoint = 'https://pub.sandbox.orcid.org/v3.0/expanded-search/?q=orcid:0000-0001-8555-849X&rows=1';

                axios.interceptors.request.use((config) => {
                    config.props = this
                    return config
                })

                void axios.get(orcidEndpoint,
                    {
                        data: {},
                        headers: {
                            accept: 'application/vnd.orcid+json'
                        }
                    }).then(resp => {
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
                    resp.config.props.$emit('update', 'givenNames', resp.data['expanded-result'][0]['given-names'])
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
                    resp.config.props.$emit('update', 'familyNames', resp.data['expanded-result'][0]['family-names'])
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
                    resp.config.props.$emit('update', 'email', resp.data['expanded-result'][0].email[0])
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
                    resp.config.props.$emit('update', 'affiliation', resp.data['expanded-result'][0]['institution-name'][0])

                    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
                    resp.config.props.$q.notify({
                        message: 'Author information fetched from ORCID API!',
                        color: 'primary',
                        progress: true,
                        timeout: 800,
                        actions: [
                            { label: 'Dismiss', color: 'white' }
                        ]
                    })
                })
            }
        }
    },
    emits: ['closePressed', 'removePressed', 'update']
})
</script>
<style scoped>
.small-input {
    max-width: 150px;
}
</style>
