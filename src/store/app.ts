import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'

export type StepNameType = 'start' | 'authors' | 'identifiers' | 'related-resources' |
                    'abstract' | 'keywords' | 'license' | 'version-specific' | 'finish'

const state = ref({
    showAdvanced: false,
    stepIndex: 0
})

const basicStepNames = [
    'start',
    'authors'
] as Array<StepNameType>

const advancedStepNames = [
    'identifiers',
    'related-resources',
    'abstract',
    'keywords',
    'license',
    'version-specific'
] as Array<StepNameType>

const stepNames = computed(() => {
    if (state.value.showAdvanced) {
        return basicStepNames.concat(advancedStepNames).concat(['finish'])
    } else {
        return basicStepNames.concat(['finish'])
    }
})

const firstStepIndex = 0

const lastStepIndex = computed(() => stepNames.value.length - 1)
const stepName = computed(() => stepNames.value[state.value.stepIndex])

export const useApp = () => {
    const router = useRouter()
    const focusFormTitle = () => {
        const element = window.document.getElementById('form-title')
        if (!element) return
        element.focus()
    }
    return {
        cannotGoBack: computed(() => state.value.stepIndex === firstStepIndex),
        cannotGoForward: computed(() => state.value.stepIndex === lastStepIndex.value),
        currentStepIndex: computed(() => state.value.stepIndex),
        lastStepIndex,
        showAdvanced: computed(() => state.value.showAdvanced),
        stepName,
        stepNames,
        navigateDirect: (newStepName: StepNameType) => {
            if (![...basicStepNames, ...advancedStepNames, 'finish'].includes(newStepName)) {
                return
            }
            if (advancedStepNames.includes(newStepName)) {
                state.value.showAdvanced = true
            }
            state.value.stepIndex = stepNames.value.indexOf(newStepName)
        },
        setStepName: async (newStepName: StepNameType) => {
            state.value.stepIndex = stepNames.value.indexOf(newStepName)
            await router.push({ path: `/${stepName.value}` })
            focusFormTitle()
        },
        navigateNext: async () => {
            if (state.value.stepIndex < lastStepIndex.value) {
                state.value.stepIndex++
                await router.push({ path: `/${stepName.value}` })
                focusFormTitle()
            }
        },
        navigatePrevious: async () => {
            if (state.value.stepIndex > firstStepIndex) {
                state.value.stepIndex--
                await router.push({ path: `/${stepName.value}` })
                focusFormTitle()
            }
        },
        setShowAdvanced: (newShowAdvanced: boolean) => { state.value.showAdvanced = newShowAdvanced }
    }
}
