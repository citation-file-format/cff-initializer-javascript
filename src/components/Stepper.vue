<template>
    <q-stepper
        active-icon=""
        animated
        class="full-height"
        flat
        header-nav
        inactive-icon=""
        v-bind:model-value="stepName"
        vertical
    >
        <q-step
            icon=""
            name="start"
            title="Start"
            v-bind:order="0"
            v-bind:error="!validScreens.start.value"
            v-on:click="setStepName('start')"
        />

        <q-step
            icon=""
            name="authors"
            title="Authors"
            v-bind:order="1"
            v-on:click="setStepName('authors')"
        />

        <q-step
            active-icon="navigate_next"
            icon=""
            name="finish-minimum"
            title="Finish"
            v-bind:order="2"
            v-if="!showAdvanced"
            v-on:click="setStepName('finish-minimum')"
        />

        <q-step
            icon=""
            name="identifiers"
            title="Identifiers"
            v-bind:order="3"
            v-if="showAdvanced"
            v-on:click="setStepName('identifiers')"
        />

        <q-step
            icon=""
            name="related-resources"
            title="Related resources"
            v-bind:order="4"
            v-if="showAdvanced"
            v-bind:error="!validScreens.relatedResources.value"
            v-on:click="setStepName('related-resources')"
        />

        <q-step
            icon=""
            name="abstract"
            title="Abstract"
            v-bind:order="5"
            v-if="showAdvanced"
            v-bind:error="!validScreens.abstract.value"
            v-on:click="setStepName('abstract')"
        />

        <q-step
            icon=""
            name="keywords"
            title="Keywords"
            v-bind:order="6"
            v-if="showAdvanced"
            v-on:click="setStepName('keywords')"
        />

        <q-step
            icon=""
            name="license"
            title="License"
            v-bind:order="7"
            v-if="showAdvanced"
            v-bind:error="!validScreens.license.value"
            v-on:click="setStepName('license')"
        />

        <q-step
            icon=""
            name="version-specific"
            title="Version specific"
            v-bind:order="8"
            v-if="showAdvanced"
            v-bind:error="!validScreens.versionSpecific.value"
            v-on:click="setStepName('version-specific')"
        />

        <q-step
            color="primary"
            icon=""
            name="preferred-citation"
            title="Preferred citation"
            v-bind:order="9"
            v-if="showAdvanced"
            v-on:click="setStepName('preferred-citation')"
        />

        <q-step
            active-icon="navigate_next"
            icon=""
            name="finish-advanced"
            title="Finish"
            v-bind:order="10"
            v-if="showAdvanced"
            v-on:click="setStepName('finish-advanced')"
        />
    </q-stepper>
</template>

<script lang="ts">

import { useApp } from '../store/app'
import { useValidScreens } from '../store/screens'

export default {
    setup () {
        const { showAdvanced, stepName, setStepName } = useApp()
        const validScreens = useValidScreens()
        return {
            showAdvanced,
            stepName,
            setStepName,
            validScreens
        }
    }
}
</script>

<style scoped>

</style>
