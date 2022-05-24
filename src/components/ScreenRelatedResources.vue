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
import { defineComponent } from 'vue'
import { useCff } from '../store/cff'

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
            setUrl
        }
    }
})
</script>

<style scoped>
</style>
