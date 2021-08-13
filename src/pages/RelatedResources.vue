<template>
    <div class="q-pa-md col-flex">
        <div
            class="q-gutter-md title-field text-dark"
        >
            <p class="q-mt-xl text-h5">
                The URL of a landing page/website for the work
            </p>
            <q-input
                bg-color="white"
                label="url"
                outlined
                standout
                v-bind:model-value="url"
                v-bind:rules="[ val => val && val.length > 3 || 'Please use minimum 3 characters']"
                v-on:update:modelValue="setUrl"
            />

            <p class="q-mt-xl text-h5">
                The URL of the work in a repository
            </p>
            <q-input
                bg-color="white"
                label="repository"
                outlined
                standout
                v-bind:model-value="repository"
                v-bind:rules="[ val => val && val.length > 3 || 'Please use minimum 3 characters']"
                v-on:update:modelValue="setRepository"
            />

            <p class="q-mt-xl text-h5">
                The URL of the work in a build artifact/binary repository
            </p>
            <q-input
                bg-color="white"
                label="repository_artifact"
                outlined
                standout
                v-bind:model-value="repository_artifact"
                v-bind:rules="[ val => val && val.length > 3 || 'Please use minimum 3 characters']"
                v-on:update:modelValue="setRepositoryArtifact"
            />

            <p class="q-mt-xl text-h5">
                The URL of the work in a source code repository
            </p>
            <q-input
                bg-color="white"
                label="repository_code"
                outlined
                standout
                v-bind:model-value="repository_code"
                v-bind:rules="[ val => val && val.length > 3 || 'Please use minimum 3 characters']"
                v-on:update:modelValue="setRepositoryCode"
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
    max-width: 700px;
    min-width: 300px;
}

</style>
