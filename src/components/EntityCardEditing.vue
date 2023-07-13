<template>
    <q-card
        bordered
        class="bg-formcard q-px-md q-py-sm"
        flat
    >
        <div class="row text-h6 q-mx-none q-my-none q-pa-none">
            Entity
        </div>
        <div class="row q-py-sm">
            <q-input
                autofocus
                class="col"
                data-cy="input-name"
                dense
                label="Name"
                outlined
                standout
                v-bind:model-value="author.name"
                v-bind:error="nameErrors.length > 0"
                v-bind:error-message="nameErrors.join(', ')"
                v-on:update:modelValue="$emit('update', 'name', $event)"
            >
                <template v-slot:after>
                    <InfoDialog name="authorName" />
                </template>
            </q-input>
        </div>
        <div class="row q-pb-sm">
            <q-input
                aria-label="Address. Press tab to reach help button."
                class="col"
                data-cy="input-address"
                dense
                label="Address"
                outlined
                standout
                v-bind:model-value="author.address"
                v-bind:error="false"
                v-bind:error-message="''"
                v-on:update:modelValue="$emit('update', 'address', $event)"
            >
                <template v-slot:after>
                    <InfoDialog name="authorAddress" />
                </template>
            </q-input>
        </div>
        <div class="row q-pb-sm">
            <q-input
                aria-label="City. Press tab to reach help button."
                class="col"
                data-cy="input-city"
                dense
                label="City"
                outlined
                standout
                v-bind:model-value="author.city"
                v-bind:error="false"
                v-bind:error-message="''"
                v-on:update:modelValue="$emit('update', 'city', $event)"
            >
                <template v-slot:after>
                    <InfoDialog name="authorCity" />
                </template>
            </q-input>
            <q-select
                aria-label="Country. Press tab to reach help button."
                class="col"
                clearable
                data-cy="select-country"
                dense
                fill-input
                hide-selected
                input-debounce="0"
                label="Country"
                outlined
                standout
                use-input
                v-bind:error="false"
                v-bind:error-message="''"
                v-bind:model-value="author.country"
                v-bind:options="options"
                v-on:filter="countryFilterFunction"
                v-on:update:model-value="$emit('update', 'country', $event)"
            >
                <template v-slot:after>
                    <InfoDialog name="authorCountry" />
                </template>
            </q-select>
            <q-input
                aria-label="Post code. Press tab to reach help button."
                class="col"
                data-cy="input-post-code"
                dense
                label="Post code"
                outlined
                standout
                v-bind:model-value="author.postCode"
                v-bind:error="false"
                v-bind:error-message="''"
                v-on:update:modelValue="$emit('update', 'postCode', $event)"
            >
                <template v-slot:after>
                    <InfoDialog name="authorPostCode" />
                </template>
            </q-input>
        </div>

        <div class="row q-pb-sm">
            <q-input
                aria-label="Location. Press tab to reach help button."
                class="col"
                data-cy="input-location"
                dense
                label="Location"
                outlined
                standout
                v-bind:model-value="author.location"
                v-bind:error="false"
                v-bind:error-message="''"
                v-on:update:modelValue="$emit('update', 'location', $event)"
            >
                <template v-slot:after>
                    <InfoDialog name="authorLocation" />
                </template>
            </q-input>
            <q-input
                aria-label="Region. Press tab to reach help button."
                class="col"
                data-cy="input-region"
                dense
                label="Region"
                outlined
                standout
                v-bind:model-value="author.region"
                v-bind:error="false"
                v-bind:error-message="''"
                v-on:update:modelValue="$emit('update', 'region', $event)"
            >
                <template v-slot:after>
                    <InfoDialog name="authorRegion" />
                </template>
            </q-input>
        </div>
        <div class="row q-pb-sm">
            <q-input
                aria-label="Alias. Press tab to reach help button."
                class="col"
                data-cy="input-alias"
                dense
                label="Alias"
                outlined
                standout
                v-bind:model-value="author.alias"
                v-bind:error="false"
                v-bind:error-message="''"
                v-on:update:modelValue="$emit('update', 'alias', $event)"
            >
                <template v-slot:after>
                    <InfoDialog name="authorAlias" />
                </template>
            </q-input>
            <q-input
                aria-label="E-mail. Press tab to reach help button."
                class="col"
                data-cy="input-email"
                dense
                label="E-mail"
                outlined
                standout
                type="email"
                v-bind:model-value="author.email"
                v-bind:error="emailErrors.length > 0"
                v-bind:error-message="emailErrors.join(', ')"
                v-on:update:modelValue="$emit('update', 'email', $event)"
            >
                <template v-slot:after>
                    <InfoDialog name="authorEmail" />
                </template>
            </q-input>
        </div>
        <div class="row q-pb-sm">
            <q-input
                aria-label="Start date (e.g., for conference). Press tab to reach help button."
                class="col"
                data-cy="input-date-start"
                dense
                hint="Format: YYYY-MM-DD"
                label="Start date (e.g., for conference)"
                mask="####-##-##"
                outlined
                standout
                v-bind:model-value="author.dateStart"
                v-bind:error="dateStartErrors.length > 0"
                v-bind:error-message="dateStartErrors.join(', ')"
                v-on:update:modelValue="$emit('update', 'dateStart', $event)"
            >
                <template v-slot:after>
                    <InfoDialog name="authorDateStart" />
                </template>
            </q-input>
            <q-input
                aria-label="Ending date. Press tab to reach help button."
                class="col"
                data-cy="input-date-end"
                dense
                hint="Format: YYYY-MM-DD"
                label="Ending date"
                mask="####-##-##"
                outlined
                standout
                v-bind:model-value="author.dateEnd"
                v-bind:error="dateEndErrors.length > 0"
                v-bind:error-message="dateEndErrors.join(', ')"
                v-on:update:modelValue="$emit('update', 'dateEnd', $event)"
            >
                <template v-slot:after>
                    <InfoDialog name="authorDateEnd" />
                </template>
            </q-input>
        </div>
        <div class="row q-pb-sm">
            <q-input
                aria-label="Telephone. Press tab to reach help button."
                class="col"
                data-cy="input-tel"
                dense
                label="Telephone"
                outlined
                standout
                v-bind:model-value="author.tel"
                v-bind:error="false"
                v-bind:error-message="''"
                v-on:update:modelValue="$emit('update', 'tel', $event)"
            >
                <template v-slot:after>
                    <InfoDialog name="authorTel" />
                </template>
            </q-input>
            <q-input
                aria-label="Fax. Press tab to reach help button."
                class="col"
                data-cy="input-fax"
                dense
                label="Fax"
                outlined
                standout
                v-bind:model-value="author.fax"
                v-bind:error="false"
                v-bind:error-message="''"
                v-on:update:modelValue="$emit('update', 'fax', $event)"
            >
                <template v-slot:after>
                    <InfoDialog name="authorFax" />
                </template>
            </q-input>
        </div>
        <div class="row q-pb-sm">
            <q-input
                aria-label="Website. Press tab to reach help button."
                class="col"
                data-cy="input-website"
                dense
                label="Website"
                outlined
                standout
                v-bind:model-value="author.website"
                v-bind:error="websiteErrors.length > 0"
                v-bind:error-message="websiteErrors.join(', ')"
                v-on:update:modelValue="$emit('update', 'website', $event)"
            >
                <template v-slot:after>
                    <InfoDialog name="authorWebsite" />
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
                v-bind:model-value="author.orcid"
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
import { PropType, computed, defineComponent, ref } from 'vue'
import { authorNameQueries, byError, dateEndQueries, dateStartQueries, emailQueries, orcidQueries, unique, websiteQueries } from 'src/error-filtering'
import { EntityType } from 'src/types'
import InfoDialog from 'components/InfoDialog.vue'
import { QSelect } from 'quasar'
import schema from 'src/schemas/1.2.0/schema.json'
import { useValidation } from 'src/store/validation'

