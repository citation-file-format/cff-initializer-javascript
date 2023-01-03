import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'

export type StepNameType = 'start' | 'authors' | 'identifiers' | 'related-resources' |
                    'abstract' | 'keywords' | 'license' | 'version-specific' | 'extra-cff-fields' | 'finish'

const stepNames = [
    'start',
    'authors',
    'identifiers',
    'related-resources',
    'abstract',
    'keywords',
    'license',
    'version-specific',
    'extra-cff-fields',
    'finish'
] as Array<StepNameType>

const state = ref({
    stepIndex: 0,
    screenVisited: Array(stepNames.length).fill(false) as Array<boolean>
})

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
    const visitScreen = (screenName: StepNameType) => {
        for (let i = 0; i <= stepNames.indexOf(screenName); i++) {
            state.value.screenVisited[i] = true
        }
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
            visitScreen(newStepName)
        },
        navigateNext: async () => {
            if (state.value.stepIndex < lastStepIndex.value) {
                state.value.stepIndex++
                visitScreen(stepName.value)
                await router.push({ path: `/${stepName.value}` })
                focusFormTitle()
            }
        },
        navigatePrevious: async () => {
            if (state.value.stepIndex > firstStepIndex) {
                state.value.stepIndex--
                visitScreen(stepName.value)
                await router.push({ path: `/${stepName.value}` })
                focusFormTitle()
            }
        },
        resetState: () => {
            state.value.stepIndex = 0
            state.value.screenVisited.fill(false)
        },
        screenVisited: (screenName: StepNameType) => {
            return state.value.screenVisited[stepNames.indexOf(screenName)]
        },
        setStepName: async (newStepName: StepNameType) => {
            state.value.stepIndex = stepNames.indexOf(newStepName)
            visitScreen(stepName.value)
            await router.push({ path: `/${stepName.value}` })
            focusFormTitle()
        }
    }
}
