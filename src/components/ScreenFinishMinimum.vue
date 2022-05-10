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
                    You now have a minimal CITATION.cff file. Use the buttons below to download your CITATION.cff file, or continue adding more properties.
                </p>
                <div class="row">
                    <ComponentDownloadButton class="col-4 q-ma-lg" />
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
            <ComponentStepperActions />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useApp } from '../store/app'
import ComponentStepper from 'components/ComponentStepper.vue'
import ComponentStepperActions from 'components/ComponentStepperActions.vue'
import { useErrors } from 'src/store/errors'
import ComponentDownloadButton from 'components/ComponentDownloadButton.vue'

export default defineComponent({
    name: 'ScreenFinishMinimum',
    components: {
        ComponentDownloadButton,
        ComponentStepper,
        ComponentStepperActions
    },
    setup () {
        const { setShowAdvanced, navigatePrevious, setStepName } = useApp()
        const { errors } = useErrors()
        return {
            isValidCFF: computed(() => errors.value.length === 0),
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