export default defineComponent({
    name: 'EntityCardEditing',
    components: {
        InfoDialog
    },
    props: {
        index: {
            type: Number,
            required: true
        },
        author: {
            type: Object as PropType<EntityType>,
            required: true
        }
    },
    setup (props) {
        const { errors } = useValidation()
        const countries = schema.definitions.country.enum
        const options = ref(countries)
        const countryFilterFunction = (val: string, update: (a: unknown, b: unknown) => void) => {
            update(() => {
                if (val === '') {
                    options.value = countries
                } else {
                    const needle = val.toLowerCase()
                    options.value = countries.filter(v => v.toLowerCase().indexOf(needle) > -1)
                }
            },
            (ref: QSelect) => {
                if (val !== '' && ref.options !== undefined && ref.options.length > 0) {
                    ref.setOptionIndex(-1)
                    ref.moveOptionSelection(1, true)
                }
            })
        }

        const dateEndErrors = computed(() => {
            return dateEndQueries(props.index)
                .filter(byError(errors.value))
                .map(query => query.replace.message)
        })
        const dateStartErrors = computed(() => {
            return dateStartQueries(props.index)
                .filter(byError(errors.value))
                .map(query => query.replace.message)
        })
        const emailErrors = computed(() => {
            return emailQueries(props.index)
                .filter(byError(errors.value))
                .map(query => query.replace.message)
        })
        const nameErrors = computed(() => {
            return authorNameQueries(props.index)
                .filter(byError(errors.value))
                .map(query => query.replace.message)
        })
        const orcidErrors = computed(() => {
            return orcidQueries(props.index)
                .filter(byError(errors.value))
                .map(query => query.replace.message)
        })
        const websiteErrors = computed(() => {
            return websiteQueries(props.index)
                .filter(byError(errors.value))
                .map(query => query.replace.message)
                .filter(unique)
        })
        return {
            countryFilterFunction,
            dateEndErrors,
            dateStartErrors,
            emailErrors,
            nameErrors,
            options,
            orcidErrors,
            websiteErrors
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
