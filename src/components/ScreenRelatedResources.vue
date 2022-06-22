<template>
    <Stepper />
    <div
        id="form"
        class="col-12 col-md-6 col-sm-7"
    >
        <div id="form-title">
            <h1 class="page-title">
                Related resources
            </h1>
        </div>

        <div id="form-content">
            <h2 class="question">
                What is the URL of the work in a source code repository?
                <SchemaGuideLink anchor="#repository-code" />
            </h2>
            <q-input
                bg-color="white"
                label="repository-code"
                outlined
                standout
                v-bind:class="repositoryCodeErrors.length > 0 ? 'has-error' : ''"
                v-bind:model-value="repositoryCode"
                v-bind:error="repositoryCodeErrors.length > 0"
                v-bind:error-message="repositoryCodeErrors.join(', ')"
                v-on:update:modelValue="setRepositoryCode"
            />

            <h2 class="question">
                What is the URL of a landing page/website for the work?
                <SchemaGuideLink anchor="#url" />
            </h2>
            <q-input
                bg-color="white"
                label="url"
                outlined
                standout
                v-bind:class="urlErrors.length > 0 ? 'has-error' : ''"
                v-bind:model-value="url"
                v-bind:error="urlErrors.length > 0"
                v-bind:error-message="urlErrors.join(', ')"
                v-on:update:modelValue="setUrl"
            />

            <h2 class="question">
                What is the URL of the work in a repository?
                <SchemaGuideLink anchor="#repository" />
            </h2>
            <q-input
                bg-color="white"
                label="repository"
                outlined
                standout
                v-bind:class="repositoryErrors.length > 0 ? 'has-error' : ''"
                v-bind:model-value="repository"
                v-bind:error="repositoryErrors.length > 0"
                v-bind:error-message="repositoryErrors.join(', ')"
                v-on:update:modelValue="setRepository"
            />

            <h2 class="question">
                What is the URL of the work in a build artifact/binary repository?
                <SchemaGuideLink anchor="#repository-artifact" />
            </h2>
            <q-input
                bg-color="white"
                label="repository-artifact"
                outlined
                standout
                v-bind:class="repositoryArtifactErrors.length > 0 ? 'has-error' : ''"
                v-bind:model-value="repositoryArtifact"
                v-bind:error="repositoryArtifactErrors.length > 0"
                v-bind:error-message="repositoryArtifactErrors.join(', ')"
                v-on:update:modelValue="setRepositoryArtifact"
            />
        </div>

        <div id="form-button-bar">
            <StepperActions />
        </div>
    </div>
</template>

<script lang="ts">
import { byError, repositoryArtifactQueries, repositoryCodeQueries, repositoryQueries, urlQueries } from 'src/error-filtering'
import { computed, defineComponent, onUpdated } from 'vue'
import SchemaGuideLink from 'components/SchemaGuideLink.vue'
import Stepper from 'components/Stepper.vue'
import StepperActions from 'components/StepperActions.vue'
import { useCff } from 'src/store/cff'
import { useStepperErrors } from 'src/store/stepper-errors'
import { useValidation } from 'src/store/validation'

export default defineComponent({
    name: 'ScreenRelatedResources',
    components: {
        SchemaGuideLink,
        Stepper,
        StepperActions
    },
    setup () {
        onUpdated(() => {
            const { setErrorStateScreenRelatedResources } = useStepperErrors()
            setErrorStateScreenRelatedResources(document.getElementsByClassName('has-error').length > 0)
        })
        const {
            repository, repositoryArtifact, repositoryCode, url,
            setRepository, setRepositoryArtifact, setRepositoryCode, setUrl
        } = useCff()
        const { errors } = useValidation()
        const repositoryCodeErrors = computed(() => {
            return repositoryCodeQueries
                .filter(byError(errors.value))
                .map(query => query.replace.message)
        })
        const urlErrors = computed(() => {
            return urlQueries
                .filter(byError(errors.value))
                .map(query => query.replace.message)
        })
        const repositoryErrors = computed(() => {
            return repositoryQueries
                .filter(byError(errors.value))
                .map(query => query.replace.message)
        })
        const repositoryArtifactErrors = computed(() => {
            return repositoryArtifactQueries
                .filter(byError(errors.value))
                .map(query => query.replace.message)
        })
        return {
            repository,
            repositoryErrors,
            repositoryArtifact,
            repositoryArtifactErrors,
            repositoryCode,
            repositoryCodeErrors,
            url,
            urlErrors,
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
