<template>
    <q-stepper
        animated
        color="primary"
        class="bg-secondary col-12 col-sm-2 text-primary"
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
            name="start"
            title="Start"
            v-bind:active-icon="errorStateScreenStart ? 'warning' : 'edit'"
            v-bind:error="errorStateScreenStart"
            v-bind:order="0"
            v-on:click="setStepName('start')"
        />

        <q-step
            name="authors"
            title="Authors"
            v-bind:active-icon="errorStateScreenAuthors ? 'warning' : 'edit'"
            v-bind:error="errorStateScreenAuthors"
            v-bind:order="1"
            v-on:click="setStepName('authors')"
        />

        <q-step
            active-icon="navigate_next"
            name="finish-minimum"
            title="Finish"
            v-bind:order="2"
            v-if="!showAdvanced"
            v-on:click="setStepName('finish-minimum')"
        />

        <q-step
            name="identifiers"
            title="Identifiers"
            v-bind:active-icon="errorStateScreenIdentifiers ? 'warning' : 'edit'"
            v-bind:error="errorStateScreenIdentifiers"
            v-bind:order="3"
            v-if="showAdvanced"
            v-on:click="setStepName('identifiers')"
        />

        <q-step
            name="related-resources"
            title="Related resources"
            v-bind:active-icon="errorStateScreenRelatedResources ? 'warning' : 'edit'"
            v-bind:error="errorStateScreenRelatedResources"
            v-bind:order="4"
            v-if="showAdvanced"
            v-on:click="setStepName('related-resources')"
        />

        <q-step
            name="abstract"
            title="Abstract"
            v-bind:order="5"
            v-if="showAdvanced"
            v-on:click="setStepName('abstract')"
        />

        <q-step
            name="keywords"
            title="Keywords"
            v-bind:active-icon="errorStateScreenKeywords ? 'warning' : 'edit'"
            v-bind:error="errorStateScreenKeywords"
            v-bind:order="6"
            v-if="showAdvanced"
            v-on:click="setStepName('keywords')"
        />

        <q-step
            name="license"
            title="License"
            v-bind:order="7"
            v-if="showAdvanced"
            v-on:click="setStepName('license')"
        />

        <q-step
            name="version-specific"
            title="Version specific"
            v-bind:active-icon="errorStateScreenVersionSpecific ? 'warning' : 'edit'"
            v-bind:error="errorStateScreenVersionSpecific"
            v-bind:order="8"
            v-if="showAdvanced"
            v-on:click="setStepName('version-specific')"
        />

        <q-step
            active-icon="navigate_next"
            name="finish-advanced"
            title="Finish"
            v-bind:order="9"
            v-if="showAdvanced"
            v-on:click="setStepName('finish-advanced')"
        />
    </q-stepper>
</template>

<script lang="ts">

import { useApp } from 'src/store/app'
import { useStepperErrors } from 'src/store/stepper-errors'

export default {
    setup () {
        const { showAdvanced, stepName, setStepName } = useApp()
        const {
            errorStateScreenAuthors,
            errorStateScreenIdentifiers,
            errorStateScreenKeywords,
            errorStateScreenRelatedResources,
            errorStateScreenStart,
            errorStateScreenVersionSpecific
        } = useStepperErrors()
        return {
            errorStateScreenAuthors,
            errorStateScreenIdentifiers,
            errorStateScreenKeywords,
            errorStateScreenRelatedResources,
            errorStateScreenStart,
            errorStateScreenVersionSpecific,
            setStepName,
            showAdvanced,
            stepName
        }
    }
}
</script>

<style scoped>

</style>
