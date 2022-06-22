<template>
    <Stepper />

    <div
        id="form"
        class="col-12 col-lg-5 col-md-4 col-sm-3"
    >
        <div id="form-title">
            <h1 class="page-title">
                Abstract
            </h1>
        </div>

        <div id="form-content">
            <h2 class="question">
                Please provide a description of the work
                <SchemaGuideLink anchor="#abstract" />
            </h2>
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
import SchemaGuideLink from 'components/SchemaGuideLink.vue'
import Stepper from 'components/Stepper.vue'
import StepperActions from 'components/StepperActions.vue'
import { defineComponent } from 'vue'
import { useCff } from 'src/store/cff'

export default defineComponent({
    name: 'ScreenAbstract',
    components: {
        SchemaGuideLink,
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
