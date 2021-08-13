<template>
    <div class="q-pa-md col-flex">
        <div
            class="q-gutter-md title-field text-dark"
        >
            <p class="q-mt-xl text-h5">
                What is the commit identifier of the work?
            </p>
            <q-input
                v-bind:model-value="commit"
                v-on:update:modelValue="setCommit"
                label="commit"
                outlined
                standout
                bg-color="white"
                v-bind:rules="[ val => val && val.length > 3 || 'Please use minimum 3 characters']"
            />

            <p class="q-mt-xl text-h5">
                What is the version of the work?
            </p>
            <q-input
                v-bind:model-value="version"
                v-on:update:modelValue="setVersion"
                label="version"
                outlined
                standout
                bg-color="white"
                v-bind:rules="[ val => val && val.length > 3 || 'Please use minimum 3 characters']"
            />

            <p class="q-mt-xl text-h5">
                When was the version released?
            </p>
            <q-input
                v-bind:model-value="date_released"
                v-on:update:modelValue="setDateReleased"
                label="date_released"
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
    name: 'PageVersionSpecific',
    components: {
        StepperActions
    },
    setup () {
        const cff = useCFF()
        return {
            commit: cff.commit,
            date_released: cff.date_released,
            version: cff.version,
            setCommit: cff.setCommit,
            setDateReleased: cff.setDateReleased,
            setVersion: cff.setVersion
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
