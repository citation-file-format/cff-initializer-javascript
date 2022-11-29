<template>
    <nav>
        <q-stepper
            animated
            class="transparent"
            active-color="dark"
            done-color="primary"
            error-color="negative"
            inactive-color="grey-7"
            flat
            header-nav
            v-bind:model-value="stepName"
            vertical
        >
            <q-step
                v-for="(step, stepIndex) in stepNames"
                v-bind:active-icon="step === 'finish' ? 'done' : 'edit'"
                v-bind:aria-label="toLabel(step)"
                v-bind:caption="stepIndex < 2 ? 'required' : (step !== 'finish' ? 'optional' : '')"
                v-bind:data-cy="`step-${step}`"
                v-bind:done="screenVisited(step) && !errorPerStep[step].value"
                v-bind:error="currentStepIndex != stepIndex && screenVisited(step) && errorPerStep[step].value"
                v-bind:header-nav="stepIndex !== currentStepIndex && screenVisited(step) && !anyErrorBetween('start', step)"
                v-bind:key="step"
                v-bind:name="step"
                v-bind:order="stepIndex"
                v-bind:title="toLabel(step)"
                v-on:click="onStepClick(step)"
                v-on:keyup.enter="setStepName(step)"
            />
        </q-stepper>
    </nav>
</template>

<script lang="ts">

import { StepNameType, useApp } from 'src/store/app'
import { errorPerStep } from 'src/store/stepper-errors'
import { useQuasar } from 'quasar'

export default {
    setup () {
        const { currentStepIndex, screenVisited, stepName, setStepName, stepNames } = useApp()
        const $q = useQuasar()
        const anyErrorBetween = (stepA: StepNameType, stepB: StepNameType) => {
            const stepIndexA = stepNames.indexOf(stepA)
            const stepIndexB = stepNames.indexOf(stepB)
            return stepNames.slice(stepIndexA, stepIndexB)
                .map((step) => errorPerStep[step].value)
                .reduce((result, errorOnStep) => result || errorOnStep, false)
        }
        const toLabel = (name: string) => {
            if (name === 'start') { // Exception
                return 'Basic Information'
            }
            return name.split('-').map((s) => s.slice(0, 1).toUpperCase() + s.slice(1)).join(' ')
        }
        return {
            anyErrorBetween,
            currentStepIndex,
            onStepClick: (step: StepNameType) => {
                const curIndex = currentStepIndex.value
                const clickIndex = stepNames.indexOf(step)
                if ( // Only allow clicking on stepper if
                    step !== stepName.value && // it is not the current step
                    screenVisited(step) && // it is not a new screen
                    ( // don't skip errors when moving forward
                        curIndex > clickIndex || // it is going back (up); OR
                        (
                            !errorPerStep[stepName.value].value && // it is not leaving an erroring screen
                            !anyErrorBetween(stepName.value, step) // not skipping intermediary erroring screens if going forward
                        )
                    )
                ) {
                    void setStepName(step)
                } else if ( // Can't skip erroring screens
                    curIndex < clickIndex &&
                    anyErrorBetween(stepName.value, step)
                ) {
                    const firstStepWithError = stepNames.filter((step) => errorPerStep[step].value)[0]
                    $q.notify({
                        message: `Fix error in "${toLabel(firstStepWithError)}" before proceeding`,
                        color: 'negative',
                        progress: true,
                        timeout: 1200
                    })
                }
            },
            errorPerStep,
            screenVisited,
            setStepName,
            stepName,
            stepNames,
            toLabel
        }
    }
}
</script>
