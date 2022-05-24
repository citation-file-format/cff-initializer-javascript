<template>
    <div id="metroline">
        <Stepper />
    </div>

    <div id="form">
        <div id="form-title">
            <h1 class="page-title">
                Abstract
            </h1>
        </div>

        <div id="form-content">
            <p class="question">
                Please provide a description of the work
                <SchemaGuideLink anchor="#abstract" />
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
                v-on:update:modelValue="setAbstract"
            />
        </div>
        <div id="form-button-bar">
            <StepperActions />
        </div>
    </div>
</template>

<script lang="ts">
import SchemaGuideLink from 'src/components/SchemaGuideLink.vue'
import Stepper from 'src/components/Stepper.vue'
import StepperActions from 'src/components/StepperActions.vue'
import { defineComponent } from 'vue'
import { useCffObject } from 'src/composables/cffobject'

export default defineComponent({
    name: 'ScreenAbstract',
    components: {
        SchemaGuideLink,
        Stepper,
        StepperActions
    },
    setup () {
        const { abstract, errors, setAbstract } = useCffObject()
        console.info(errors.value)
        return {
            abstract,
            setAbstract
        }
    }
})
</script>

<style scoped>
</style>
