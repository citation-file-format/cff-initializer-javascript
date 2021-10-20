<template>
    <q-card
        flat
        bordered
        v-bind:class="['bg-formcard', 'q-pa-md', fieldErrors.item ? 'red-border' : '']"
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
                v-bind:error="fieldErrors.givenNames.length > 0"
                v-bind:error-message="fieldErrors.givenNames"
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
                v-bind:error="fieldErrors.nameParticle.length > 0"
                v-bind:error-message="fieldErrors.nameParticle"
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
                v-bind:error="fieldErrors.familyNames.length > 0"
                v-bind:error-message="fieldErrors.familyNames"
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
                v-bind:error="fieldErrors.nameSuffix.length > 0"
                v-bind:error-message="fieldErrors.nameSuffix"
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
                v-bind:model-value="email"
                v-bind:error="fieldErrors.email.length > 0"
                v-bind:error-message="fieldErrors.email"
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
                v-bind:error="fieldErrors.affiliation.length > 0"
                v-bind:error-message="fieldErrors.affiliation"
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
                v-bind:error="fieldErrors.orcid.length > 0"
                v-bind:error-message="fieldErrors.orcid"
                v-on:update:modelValue="$emit('update', 'orcid', $event)"
            />
        </div>

        <q-banner
            v-if="fieldErrors.item"
            class="bg-warning text-negative red-border"
            style="margin-top: 40px; margin-bottom: 10px;"
        >
            {{ fieldErrors.item }}
        </q-banner>

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
import { defineComponent } from 'vue'

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
            type: Object as never,
            default: () => null
        }
    },
    setup () {
        return {
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
