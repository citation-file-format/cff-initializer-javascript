<template>
    <div id="form-title">
        <h1 class="page-title">
            Related resources
        </h1>
    </div>

    <div id="form-content">
        <h2 class="question">
            What is the URL of the work in a source code repository?
            <q-icon
                name="ion-information-circle-outline"
                size="24px"
                color="primary"
                v-on:click="showRepositoryCodeHelp = true"
                style="cursor:pointer;"
            />
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
            <q-icon
                name="ion-information-circle-outline"
                size="24px"
                color="primary"
                v-on:click="showUrlHelp = true"
                style="cursor:pointer;"
            />
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
            <q-icon
                name="ion-information-circle-outline"
                size="24px"
                color="primary"
                v-on:click="showRepositoryHelp = true"
                style="cursor:pointer;"
            />
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
            <q-icon
                name="ion-information-circle-outline"
                size="24px"
                color="primary"
                v-on:click="showRepositoryArtifactHelp = true"
                style="cursor:pointer;"
            />
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
        <InfoDialog
            v-model="showRepositoryHelp"
            v-bind:data="helpData.repository"
        />
        <InfoDialog
            v-model="showRepositoryArtifactHelp"
            v-bind:data="helpData.repositoryArtifact"
        />
        <InfoDialog
            v-model="showRepositoryCodeHelp"
            v-bind:data="helpData.repositoryCode"
        />
        <InfoDialog
            v-model="showUrlHelp"
            v-bind:data="helpData.url"
        />
    </div>
</template>

<script lang="ts">
import { byError, repositoryArtifactQueries, repositoryCodeQueries, repositoryQueries, urlQueries } from 'src/error-filtering'
import { computed, defineComponent, onUpdated, ref } from 'vue'
import InfoDialog from 'components/InfoDialog.vue'
import { helpData } from 'src/store/help-data'
import { useCff } from 'src/store/cff'
import { useStepperErrors } from 'src/store/stepper-errors'
import { useValidation } from 'src/store/validation'

export default defineComponent({
    name: 'ScreenRelatedResources',
    components: {
        InfoDialog
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
            helpData,
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
            setUrl,
            showRepositoryHelp: ref(false),
            showRepositoryArtifactHelp: ref(false),
            showRepositoryCodeHelp: ref(false),
            showUrlHelp: ref(false)
        }
    }
})
</script>

<style scoped>
</style>
