<template>
    <div id="metroline">
        <Stepper />
    </div>

    <div id="form">
        <div id="form-title">
            <p class="page-title">
                Abstract
            </p>
        </div>

        <div id="form-content">
            <p class="question">
                What is the abstract of the work?
            </p>
            <q-input
                bg-color="white"
                label="abstract"
                outlined
                standout
                type="textarea"
                v-bind:model-value="abstract"
                v-bind:error="abstractScreenErrors.abstract.length > 0"
                v-bind:error-message="abstractScreenErrors.abstract"
                v-on:update:modelValue="setAbstract"
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
import { defineComponent } from 'vue'
import { useCff } from '../store/cff'
import { useFileValidator } from 'src/store/validator'

export default defineComponent({
    name: 'ScreenAbstract',
    components: {
        Stepper,
        StepperActions
    },
    setup () {
        const { abstract, setAbstract } = useCff()
        const { abstractScreenErrors } = useFileValidator()

        return {
            abstract,
            setAbstract,
            abstractScreenErrors
        }
    }
})
</script>

<style scoped>
</style>
