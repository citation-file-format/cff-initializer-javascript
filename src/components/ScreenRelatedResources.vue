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
                <SchemaGuideLink anchor="#repository-code" />
            </p>
            <q-input
                bg-color="white"
                label="repository-code"
                outlined
                standout
                v-bind:model-value="repositoryCode"
                v-bind:error="repositoryCodeError != null"
                v-bind:error-message="repositoryCodeError"
                v-on:update:modelValue="setRepositoryCode"
            />

            <p class="question">
                What is the URL of a landing page/website for the work?
                <SchemaGuideLink anchor="#url" />
            </p>
            <q-input
                bg-color="white"
                label="url"
                outlined
                standout
                v-bind:model-value="url"
                v-bind:error="urlError != null"
                v-bind:error-message="urlError"
                v-on:update:modelValue="setUrl"
            />

            <p class="question">
                What is the URL of the work in a repository?
                <SchemaGuideLink anchor="#repository" />
            </p>
            <q-input
                bg-color="white"
                label="repository"
                outlined
                standout
                v-bind:model-value="repository"
                v-bind:error="repositoryError != null"
                v-bind:error-message="repositoryError"
                v-on:update:modelValue="setRepository"
            />

            <p class="question">
                What is the URL of the work in a build artifact/binary repository?
                <SchemaGuideLink anchor="#repository-artifact" />
            </p>
            <q-input
                bg-color="white"
                label="repository-artifact"
                outlined
                standout
                v-bind:model-value="repositoryArtifact"
                v-bind:error="repositoryArtifactError != null"
                v-bind:error-message="repositoryArtifactError"
                v-on:update:modelValue="setRepositoryArtifact"
            />
        </div>

        <div id="form-button-bar">
            <StepperActions />
        </div>
    </div>
</template>

<script lang="ts">
import SchemaGuideLink from 'components/SchemaGuideLink.vue'
import Stepper from 'components/Stepper.vue'
import StepperActions from 'components/StepperActions.vue'
import { computed, defineComponent } from 'vue'
import { useCff } from '../store/cff'
import { getMatchingError } from 'src/store/validator'

export default defineComponent({
    name: 'ScreenRelatedResources',
    components: {
        SchemaGuideLink,
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
            repositoryError: computed(() => getMatchingError({ instancePath: '/repository' })),
            repositoryArtifactError: computed(() => getMatchingError({ instancePath: '/repository-artifact' })),
            repositoryCodeError: computed(() => getMatchingError({ instancePath: '/repository-code' })),
            urlError: computed(() => getMatchingError({ instancePath: '/url' }))
        }
    }
})

</script>

<style scoped>
</style>
