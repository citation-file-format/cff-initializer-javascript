<template>
    <div id="metroline">
        <ComponentStepper />
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
                    <ComponentDownloadButton class="col-4 q-ma-lg" />
                </div>
            </div>
            <div v-else>
                <p class="finish-paragraph">
                    Your CITATION.cff is not valid just yet. Go back to the form to make some changes.
                </p>
            </div>
        </div>

        <div id="form-button-bar">
            <ComponentStepperActions />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useApp } from '../store/app'
import { useCff } from '../store/cff'
import ComponentStepper from 'components/ComponentStepper.vue'
import ComponentStepperActions from 'components/ComponentStepperActions.vue'
import { useErrors } from 'src/store/errors'
import ComponentDownloadButton from 'components/ComponentDownloadButton.vue'

export default defineComponent({
    name: 'ScreenFinishAdvanced',
    components: {
        ComponentDownloadButton,
        ComponentStepper,
        ComponentStepperActions
    },
    setup () {
        const { setStepName, setShowAdvanced } = useApp()
        const { reset } = useCff()
        const { errors } = useErrors()

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
