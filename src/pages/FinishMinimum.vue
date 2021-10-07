<template>
    <div id="metroline">
        <Stepper />
    </div>
    <div id="form">
        <div id="form-title">
            <h1 class="finish-title">
                Congratulations
            </h1>
        </div>

        <div id="form-content">
            <p class="finish-paragraph">
                You now have a minimal CITATION.cff file. You can now download your CITATION.cff file, or add some more properties.
            </p>
            <q-card-actions
                align="center"
                class="q-gutter-md"
            >
                <q-btn
                    class="q-ml-xl"
                    color="primary"
                    icon="workspace_premium"
                    label="Show advanced"
                    no-caps
                    to="/identifiers"
                    v-on:click="showAdvanced"
                />
            </q-card-actions>
        </div>

        <div id="form-button-bar">
            <StepperActions />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useApp } from '../store/app'
import Stepper from 'components/Stepper.vue'
import StepperActions from 'components/StepperActions.vue'

export default defineComponent({
    name: 'FinishMinimum',
    components: {
        Stepper,
        StepperActions
    },
    setup () {
        const { setShowAdvanced, navigatePrevious, setStepName } = useApp()
        return {
            setShowAdvanced,
            navigatePrevious,
            showAdvanced: async () => {
                setShowAdvanced(true)
                await setStepName('identifiers')
            }
        }
    }
})
</script>

<style scoped>
</style>
