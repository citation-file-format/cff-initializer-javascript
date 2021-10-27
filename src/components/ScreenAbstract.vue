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
                autogrow
                bg-color="white"
                input-style="min-height: 100px; max-height: 444px"
                label="abstract"
                outlined
                standout
                type="textarea"
                v-bind:model-value="abstract"
                v-bind:error="false"
                v-bind:error-message="''"
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
export default defineComponent({
    name: 'ScreenAbstract',
    components: {
        Stepper,
        StepperActions
    },
    setup () {
        const { abstract, setAbstract } = useCff()
        return {
            abstract,
            setAbstract
        }
    }
})
</script>

<style scoped>
</style>
