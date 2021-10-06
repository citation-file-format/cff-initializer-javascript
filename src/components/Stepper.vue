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
            color="primary"
            icon=""
            name="start"
            title="Start"
            v-bind:order="0"
            v-on:click="setStepName('start')"
        />

        <q-step
            color="primary"
            icon=""
            name="authors"
            title="Authors"
            v-bind:order="1"
            v-on:click="setStepName('authors')"
        />

        <q-step
            color="primary"
            icon=""
            name="finish-minimum"
            title="Finish"
            v-bind:order="2"
            v-if="!showAdvanced"
            v-on:click="setStepName('finish-minimum')"
        />

        <q-step
            color="primary"
            icon=""
            name="identifiers"
            title="Identifiers"
            v-bind:order="3"
            v-if="showAdvanced"
            v-on:click="setStepName('identifiers')"
        />

        <q-step
            color="primary"
            icon=""
            name="related-resources"
            title="Related resources"
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
            color="primary"
            icon=""
            name="keywords"
            title="Keywords"
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
            color="primary"
            icon=""
            name="version-specific"
            title="Version specific"
            v-bind:order="8"
            v-if="showAdvanced"
            v-on:click="setStepName('version-specific')"
        />

        <q-step
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

export default {
    setup () {
        const { showAdvanced, stepName, setStepName } = useApp()

        return {
            showAdvanced,
            stepName,
            setStepName
        }
    }
}
</script>

<style scoped>

</style>
