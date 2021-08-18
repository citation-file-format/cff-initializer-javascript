import { ref, computed } from 'vue'

const state = ref({
    step: 1,
    showAdvanced: false
})

export function useAppState () {
    return {
        showAdvanced: computed(() => state.value.showAdvanced),
        step: computed(() => state.value.step),
        setStep: (newStep: number) => { state.value.step = newStep },
        incrementStep: () => { state.value.step = state.value.step + 1 },
        decrementStep: () => { state.value.step = state.value.step - 1 },
        setShowAdvanced: (newShowAdvanced: boolean) => { state.value.showAdvanced = newShowAdvanced }
    }
}
