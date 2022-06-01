import { computed, ref } from 'vue'

const state = ref({
    start: true,
    authors: true
})

export const useStepperErrors = () => {
    return {
        errorStateScreenAuthors: computed(() => state.value.authors),
        errorStateScreenStart: computed(() => state.value.start),
        setErrorStateScreenAuthors: (hasErrors: boolean) => (state.value.authors = hasErrors),
        setErrorStateScreenStart: (hasErrors: boolean) => (state.value.start = hasErrors)
    }
}
