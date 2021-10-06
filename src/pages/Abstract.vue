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
                v-bind:rules="[validateAbstract]"
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
import { makeOptionalFieldValidator } from '../validator'
import { defineComponent } from 'vue'
import { useCff } from '../store/cff'

export default defineComponent({
    name: 'Abstract',
    components: {
        Stepper,
        StepperActions
    },
    setup () {
        const { abstract, setAbstract } = useCff()
        return {
            abstract,
            setAbstract,
            validateAbstract: makeOptionalFieldValidator('/properties/abstract')
        }
    }
})
</script>

<style scoped>
</style>
