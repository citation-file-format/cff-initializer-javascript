<template>
    <h1 id="form-title">
        Related resources
    </h1>

    <q-input
        aria-label="Code repository. Press tab to reach help button."
        data-cy="input-repository-code"
        label="Code repository"
        outlined
        standout
        v-bind:model-value="repositoryCode"
        v-bind:error="repositoryCodeErrors.length > 0"
        v-bind:error-message="repositoryCodeErrors.join(', ')"
        v-on:update:modelValue="setRepositoryCode"
    >
        <template v-slot:after>
            <InfoDialog name="repositoryCode" />
        </template>
    </q-input>

    <q-input
        aria-label="Webiste/Landing page. Press tab to reach help button."
        data-cy="input-url"
        label="Website/Landing page"
        outlined
        standout
        v-bind:model-value="url"
        v-bind:error="urlErrors.length > 0"
        v-bind:error-message="urlErrors.join(', ')"
        v-on:update:modelValue="setUrl"
    >
        <template v-slot:after>
            <InfoDialog name="url" />
        </template>
    </q-input>

    <q-input
        aria-label="Other repository. Press tab to reach help button."
        data-cy="input-repository"
        label="Other repository"
        outlined
        standout
        v-bind:model-value="repository"
        v-bind:error="repositoryErrors.length > 0"
        v-bind:error-message="repositoryErrors.join(', ')"
        v-on:update:modelValue="setRepository"
    >
        <template v-slot:after>
            <InfoDialog name="repository" />
        </template>
    </q-input>

    <q-input
        aria-label="Artifact repository. Press tab to reach help button."
        data-cy="input-repository-artifact"
        label="Artifact repository"
        outlined
        standout
        v-bind:model-value="repositoryArtifact"
        v-bind:error="repositoryArtifactErrors.length > 0"
        v-bind:error-message="repositoryArtifactErrors.join(', ')"
        v-on:update:modelValue="setRepositoryArtifact"
    >
        <template v-slot:after>
            <InfoDialog name="repositoryArtifact" />
        </template>
    </q-input>
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
