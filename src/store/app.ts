import { ref, computed } from 'vue'

const state = ref({
    lastStep: 9,
    showAdvanced: false,
    step: 1
})

const firstStep = 1

export function useApp () {
    return {
        showAdvanced: computed(() => state.value.showAdvanced),
        step: computed(() => state.value.step),
        setStep: (newStep: number) => {
            if (firstStep <= newStep && newStep <= state.value.lastStep) {
                state.value.step = newStep
            }
        },
        incrementStep: () => {
            if (state.value.step < state.value.lastStep) {
                state.value.step++
            }
        },
        decrementStep: () => {
            if (state.value.step > firstStep) {
                state.value.step--
            }
        },
        setShowAdvanced: (newShowAdvanced: boolean) => { state.value.showAdvanced = newShowAdvanced }
    }
}
