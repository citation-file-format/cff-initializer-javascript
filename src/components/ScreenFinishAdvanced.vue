<template>
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
            <p class="finish-paragraph">
                Distribute the CITATION.cff with your project, for instance, by adding it to the root of your GitHub repository.
            </p>
            <div class="row">
                <q-btn
                    class="q-mt-md q-mb-md"
                    color="primary"
                    icon="refresh"
                    label="Reset form"
                    no-caps
                    v-on:click="createAnother"
                />
            </div>
            <div class="row">
                <DownloadButton class="col-4 q-ma-lg" />
            </div>
        </div>
        <div v-else>
            <p class="finish-paragraph">
                Your CITATION.cff is not valid just yet. Go back to the form to make some changes.
            </p>
        </div>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import DownloadButton from 'components/DownloadButton.vue'
import { useApp } from 'src/store/app'
import { useCff } from 'src/store/cff'
import { useStepperErrors } from 'src/store/stepper-errors'
import { useValidation } from 'src/store/validation'

export default defineComponent({
    name: 'ScreenFinishAdvanced',
    components: {
        DownloadButton
    },
    setup () {
        const { setStepName, setShowAdvanced } = useApp()
        const { reset: resetCffData } = useCff()
        const { reset: resetStepperErrorState } = useStepperErrors()
        const { errors } = useValidation()
        return {
            isValidCFF: computed(() => errors.value.length === 0),
            createAnother: async () => {
                resetCffData()
                resetStepperErrorState()
                setShowAdvanced(false)
                await setStepName('start')
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
