import { computed, ref } from 'vue'

const state = ref({
    start: true,
    authors: true
})

export const useStepperErrors = () => {
    return {
        authors: computed(() => state.value.authors),
        start: computed(() => state.value.start),
        setAuthors: (hasErrors: boolean) => (state.value.authors = hasErrors),
        setStart: (hasErrors: boolean) => (state.value.start = hasErrors)
    }
}
