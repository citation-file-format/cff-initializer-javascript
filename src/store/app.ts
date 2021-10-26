import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

export type StepNameType = 'start' | 'authors' | 'finish-minimum' | 'identifiers' | 'related-resources' |
                    'abstract' | 'keywords' | 'license' | 'version-specific' | 'preferred-citation' | 'finish-advanced'

const state = ref({
    showAdvanced: false,
    stepIndex: 0
})

const stepNames = [
    'start',
    'authors',
    'finish-minimum',
    'identifiers',
    'related-resources',
    'abstract',
    'keywords',
    'license',
    'version-specific',
    'preferred-citation',
    'finish-advanced'
] as Array<StepNameType>

const advancedStepNames = new Set([
    'identifiers',
    'related-resources',
    'abstract',
    'keywords',
    'license',
    'version-specific'
])

const firstStepIndex = 0

const lastStepIndex = computed(() => state.value.showAdvanced ? stepNames.indexOf('finish-advanced') : stepNames.indexOf('finish-minimum'))
const stepName = computed(() => stepNames[state.value.stepIndex])

export function useApp () {
    const router = useRouter()
    return {
        cannotGoBack: computed(() => state.value.stepIndex === firstStepIndex),
        cannotGoForward: computed(() => state.value.stepIndex === lastStepIndex.value),
        lastStepIndex,
        showAdvanced: computed(() => state.value.showAdvanced),
        stepName,
        navigateDirect: (newStepName: StepNameType) => {
            if (!stepNames.includes(newStepName)) {
                return
            }
            if (advancedStepNames.has(newStepName)) {
                state.value.showAdvanced = true
            }
            state.value.stepIndex = stepNames.indexOf(newStepName)
        },
        setStepName: async (newStepName: StepNameType) => {
            state.value.stepIndex = stepNames.indexOf(newStepName)
            await router.push({ path: `/${stepName.value}` })
        },
        navigateNext: async () => {
            if (state.value.showAdvanced === true && stepName.value === 'authors') {
                // extra increment to step past finish-minimum
                state.value.stepIndex++
            }
            if (state.value.stepIndex < lastStepIndex.value) {
                state.value.stepIndex++
                await router.push({ path: `/${stepName.value}` })
            }
        },
        navigatePrevious: async () => {
            if (state.value.showAdvanced === true && stepName.value === 'identifiers') {
                // extra decrement to step past finish-minimum
                state.value.stepIndex--
            }
            if (state.value.stepIndex > firstStepIndex) {
                state.value.stepIndex--
                await router.push({ path: `/${stepName.value}` })
            }
        },
        setShowAdvanced: (newShowAdvanced: boolean) => { state.value.showAdvanced = newShowAdvanced }
    }
}
