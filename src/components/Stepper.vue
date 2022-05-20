<template>
    <q-stepper
        active-icon=""
        animated
        class="bg-secondary text-primary"
        flat
        header-nav
        inactive-icon=""
        v-bind:model-value="stepName"
        vertical
    >
        <q-step
            error-color="negative"
            error-icon="warning"
            icon=""
            name="start"
            title="Start"
            v-bind:active-icon="isValidScreenStart ? 'warning' : 'edit'"
            v-bind:color="isValidScreenStart ? 'negative' : 'primary'"
            v-bind:error="isValidScreenStart"
            v-bind:order="0"
            v-on:click="setStepName('start')"
        />

        <q-step
            error-color="negative"
            error-icon="warning"
            icon=""
            name="authors"
            title="Authors"
            v-bind:active-icon="isValidScreenAuthors.hasError ? 'warning' : 'edit'"
            v-bind:color="isValidScreenAuthors.hasError ? 'negative' : 'primary'"
            v-bind:error="isValidScreenAuthors.hasError"
            v-bind:order="1"
            v-on:click="setStepName('authors')"
        />

        <q-step
            active-icon="navigate_next"
            color="primary"
            icon=""
            name="finish-minimum"
            title="Finish"
            v-bind:order="2"
            v-if="!showAdvanced"
            v-on:click="setStepName('finish-minimum')"
        />

        <q-step
            error-color="negative"
            error-icon="warning"
            icon=""
            name="identifiers"
            title="Identifiers"
            v-bind:active-icon="isValidScreenIdentifiers.hasError ? 'warning' : 'edit'"
            v-bind:color="isValidScreenIdentifiers.hasError ? 'negative' : 'primary'"
            v-bind:error="isValidScreenIdentifiers.hasError"
            v-bind:order="3"
            v-if="showAdvanced"
            v-on:click="setStepName('identifiers')"
        />

        <q-step
            error-color="negative"
            error-icon="warning"
            icon=""
            name="related-resources"
            title="Related resources"
            v-bind:active-icon="isValidScreenRelatedResources.hasError ? 'warning' : 'edit'"
            v-bind:color="isValidScreenRelatedResources.hasError ? 'negative' : 'primary'"
            v-bind:error="isValidScreenRelatedResources.hasError"
            v-bind:order="4"
            v-if="showAdvanced"
            v-on:click="setStepName('related-resources')"
        />
        <q-step
            color="primary"
            icon=""
            name="abstract"
            title="Abstract"
            v-bind:order="5"
            v-if="showAdvanced"
            v-on:click="setStepName('abstract')"
        />

        <q-step
            error-color="negative"
            error-icon="warning"
            icon=""
            name="keywords"
            title="Keywords"
            v-bind:active-icon="isValidScreenKeywords.hasError ? 'warning' : 'edit'"
            v-bind:color="isValidScreenKeywords.hasError ? 'negative' : 'primary'"
            v-bind:error="isValidScreenKeywords.hasError"
            v-bind:order="6"
            v-if="showAdvanced"
            v-on:click="setStepName('keywords')"
        />

        <q-step
            color="primary"
            icon=""
            name="license"
            title="License"
            v-bind:order="7"
            v-if="showAdvanced"
            v-on:click="setStepName('license')"
        />

        <q-step
            error-color="negative"
            error-icon="warning"
            icon=""
            name="version-specific"
            title="Version specific"
            v-bind:active-icon="isValidScreenVersionSpecific ? 'warning' : 'edit'"
            v-bind:color="isValidScreenVersionSpecific ? 'negative' : 'primary'"
            v-bind:error="isValidScreenVersionSpecific"
            v-bind:order="8"
            v-if="showAdvanced"
            v-on:click="setStepName('version-specific')"
        />
        <q-step
            active-icon="navigate_next"
            color="primary"
            icon=""
            name="finish-advanced"
            title="Finish"
            v-bind:order="9"
            v-if="showAdvanced"
            v-on:click="setStepName('finish-advanced')"
        />
    </q-stepper>
</template>

<script lang="ts">

import { useApp } from '../store/app'
import { getMatchingError, getArrayOfMatchingError } from 'src/store/validator'
import { computed } from 'vue'
import { useCff } from 'src/store/cff'
import { authorsErrors } from 'src/authors-errors'
import { relatedResourcesErrors } from 'src/related-resources-errors'
import { identifiersErrors } from 'src/identifiers-errors'
import { keywordsErrors } from 'src/keywords-errors'

export default {
    setup () {
        const { showAdvanced, stepName, setStepName } = useApp()
        const { authors, identifiers, keywords } = useCff()
        return {
            isValidScreenAuthors: computed(() => authorsErrors(authors.value)),
            isValidScreenIdentifiers: computed(() => identifiersErrors(identifiers.value)),
            isValidScreenRelatedResources: computed(relatedResourcesErrors),
            isValidScreenStart: computed(() => getArrayOfMatchingError([
                { params: { missingProperty: 'title' } },
                { params: { missingProperty: 'message' } }
            ]).length > 0),
            isValidScreenKeywords: computed(() => keywordsErrors(keywords.value)),
            isValidScreenVersionSpecific: computed(() => getMatchingError({ instancePath: '/date-released' }) !== null),
            setStepName,
            showAdvanced,
            stepName
        }
    }
}
</script>

<style scoped>

</style>
