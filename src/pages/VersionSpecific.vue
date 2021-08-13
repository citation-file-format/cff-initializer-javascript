<template>
    <div class="q-pa-md col-flex">
        <div
            class="q-gutter-md title-field text-dark"
        >
            <p class="q-mt-xl text-h5">
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

            <p class="q-mt-xl text-h5">
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

            <p class="q-mt-xl text-h5">
                When was the version released?
            </p>
            <q-input
                bg-color="white"
                label="date_released"
                outlined
                standout
                v-bind:model-value="date_released"
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
    max-width: 700px;
    min-width: 300px;
}

</style>
