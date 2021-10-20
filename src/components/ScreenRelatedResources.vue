<template>
    <div id="metroline">
        <Stepper />
    </div>
    <div id="form">
        <div id="form-title">
            <h1 class="page-title">
                Related resources
            </h1>
        </div>

        <div id="form-content">
            <p class="question">
                The URL of a landing page/website for the work
            </p>
            <q-input
                bg-color="white"
                label="url"
                outlined
                standout
                v-bind:model-value="url"
                v-bind:error="false"
                v-bind:error-message="''"
                v-on:update:modelValue="setUrl"
            />

            <p class="question">
                The URL of the work in a repository
            </p>
            <q-input
                bg-color="white"
                label="repository"
                outlined
                standout
                v-bind:model-value="repository"
                v-bind:error="false"
                v-bind:error-message="''"
                v-on:update:modelValue="setRepository"
            />

            <p class="question">
                The URL of the work in a build artifact/binary repository
            </p>
            <q-input
                bg-color="white"
                label="repository-artifact"
                outlined
                standout
                v-bind:model-value="repositoryArtifact"
                v-bind:error="false"
                v-bind:error-message="''"
                v-on:update:modelValue="setRepositoryArtifact"
            />

            <p class="question">
                The URL of the work in a source code repository
            </p>
            <q-input
                bg-color="white"
                label="repository-code"
                outlined
                standout
                v-bind:model-value="repositoryCode"
                v-bind:error="false"
                v-bind:error-message="''"
                v-on:update:modelValue="setRepositoryCode"
            />
        </div>

        <div id="form-button-bar">
            <StepperActions />
        </div>
    </div>
</template>

<script lang="ts">
import Stepper from 'components/Stepper.vue'
import StepperActions from 'components/StepperActions.vue'
import { defineComponent } from 'vue'
import { useCff } from '../store/cff'

export default defineComponent({
    name: 'ScreenRelatedResources',
    components: {
        Stepper,
        StepperActions
    },
    setup () {
        const {
            repository, repositoryArtifact, repositoryCode, url,
            setRepository, setRepositoryArtifact, setRepositoryCode, setUrl
        } = useCff()
        return {
            repository,
            repositoryArtifact,
            repositoryCode,
            url,
            setRepository,
            setRepositoryArtifact,
            setRepositoryCode,
            setUrl
        }
    }
})
</script>

<style scoped>
</style>
