import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'

export type StepNameType = 'start' | 'authors' | 'identifiers' | 'related-resources' |
                    'abstract' | 'keywords' | 'license' | 'version-specific' | 'finish'

const state = ref({
    stepIndex: 0
})

const stepNames = [
    'start',
    'authors',
    'identifiers',
    'related-resources',
    'abstract',
    'keywords',
    'license',
    'version-specific',
    'finish'
] as Array<StepNameType>

const firstStepIndex = 0

const lastStepIndex = computed(() => stepNames.length - 1)
const stepName = computed(() => stepNames[state.value.stepIndex])

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
        stepName,
        stepNames,
        navigateDirect: (newStepName: StepNameType) => {
            if (![...stepNames, 'finish'].includes(newStepName)) {
                return
            }
            state.value.stepIndex = stepNames.indexOf(newStepName)
        },
        setStepName: async (newStepName: StepNameType) => {
            state.value.stepIndex = stepNames.indexOf(newStepName)
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
        }
    }
}
