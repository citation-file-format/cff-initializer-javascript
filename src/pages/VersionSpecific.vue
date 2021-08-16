<template>
    <div class="q-pa-md col-flex">
        <div
            class="q-gutter-md title-field text-dark"
        >
            <p class="q-mt-xl page-title">
                Version specific
            </p>

            <p class="question">
                What is the commit identifier of the work?
            </p>
            <q-input
                bg-color="white"
                label="commit"
                outlined
                standout
                v-bind:model-value="commit"
                v-bind:rules="[ val => val && val.length > 3 || 'Please use minimum 3 characters']"
                v-on:update:modelValue="setCommit"
            />

            <p class="question">
                What is the version of the work?
            </p>
            <q-input
                bg-color="white"
                label="version"
                outlined
                standout
                v-bind:model-value="version"
                v-bind:rules="[ val => val && val.length > 3 || 'Please use minimum 3 characters']"
                v-on:update:modelValue="setVersion"
            />

            <p class="question">
                When was the version released?
            </p>
            <q-input
                bg-color="white"
                label="date-released"
                outlined
                standout
                v-bind:model-value="dateReleased"
                v-bind:rules="[ val => val && val.length > 3 || 'Please use minimum 3 characters']"
                v-on:update:modelValue="setDateReleased"
            />
        </div>
    </div>
    <StepperActions />
</template>

<script lang="ts">
import StepperActions from 'components/StepperActions.vue'
import { defineComponent } from 'vue'
import { useCff } from '../store/cff'

export default defineComponent({
    name: 'VersionSpecific',
    components: {
        StepperActions
    },
    setup () {
        const { commit, dateReleased, version, setCommit, setDateReleased, setVersion } = useCff()
        return {
            commit,
            dateReleased,
            version,
            setCommit,
            setDateReleased,
            setVersion
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
