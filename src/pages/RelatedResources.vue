<template>
    <div class="q-pa-md col-flex">
        <div
            class="q-gutter-md title-field text-dark"
        >
            <p class="q-mt-xl text-h5">
                The URL of a landing page/website for the work
            </p>
            <q-input
                v-bind:model-value="url"
                v-on:update:modelValue="setUrl"
                label="url"
                outlined
                standout
                bg-color="white"
                v-bind:rules="[ val => val && val.length > 3 || 'Please use minimum 3 characters']"
            />

            <p class="q-mt-xl text-h5">
                The URL of the work in a repository
            </p>
            <q-input
                v-bind:model-value="repository"
                v-on:update:modelValue="setRepository"
                label="repository"
                outlined
                standout
                bg-color="white"
                v-bind:rules="[ val => val && val.length > 3 || 'Please use minimum 3 characters']"
            />

            <p class="q-mt-xl text-h5">
                The URL of the work in a build artifact/binary repository
            </p>
            <q-input
                v-bind:model-value="repository_artifact"
                v-on:update:modelValue="setRepositoryArtifact"
                label="repository_artifact"
                outlined
                standout
                bg-color="white"
                v-bind:rules="[ val => val && val.length > 3 || 'Please use minimum 3 characters']"
            />

            <p class="q-mt-xl text-h5">
                The URL of the work in a source code repository
            </p>
            <q-input
                v-bind:model-value="repository_code"
                v-on:update:modelValue="setRepositoryCode"
                label="repository_code"
                outlined
                standout
                bg-color="white"
                v-bind:rules="[ val => val && val.length > 3 || 'Please use minimum 3 characters']"
            />
        </div>
    </div>
    <StepperActions />
</template>

<script lang="ts">
import StepperActions from 'components/StepperActions.vue'
import { defineComponent } from 'vue'
import { useCFF } from '../store/cff'

export default defineComponent({
    name: 'PageRelatedResources',
    components: {
        StepperActions
    },
    setup () {
        const cff = useCFF()
        return {
            repository: cff.repository,
            repository_artifact: cff.repository_artifact,
            repository_code: cff.repository_code,
            url: cff.url,
            setRepository: cff.setRepository,
            setRepositoryArtifact: cff.setRepositoryArtifact,
            setRepositoryCode: cff.setRepositoryCode,
            setUrl: cff.setUrl
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
    min-width: 300px;
    max-width: 700px;
}

</style>
