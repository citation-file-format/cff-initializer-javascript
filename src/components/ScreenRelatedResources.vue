<template>
    <h1 id="form-title">
        Related resources
    </h1>

    <h2 class="question">
        What is the URL of the work in a source code repository?
        <InfoDialog name="repositoryCode" />
    </h2>
    <q-input
        bg-color="white"
        data-cy="input-repository-code"
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
        <InfoDialog name="url" />
    </h2>
    <q-input
        bg-color="white"
        data-cy="input-url"
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
        <InfoDialog name="repository" />
    </h2>
    <q-input
        bg-color="white"
        data-cy="input-repository"
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
        <InfoDialog name="repositoryArtifact" />
    </h2>
    <q-input
        bg-color="white"
        data-cy="input-repository-artifact"
        label="repository-artifact"
        outlined
        standout
        v-bind:class="repositoryArtifactErrors.length > 0 ? 'has-error' : ''"
        v-bind:model-value="repositoryArtifact"
        v-bind:error="repositoryArtifactErrors.length > 0"
        v-bind:error-message="repositoryArtifactErrors.join(', ')"
        v-on:update:modelValue="setRepositoryArtifact"
    />
</template>

<script lang="ts">
import { byError, repositoryArtifactQueries, repositoryCodeQueries, repositoryQueries, unique, urlQueries } from 'src/error-filtering'
import { computed, defineComponent } from 'vue'
import InfoDialog from 'components/InfoDialog.vue'
import { useCff } from 'src/store/cff'
import { useValidation } from 'src/store/validation'

export default defineComponent({
    name: 'ScreenRelatedResources',
    components: {
        InfoDialog
    },
    setup () {
        const {
            repository, repositoryArtifact, repositoryCode, url,
            setRepository, setRepositoryArtifact, setRepositoryCode, setUrl
        } = useCff()
        const { errors } = useValidation()
        const repositoryCodeErrors = computed(() => {
            return repositoryCodeQueries
                .filter(byError(errors.value))
                .map(query => query.replace.message)
                .filter(unique)
        })
        const urlErrors = computed(() => {
            return urlQueries
                .filter(byError(errors.value))
                .map(query => query.replace.message)
                .filter(unique)
        })
        const repositoryErrors = computed(() => {
            return repositoryQueries
                .filter(byError(errors.value))
                .map(query => query.replace.message)
                .filter(unique)
        })
        const repositoryArtifactErrors = computed(() => {
            return repositoryArtifactQueries
                .filter(byError(errors.value))
                .map(query => query.replace.message)
                .filter(unique)
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
