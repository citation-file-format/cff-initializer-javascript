<template>
    <div class="q-pa-md col-flex">
        <div
            class="q-gutter-md title-field text-dark"
        >
            <p class="q-mt-xl page-title">
                Related resources
            </p>

            <p class="question">
                The URL of a landing page/website for the work
            </p>
            <q-input
                bg-color="white"
                label="url"
                outlined
                standout
                v-bind:model-value="url"
                v-bind:error="errors.url?.length > 0"
                v-bind:error-message="errors.url ? errors.url.join(', ') : ''"
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
                v-bind:error="errors.repository?.length > 0"
                v-bind:error-message="errors.repository ? errors.repository.join(', ') : ''"
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
                v-bind:error="errors['repository-artifact']?.length > 0"
                v-bind:error-message="errors['repository-artifact'] ? errors['repository-artifact'].join(', ') : ''"
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
                v-bind:error="errors['repository-code']?.length > 0"
                v-bind:error-message="errors['repository-code'] ? errors['repository-code'].join(', ') : ''"
                v-on:update:modelValue="setRepositoryCode"
            />
        </div>
    </div>
    <StepperActions />
</template>

<script lang="ts">
import StepperActions from 'components/StepperActions.vue'
import { useFileValidator } from '../validator'
import { defineComponent } from 'vue'
import { useCff } from '../store/cff'

export default defineComponent({
    name: 'RelatedResources',
    components: {
        StepperActions
    },
    setup () {
        const {
            repository, repositoryArtifact, repositoryCode, url,
            setRepository, setRepositoryArtifact, setRepositoryCode, setUrl
        } = useCff()
        const { groupedErrors } = useFileValidator()
        return {
            repository,
            repositoryArtifact,
            repositoryCode,
            url,
            setRepository,
            setRepositoryArtifact,
            setRepositoryCode,
            setUrl,
            errors: groupedErrors
        }
    }
})
</script>

<style scoped>

.col-flex {
    flex: 1;
}
.title-field {
    margin-right: 120px;
    max-width: 700px;
    min-width: 300px;
}

</style>
