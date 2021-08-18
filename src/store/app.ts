import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

type StepNameType = 'start' | 'authors' | 'finish-minimum' | 'identifiers' | 'related-resources' |
                    'abstract' | 'keywords' | 'license' | 'version-specific' | 'finish-advanced'

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
    'finish-advanced'
] as Array<StepNameType>

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
        setStepName: (newStepName: StepNameType) => {
            state.value.stepIndex = stepNames.indexOf(newStepName)
        },
        navigateNext: () => {
            if (state.value.showAdvanced === true && stepName.value === 'authors') {
                // extra increment to step past finish-minimum
                state.value.stepIndex++
            }
            if (state.value.stepIndex < lastStepIndex.value) {
                state.value.stepIndex++
                return router.push({ path: `/${stepName.value}` })
            }
        },
        navigatePrevious: () => {
            if (state.value.showAdvanced === true && stepName.value === 'identifiers') {
                // extra decrement to step past finish-minimum
                state.value.stepIndex--
            }
            if (state.value.stepIndex > firstStepIndex) {
                state.value.stepIndex--
                return router.push({ path: `/${stepName.value}` })
            }
        },
        setShowAdvanced: (newShowAdvanced: boolean) => { state.value.showAdvanced = newShowAdvanced }
    }
}
