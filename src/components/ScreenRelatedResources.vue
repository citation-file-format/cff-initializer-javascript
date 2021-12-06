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
                What is the URL of the work in a source code repository?
                <SchemaInfoIcon section="repository-code" />
            </p>
            <q-input
                bg-color="white"
                label="repository-code"
                outlined
                standout
                v-bind:model-value="repositoryCode"
                v-bind:error="repositoryCodeError.hasError"
                v-bind:error-message="repositoryCodeError.messages.join(', ')"
                v-on:update:modelValue="setRepositoryCode"
            />

            <p class="question">
                What is the URL of a landing page/website for the work?
                <SchemaInfoIcon section="url" />
            </p>
            <q-input
                bg-color="white"
                label="url"
                outlined
                standout
                v-bind:model-value="url"
                v-bind:error="urlError.hasError"
                v-bind:error-message="urlError.messages.join(', ')"
                v-on:update:modelValue="setUrl"
            />

            <p class="question">
                What is the URL of the work in a repository?
                <SchemaInfoIcon section="repository" />
            </p>
            <q-input
                bg-color="white"
                label="repository"
                outlined
                standout
                v-bind:model-value="repository"
                v-bind:error="repositoryError.hasError"
                v-bind:error-message="repositoryError.messages.join(', ')"
                v-on:update:modelValue="setRepository"
            />

            <p class="question">
                What is the URL of the work in a build artifact/binary repository?
                <SchemaInfoIcon section="repository-artifact" />
            </p>
            <q-input
                bg-color="white"
                label="repository-artifact"
                outlined
                standout
                v-bind:model-value="repositoryArtifact"
                v-bind:error="repositoryArtifactError.hasError"
                v-bind:error-message="repositoryArtifactError.messages.join(', ')"
                v-on:update:modelValue="setRepositoryArtifact"
            />
        </div>

        <div id="form-button-bar">
            <StepperActions />
        </div>
    </div>
</template>

<script lang="ts">
import SchemaInfoIcon from 'components/SchemaInfoIcon.vue'
import Stepper from 'components/Stepper.vue'
import StepperActions from 'components/StepperActions.vue'
import { computed, defineComponent } from 'vue'
import { useCff } from '../store/cff'
import { getMyErrors } from 'src/store/validator'

export default defineComponent({
    name: 'ScreenRelatedResources',
    components: {
        SchemaInfoIcon,
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
            setUrl,
            repositoryError: computed(() => getMyErrors('/repository')),
            repositoryArtifactError: computed(() => getMyErrors('/repository-artifact')),
            repositoryCodeError: computed(() => getMyErrors('/repository-code')),
            urlError: computed(() => getMyErrors('/url'))
        }
    }
})
</script>

<style scoped>
</style>
