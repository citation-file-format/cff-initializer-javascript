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
                v-bind:error="urlError.hasError"
                v-bind:error-message="urlError.message"
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
                v-bind:error="repositoryError.hasError"
                v-bind:error-message="repositoryError.message"
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
                v-bind:error="repositoryArtifactError.hasError"
                v-bind:error-message="repositoryArtifactError.message"
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
                v-bind:error="repositoryCodeError.hasError"
                v-bind:error-message="repositoryCodeError.message"
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
import { makeOptionalFieldValidator } from '../validator'
import { defineComponent } from 'vue'
import { useCff } from '../store/cff'
import { useFieldErrors } from 'src/store/errors'

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

        const {
            url: urlError,
            repository: repositoryError,
            repositoryArtifact: repositoryArtifactError,
            repositoryCode: repositoryCodeError
        } = useFieldErrors()

        return {
            repository,
            repositoryArtifact,
            repositoryCode,
            url,
            urlError,
            repositoryError,
            repositoryArtifactError,
            repositoryCodeError,
            setRepository,
            setRepositoryArtifact,
            setRepositoryCode,
            setUrl,
            // validateUrl: makeOptionalFieldValidator('/definitions/url'),
            validateRepository: makeOptionalFieldValidator('/definitions/url'),
            validateRepositoryArtifact: makeOptionalFieldValidator('/definitions/url'),
            validateRepositoryCode: makeOptionalFieldValidator('/definitions/url')
        }
    }
})
</script>

<style scoped>
</style>
