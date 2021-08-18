import { ref, computed } from 'vue'

const step = ref(1)

export function useStep () {
    return {
        step: computed(() => step.value),
        next: () => { step.value = step.value < 9 ? step.value + 1 : step.value },
        previous: () => { step.value = step.value > 1 ? step.value - 1 : step.value },
        goto: (newStep: number) => { step.value = newStep >= 1 && newStep <= 9 ? newStep : step.value }
    }
}
