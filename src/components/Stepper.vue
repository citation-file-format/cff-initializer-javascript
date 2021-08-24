<template>
    <div class="q-pa-md">
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
                v-bind:error="!validScreens.start"
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
                v-bind:error="!validScreens.authors"
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
                v-bind:error="!validScreens.identifiers"
            />

            <q-step
                color="primary"
                icon=""
                name="related-resources"
                title="Related resources"
                v-bind:order="4"
                v-if="showAdvanced"
                v-on:click="setStepName('related-resources')"
                v-bind:error="!validScreens['related-resources']"
            />

            <q-step
                color="primary"
                icon=""
                name="abstract"
                title="Abstract"
                v-bind:order="5"
                v-if="showAdvanced"
                v-on:click="setStepName('abstract')"
                v-bind:error="!validScreens.abstract"
            />

            <q-step
                color="primary"
                icon=""
                name="keywords"
                title="Keywords"
                v-bind:order="6"
                v-if="showAdvanced"
                v-on:click="setStepName('keywords')"
                v-bind:error="!validScreens.keywords"
            />

            <q-step
                color="primary"
                icon=""
                name="license"
                title="License"
                v-bind:order="7"
                v-if="showAdvanced"
                v-on:click="setStepName('license')"
                v-bind:error="!validScreens.license"
            />

            <q-step
                color="primary"
                icon=""
                name="version-specific"
                title="Version specific"
                v-bind:order="8"
                v-if="showAdvanced"
                v-on:click="setStepName('version-specific')"
                v-bind:error="!validScreens['version-specific']"
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
    </div>
</template>

<script lang="ts">
import { useFileValidator } from 'src/store/validator'

import { useApp } from '../store/app'

export default {
    setup () {
        const { showAdvanced, stepName, setStepName } = useApp()
        const { validScreens } = useFileValidator()

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
