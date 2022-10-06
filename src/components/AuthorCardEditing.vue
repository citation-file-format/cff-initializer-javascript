<template>
    <q-card
        flat
        bordered
        class="bg-formcard q-pa-md"
    >
        <div class="row">
            <h3 class="subquestion">
                The person's given names
                <InfoDialog name="authorGivenNames" />
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
                <InfoDialog name="authorLastNames" />
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
                <InfoDialog name="authorEmail" />
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
                <InfoDialog name="authorAffiliation" />
            </h3>
            <h3 class="subquestion col">
                The person's ORCID
                <InfoDialog name="authorOrcid" />
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
</template>

<script lang="ts">
import { byError, emailQueries, orcidQueries } from 'src/error-filtering'
import { computed, defineComponent, onUpdated } from 'vue'
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
        return {
            emailErrors,
            orcidErrors
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
