<template>
    <div id="metroline">
        <Stepper />
    </div>
    <div id="form">
        <div id="form-title">
            <h1
                class="finish-title"
                v-if="isValidCFF"
            >
                Congratulations
            </h1>
            <h1
                class="finish-title"
                v-else
            >
                Uh-oh!
            </h1>
        </div>

        <div id="form-content">
            <div v-if="isValidCFF">
                <p class="finish-paragraph">
                    You now have a minimal CITATION.cff file. Use the buttons below to download your CITATION.cff file, or continue adding more properties.
                </p>
                <div class="row">
                    <DownloadButton class="col-4 q-ma-lg" />
                    <q-btn
                        class="col-4 q-ma-lg"
                        color="primary"
                        icon="workspace_premium"
                        label="Add more"
                        no-caps
                        size="xl"
                        to="/identifiers"
                        v-on:click="showAdvanced"
                    />
                </div>
            </div>
            <div v-else>
                <p class="finish-paragraph">
                    Your CITATION.cff is not valid just yet. Go back to the form to make some changes.
                </p>
            </div>
        </div>
        <div id="form-button-bar">
            <StepperActions />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useApp } from 'src/composables/app'
import Stepper from 'src/components/Stepper.vue'
import StepperActions from 'src/components/StepperActions.vue'
import DownloadButton from 'src/components/DownloadButton.vue'

export default defineComponent({
    name: 'ScreenFinishMinimum',
    components: {
        DownloadButton,
        Stepper,
        StepperActions
    },
    setup () {
        const { setShowAdvanced, navigatePrevious, setStepName } = useApp()
        return {
            isValidCFF: computed(() => true),
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
.row {
    display: flex;
    flex-direction: row;
    justify-content: center
}
</style>
