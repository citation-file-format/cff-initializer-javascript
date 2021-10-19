<template>
    <q-card
        flat
        bordered
        class="bg-formcard q-pa-md"
    >
        <div class="row">
            <q-input
                bg-color="white"
                class="col"
                dense
                label="given-names"
                outlined
                standout
                title="The person's given names."
                v-bind:model-value="givenNames"
                v-bind:error="fieldErrors.givenNames.hasError"
                v-bind:error-message="fieldErrors.givenNames.message"
                v-on:update:modelValue="$emit('update', 'givenNames', $event)"
            />
        </div>
        <div class="row">
            <q-input
                bg-color="white"
                class="col-3"
                dense
                label="name-particle"
                outlined
                standout
                title="The person's name particle, e.g., a nobiliary particle or a [preposition] meaning 'of' or 'from' (for example 'von' in 'Alexander von Humboldt')."
                v-bind:model-value="nameParticle"
                v-bind:error="fieldErrors.nameParticle.hasError"
                v-bind:error-message="fieldErrors.nameParticle.message"
                v-on:update:modelValue="$emit('update', 'nameParticle', $event)"
            />
            <q-input
                bg-color="white"
                class="col"
                dense
                label="family-names"
                outlined
                standout
                title="The person's family names."
                v-bind:model-value="familyNames"
                v-bind:error="fieldErrors.familyNames.hasError"
                v-bind:error-message="fieldErrors.familyNames.message"
                v-on:update:modelValue="$emit('update', 'familyNames', $event)"
            />
            <q-input
                bg-color="white"
                class="col-3"
                dense
                label="name-suffix"
                outlined
                standout
                title="The person's name suffix, e.g. 'Jr.' for Sammy Davis Jr. or 'III' for Frank Edwin Wright III."
                v-bind:model-value="nameSuffix"
                v-bind:error="fieldErrors.nameSuffix.hasError"
                v-bind:error-message="fieldErrors.nameSuffix.message"
                v-on:update:modelValue="$emit('update', 'nameSuffix', $event)"
            />
        </div>
        <div class="row">
            <q-input
                bg-color="white"
                class="col"
                dense
                label="email"
                outlined
                standout
                title="The person's email address."
                type="email"
                v-bind:error="fieldErrors.email.hasError"
                v-bind:error-message="fieldErrors.email.message"
                v-on:update:modelValue="$emit('update', 'email', $event)"
            />
        </div>
        <div class="row">
            <q-input
                bg-color="white"
                class="col"
                dense
                label="affiliation"
                outlined
                standout
                title="The person's affiliation."
                v-bind:model-value="affiliation"
                v-bind:error="fieldErrors.affiliation.hasError"
                v-bind:error-message="fieldErrors.affiliation.message"
                v-on:update:modelValue="$emit('update', 'affiliation', $event)"
            />
            <q-input
                bg-color="white"
                class="col"
                dense
                label="orcid"
                outlined
                standout
                title="The person's ORCID identifier."
                v-bind:model-value="orcid"
                v-bind:error="fieldErrors.orcid.hasError"
                v-bind:error-message="fieldErrors.orcid.message"
                v-on:update:modelValue="$emit('update', 'orcid', $event)"
            />
        </div>

        <!-- <div>
            {{ fieldErrors }}
        </div> -->

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
</template>

<script lang="ts">
// import { fieldArrayErrorType } from 'src/store/validator'
import { defineComponent } from 'vue'
import { makeOptionalFieldValidator } from '../validator'

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
        nameSuffix: {
            type: String,
            default: ''
        },
        orcid: {
            type: String,
            default: ''
        },
        familyNames: {
            type: String,
            default: ''
        },
        affiliation: {
            type: String,
            default: ''
        },
        email: {
            type: String,
            default: ''
        },
        fieldErrors: {
            type: Object as any,
            required: true
        }
    },
    setup () {
        return {
            validateGivenNames: makeOptionalFieldValidator('/definitions/person/properties/given-names'),
            validateNameParticle: makeOptionalFieldValidator('/definitions/person/properties/name-particle'),
            validateNameSuffix: makeOptionalFieldValidator('/definitions/person/properties/name-suffix'),
            validateFamilyNames: makeOptionalFieldValidator('/definitions/person/properties/family-names'),
            validateAffiliation: makeOptionalFieldValidator('/definitions/person/properties/affiliation'),
            validateEmail: makeOptionalFieldValidator('/definitions/person/properties/email'),
            validateOrcid: makeOptionalFieldValidator('/definitions/person/properties/orcid') // or /definitions/orcid ?
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
