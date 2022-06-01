import { computed, ref } from 'vue'

const state = ref({
    authors: true,
    start: true,
    relatedResources: false
})

export const useStepperErrors = () => {
    return {
        errorStateScreenAuthors: computed(() => state.value.authors),
        errorStateScreenRelatedResources: computed(() => state.value.relatedResources),
        errorStateScreenStart: computed(() => state.value.start),
        setErrorStateScreenAuthors: (hasErrors: boolean) => (state.value.authors = hasErrors),
        setErrorStateScreenRelatedResources: (hasErrors: boolean) => (state.value.relatedResources = hasErrors),
        setErrorStateScreenStart: (hasErrors: boolean) => (state.value.start = hasErrors)
    }
}
