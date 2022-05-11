<template>
    <q-card
        flat
        bordered
        class="bg-formcard q-pa-md"
    >
        <div class="row">
            <q-label class="text-dark">
                The person's given names
                <SchemaGuideLink anchor="#definitionspersongiven-names" />
            </q-label>
        </div>
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
                v-bind:error="givenNamesError.hasError"
                v-bind:error-message="givenNamesError.messages.join(', ')"
                v-on:update:modelValue="$emit('update', 'givenNames', $event)"
                ref="givenNamesRef"
            />
        </div>
        <div class="row">
            <q-label class="text-dark">
                The person's last names, split into parts
            </q-label>
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
                v-bind:error="nameParticleError.hasError"
                v-bind:error-message="nameParticleError.messages.join(', ')"
                v-on:update:modelValue="$emit('update', 'nameParticle', $event)"
            >
                <SchemaGuideLink
                    anchor="#definitionspersonname-particle"
                    class="q-pt-sm"
                />
            </q-input>
            <q-input
                bg-color="white"
                class="col"
                dense
                label="family-names"
                outlined
                standout
                title="The person's family names."
                v-bind:model-value="familyNames"
                v-bind:error="familyNamesError.hasError"
                v-bind:error-message="familyNamesError.messages.join(', ')"
                v-on:update:modelValue="$emit('update', 'familyNames', $event)"
            >
                <SchemaGuideLink
                    anchor="#definitionspersonfamily-names"
                    class="q-pt-sm"
                />
            </q-input>
            <q-input
                bg-color="white"
                class="col-3"
                dense
                label="name-suffix"
                outlined
                standout
                title="The person's name suffix, e.g. 'Jr.' for Sammy Davis Jr. or 'III' for Frank Edwin Wright III."
                v-bind:model-value="nameSuffix"
                v-bind:error="nameSuffixError.hasError"
                v-bind:error-message="nameSuffixError.messages.join(', ')"
                v-on:update:modelValue="$emit('update', 'nameSuffix', $event)"
            >
                <SchemaGuideLink
                    anchor="#definitionspersonname-suffix"
                    class="q-pt-sm"
                />
            </q-input>
        </div>
        <div class="row">
            <q-label class="text-dark">
                The person's email address
                <SchemaGuideLink anchor="#definitionsperson-email" />
            </q-label>
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
                v-bind:error="emailError.hasError"
                v-bind:error-message="emailError.messages.join(', ')"
                v-on:update:modelValue="$emit('update', 'email', $event)"
            />
        </div>
        <div class="row">
            <q-label class="text-dark col">
                The person's affiliation
                <SchemaGuideLink anchor="#definitionsperson-affiliation" />
            </q-label>
            <q-label class="text-dark col">
                The person's ORCID
                <SchemaGuideLink anchor="#definitionsperson-orcid" />
            </q-label>
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
                v-bind:error="affiliationError.hasError"
                v-bind:error-message="affiliationError.messages.join(', ')"
                v-on:update:modelValue="$emit('update', 'affiliation', $event)"
            />
            <q-input
                bg-color="white"
                class="col"
                dense
                hint="Format: https://orcid.org/0000-0000-0000-0000"
                label="orcid"
                outlined
                standout
                title="The person's ORCID identifier."
                v-bind:model-value="orcid"
                v-bind:error="orcidError.hasError"
                v-bind:error-message="orcidError.messages.join(', ')"
                v-on:update:modelValue="$emit('update', 'orcid', $event)"
            />
        </div>

        <q-banner
            v-if="authorErrors.messages.length > 0"
            class="bg-warning text-negative"
        >
            <div
                v-bind:key="authindex"
                v-for="(screenMessage, authindex) in authorErrors.messages"
            >
                {{ screenMessage }}
            </div>
        </q-banner>

        <q-card-actions align="right">
            <q-btn
                color="blue"
                dense
                v-bind:disable="index == 0"
                icon="ion-arrow-up"
                tabindex="-1"
                v-on:click="$emit('moveUp')"
            />
            <q-btn
                color="blue"
                dense
                v-bind:disable="index >= numAuthors - 1"
                icon="ion-arrow-down"
                tabindex="-1"
                v-on:click="$emit('moveDown')"
            />
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
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { computed, defineComponent, onMounted, ref } from 'vue'
import { getMyErrors } from 'src/store/validator'
import { authorErrors } from 'src/author-errors'
import SchemaGuideLink from './SchemaGuideLink.vue'

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
        },
        numAuthors: {
            type: Number,
            default: 0
        }
    },
    setup (props) {
        const givenNamesRef = ref<HTMLElement | null>(null)
        onMounted(() => {
            givenNamesRef.value?.focus()
        })
        return {
            givenNamesRef,
            givenNamesError: computed(() => getMyErrors(`/authors/${props.index}/given-names`)),
            nameParticleError: computed(() => getMyErrors(`/authors/${props.index}/name-particle`)),
            familyNamesError: computed(() => getMyErrors(`/authors/${props.index}/family-names`)),
            nameSuffixError: computed(() => getMyErrors(`/authors/${props.index}/name-suffix`)),
            emailError: computed(() => getMyErrors(`/authors/${props.index}/email`)),
            affiliationError: computed(() => getMyErrors(`/authors/${props.index}/affiliation`)),
            orcidError: computed(() => getMyErrors(`/authors/${props.index}/orcid`)),
            authorErrors: computed(() => authorErrors(props.index))
        }
    },
    emits: ['closePressed', 'removePressed', 'update', 'moveUp', 'moveDown'],
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
