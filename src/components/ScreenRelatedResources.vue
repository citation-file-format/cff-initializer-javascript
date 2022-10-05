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
import { byError, repositoryArtifactQueries, repositoryCodeQueries, repositoryQueries, unique, urlQueries } from 'src/error-filtering'
import { computed, defineComponent, onUpdated, ref } from 'vue'
import InfoDialog from 'components/InfoDialog.vue'
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
        const helpData = {
            repository: {
                title: 'repository',
                url: [
                    {
                        text: 'Click here to see the documentation for repository.',
                        link: 'https://github.com/citation-file-format/citation-file-format/blob/1.2.0/schema-guide.md#repository'
                    }
                ],
                description: 'URL of the work in a repository/archive that is neither a source code repository nor a build artifact repository',
                examples: [
                    'https://ascl.net/2105.013'
                ]
            },
            repositoryArtifact: {
                title: 'repository-artifact',
                url: [
                    {
                        text: 'Click here to see the documentation for repository-artifact.',
                        link: 'https://github.com/citation-file-format/citation-file-format/blob/1.2.0/schema-guide.md#repository-artifact'
                    }
                ],
                description: 'URL of the work in a build artifact/binary repository',
                examples: [
                    'https://search.maven.org/artifact/org.corpus-tools/cff-maven-plugin/0.4.0/maven-plugin'
                ]
            },
            repositoryCode: {
                title: 'repository-code',
                url: [
                    {
                        text: 'Click here to see the documentation for repository-code.',
                        link: 'https://github.com/citation-file-format/citation-file-format/blob/1.2.0/schema-guide.md#repository-code'
                    }
                ],
                description: 'URL of the work in a source code repository',
                examples: [
                    'https://github.com/citation-file-format/citation-file-format'
                ]
            },
            url: {
                title: 'url',
                url: [
                    {
                        text: 'Click here to see the documentation for url.',
                        link: 'https://github.com/citation-file-format/citation-file-format/blob/1.2.0/schema-guide.md#url'
                    }
                ],
                description: 'URL of the landing page/website for the work',
                examples: [
                    'https://citation-file-format.github.io/'
                ]
            }
        }
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
