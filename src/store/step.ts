import { ref, computed } from 'vue'

const step = ref(1)

export function useStep () {
    return {
        step: computed(() => step.value),
        next: () => { step.value = step.value + 1 },
        previous: () => { step.value = step.value - 1 },
        goto: (newStep: number) => { step.value = newStep }
    }
}
