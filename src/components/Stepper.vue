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
            v-bind:active-icon="errorStateScreenStart ? 'warning' : 'edit'"
            v-bind:color="errorStateScreenStart ? 'negative' : 'primary'"
            v-bind:error="errorStateScreenStart"
            v-bind:order="0"
            v-on:click="setStepName('start')"
        />

        <q-step
            error-color="negative"
            error-icon="warning"
            icon=""
            name="authors"
            title="Authors"
            v-bind:active-icon="errorStateScreenAuthors ? 'warning' : 'edit'"
            v-bind:color="errorStateScreenAuthors ? 'negative' : 'primary'"
            v-bind:error="errorStateScreenAuthors"
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
            v-bind:active-icon="false ? 'warning' : 'edit'"
            v-bind:color="false ? 'negative' : 'primary'"
            v-bind:error="false"
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
            v-bind:active-icon="errorStateScreenRelatedResources ? 'warning' : 'edit'"
            v-bind:color="errorStateScreenRelatedResources ? 'negative' : 'primary'"
            v-bind:error="errorStateScreenRelatedResources"
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
            v-bind:active-icon="errorStateScreenKeywords ? 'warning' : 'edit'"
            v-bind:color="errorStateScreenKeywords ? 'negative' : 'primary'"
            v-bind:error="errorStateScreenKeywords"
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
            v-bind:active-icon="errorStateScreenVersionSpecific ? 'warning' : 'edit'"
            v-bind:color="errorStateScreenVersionSpecific ? 'negative' : 'primary'"
            v-bind:error="errorStateScreenVersionSpecific"
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
import { useStepperErrors } from 'src/store/stepper-errors'

export default {
    setup () {
        const { showAdvanced, stepName, setStepName } = useApp()
        const {
            errorStateScreenAuthors,
            errorStateScreenKeywords,
            errorStateScreenRelatedResources,
            errorStateScreenStart,
            errorStateScreenVersionSpecific
        } = useStepperErrors()
        return {
            errorStateScreenAuthors,
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
