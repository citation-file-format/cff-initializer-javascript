import { computed, ref } from 'vue'

const state = ref({
    authors: true,
    keywords: false,
    relatedResources: false,
    start: true,
    versionSpecific: false
})

export const useStepperErrors = () => {
    return {
        errorStateScreenAuthors: computed(() => state.value.authors),
        errorStateScreenKeywords: computed(() => state.value.keywords),
        errorStateScreenRelatedResources: computed(() => state.value.relatedResources),
        errorStateScreenStart: computed(() => state.value.start),
        errorStateScreenVersionSpecific: computed(() => state.value.versionSpecific),
        setErrorStateScreenAuthors: (hasErrors: boolean) => (state.value.authors = hasErrors),
        setErrorStateScreenKeywords: (hasErrors: boolean) => (state.value.keywords = hasErrors),
        setErrorStateScreenRelatedResources: (hasErrors: boolean) => (state.value.relatedResources = hasErrors),
        setErrorStateScreenStart: (hasErrors: boolean) => (state.value.start = hasErrors),
        setErrorStateScreenVersionSpecific: (hasErrors: boolean) => (state.value.versionSpecific = hasErrors)
    }
}
