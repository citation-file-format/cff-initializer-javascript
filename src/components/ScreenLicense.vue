<template>
    <div id="metroline">
        <Stepper />
    </div>
    <div id="form">
        <div id="form-title">
            <h1 class="page-title">
                License
            </h1>
        </div>

        <div id="form-content">
            <p class="question">
                What is the license of the work?
            </p>
            <q-input
                bg-color="white"
                label="license"
                outlined
                standout
                v-bind:model-value="license"
                v-bind:rules="[ validateLicense ]"
                v-on:update:model-value="setLicense"
            />
        </div>

        <div id="form-button-bar">
            <StepperActions />
        </div>
    </div>
</template>

<script lang="ts">
import Stepper from 'components/Stepper.vue'
import StepperActions from 'components/StepperActions.vue'
import { makeOptionalFieldValidator } from 'src/validator'
import { defineComponent } from 'vue'
import { useCff } from '../store/cff'

export default defineComponent({
    name: 'ScreenLicense',
    components: {
        Stepper,
        StepperActions
    },
    setup () {
        const cff = useCff()
        return {
            license: cff.license,
            setLicense: cff.setLicense,
            validateLicense: makeOptionalFieldValidator('/definitions/license-enum')
        }
    }
})
</script>

<style scoped>
</style>
