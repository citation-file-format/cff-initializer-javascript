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
                Now you have a CITATION.cff file and you get the credits you deserve.
            </p>
            <p class="finish-paragraph">
                Share a reference to your software.
            </p>

            <div
                class="text-primary q-gutter-md q-mb-xl"
                style="font-size: 2em"
            >
                <q-icon
                    name="ion-logo-twitter"
                    size="xl"
                />
                <q-icon
                    name="ion-logo-linkedin"
                    size="xl"
                />
                <q-icon
                    name="ion-logo-reddit"
                    size="xl"
                />
            </div>
            <q-card-actions
                align="center"
                class="q-gutter-md"
            >
                <q-btn
                    class="q-mr-xl"
                    color="primary"
                    icon="chevron_left"
                    label="Back to form"
                    no-caps
                    v-on:click="backToForm"
                />
                <q-btn
                    class="q-ml-xl"
                    color="primary"
                    icon="edit"
                    label="Create another"
                    no-caps
                    v-on:click="createAnother"
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
import { useCff } from '../store/cff'
import Stepper from 'components/Stepper.vue'
import StepperActions from 'components/StepperActions.vue'

export default defineComponent({
    name: 'FinishAdvanced',
    components: {
        Stepper,
        StepperActions
    },
    setup () {
        const { setStepName, setShowAdvanced } = useApp()
        const { reset } = useCff()

        return {
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
.download-button {
    margin-top: 150px;
}
</style>
