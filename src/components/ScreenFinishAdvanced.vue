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
                    Use the buttons below to download your CITATION.cff file, or reset the form to start over.
                </p>
                <div class="row">
                    <q-btn
                        class="col-4 q-ma-lg"
                        color="primary"
                        icon="refresh"
                        label="Reset form"
                        no-caps
                        size="xl"
                        v-on:click="createAnother"
                    />
                    <DownloadButton class="col-4 q-ma-lg" />
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
import { useCff } from 'src/composables/cff'
import Stepper from 'src/components/Stepper.vue'
import StepperActions from 'src/components/StepperActions.vue'
import DownloadButton from 'src/components/DownloadButton.vue'

export default defineComponent({
    name: 'ScreenFinishAdvanced',
    components: {
        DownloadButton,
        Stepper,
        StepperActions
    },
    setup () {
        const { setStepName, setShowAdvanced } = useApp()
        const { errors, reset } = useCff()

        return {
            isValidCFF: computed(() => errors.value.length === 0),
            createAnother: async () => {
                reset()
                setShowAdvanced(false)
                await setStepName('start')
            },
            backToForm: async () => {
                await setStepName('version-specific')
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
