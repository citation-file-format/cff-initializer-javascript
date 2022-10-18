<template>
    <q-stepper
        animated
        color="primary"
        class="bg-secondary col-12 col-sm-2 gt-xs text-primary"
        error-color="negative"
        error-icon="warning"
        flat
        header-nav
        inactive-color="primary"
        inactive-icon=""
        v-bind:model-value="stepName"
        vertical
    >
        <q-step
            data-cy="step-start"
            name="start"
            title="Start"
            v-bind:active-icon="errorStateScreenStart ? 'warning' : 'edit'"
            v-bind:error="errorStateScreenStart"
            v-bind:order="0"
            v-on:click="setStepName('start')"
        />

        <q-step
            data-cy="step-authors"
            name="authors"
            title="Authors"
            v-bind:active-icon="errorStateScreenAuthors ? 'warning' : 'edit'"
            v-bind:error="errorStateScreenAuthors"
            v-bind:order="1"
            v-on:click="setStepName('authors')"
        />

        <q-step
            data-cy="step-identifiers"
            name="identifiers"
            title="Identifiers"
            v-bind:active-icon="errorStateScreenIdentifiers ? 'warning' : 'edit'"
            v-bind:error="errorStateScreenIdentifiers"
            v-bind:order="2"
            v-if="showAdvanced"
            v-on:click="setStepName('identifiers')"
        />

        <q-step
            data-cy="step-related-resources"
            name="related-resources"
            title="Related resources"
            v-bind:active-icon="errorStateScreenRelatedResources ? 'warning' : 'edit'"
            v-bind:error="errorStateScreenRelatedResources"
            v-bind:order="3"
            v-if="showAdvanced"
            v-on:click="setStepName('related-resources')"
        />

        <q-step
            data-cy="step-abstract"
            name="abstract"
            title="Abstract"
            v-bind:order="4"
            v-if="showAdvanced"
            v-on:click="setStepName('abstract')"
        />

        <q-step
            data-cy="step-keywords"
            name="keywords"
            title="Keywords"
            v-bind:active-icon="errorStateScreenKeywords ? 'warning' : 'edit'"
            v-bind:error="errorStateScreenKeywords"
            v-bind:order="5"
            v-if="showAdvanced"
            v-on:click="setStepName('keywords')"
        />

        <q-step
            data-cy="step-license"
            name="license"
            title="License"
            v-bind:order="6"
            v-if="showAdvanced"
            v-on:click="setStepName('license')"
        />

        <q-step
            data-cy="step-version-specific"
            name="version-specific"
            title="Version specific"
            v-bind:active-icon="errorStateScreenVersionSpecific ? 'warning' : 'edit'"
            v-bind:error="errorStateScreenVersionSpecific"
            v-bind:order="7"
            v-if="showAdvanced"
            v-on:click="setStepName('version-specific')"
        />

        <q-step
            active-icon="navigate_next"
            data-cy="step-finish"
            name="finish"
            title="Finish"
            v-bind:order="showAdvanced ? 8 : 2"
            v-on:click="setStepName('finish')"
        />
    </q-stepper>
</template>

<script lang="ts">

import {
    byError,
    instancePathStartsWithMatcher,
    screenAuthorQueries,
    screenIdentifiersQueries,
    screenKeywordsQueries,
    screenRelatedResourcesQueries,
    screenStartQueries,
    screenVersionSpecificQueries
} from 'src/error-filtering'
import { computed } from 'vue'
import { useApp } from 'src/store/app'
import { useValidation } from 'src/store/validation'

export default {
    setup () {
        const { showAdvanced, stepName, setStepName } = useApp()
        const { errors } = useValidation()
        return {
            errorStateScreenAuthors: computed(() => {
                return screenAuthorQueries
                    .filter(byError(errors.value, instancePathStartsWithMatcher))
                    .length > 0
            }),
            errorStateScreenIdentifiers: computed(() => {
                return screenIdentifiersQueries
                    .filter(byError(errors.value, instancePathStartsWithMatcher))
                    .length > 0
            }),
            errorStateScreenKeywords: computed(() => {
                return screenKeywordsQueries
                    .filter(byError(errors.value, instancePathStartsWithMatcher))
                    .length > 0
            }),
            errorStateScreenRelatedResources: computed(() => {
                return screenRelatedResourcesQueries
                    .filter(byError(errors.value, instancePathStartsWithMatcher))
                    .length > 0
            }),
            errorStateScreenStart: computed(() => {
                return screenStartQueries
                    .filter(byError(errors.value))
                    .length > 0
            }),
            errorStateScreenVersionSpecific: computed(() => {
                return screenVersionSpecificQueries
                    .filter(byError(errors.value, instancePathStartsWithMatcher))
                    .length > 0
            }),
            setStepName,
            showAdvanced,
            stepName
        }
    }
}
</script>

<style scoped>

</style>
