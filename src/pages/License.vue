<template>
    <div class="q-pa-md col-flex">
        <div class="q-gutter-md title-field text-dark">
            <p class="page-title">
                License
            </p>

            <p class="question">
                What is the license of the work?
            </p>
            <q-input
                bg-color="white"
                label="license"
                outlined
                standout
                v-bind:model-value="license"
                v-bind:rules="[ val => val && val.length > 3 || 'Please use minimum 3 characters']"
                v-on:update:model-value="setLicense"
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
    name: 'License',
    components: {
        StepperActions
    },
    setup () {
        const cff = useCFF()
        return {
            license: cff.license,
            setLicense: cff.setLicense
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
