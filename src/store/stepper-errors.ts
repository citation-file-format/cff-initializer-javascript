import {
    byError,
    instancePathStartsWithMatcher,
    screenAuthorQueries,
    screenIdentifiersQueries,
    screenKeywordsQueries,
    screenRelatedResourcesQueries,
    screenStartQueries,
    screenVersionSpecificQueries
} from 'src/error-filtering'
import { computed } from 'vue'
import { useCff } from 'src/store/cff'
import { useValidation } from 'src/store/validation'

const { errors } = useValidation()
const { extraCffFields } = useCff()

const errorStateScreenAuthors = computed(() => {
    return screenAuthorQueries
        .filter(byError(errors.value, instancePathStartsWithMatcher))
        .length > 0
})
const errorStateScreenIdentifiers = computed(() => {
    return screenIdentifiersQueries
        .filter(byError(errors.value, instancePathStartsWithMatcher))
        .length > 0
})
const errorStateScreenKeywords = computed(() => {
    return screenKeywordsQueries
        .filter(byError(errors.value, instancePathStartsWithMatcher))
        .length > 0
})
const errorStateScreenRelatedResources = computed(() => {
    return screenRelatedResourcesQueries
        .filter(byError(errors.value, instancePathStartsWithMatcher))
        .length > 0
})
const errorStateScreenStart = computed(() => {
    return screenStartQueries
        .filter(byError(errors.value)) // One of the possible errors is instancePath == '', so we use a traditional approach here
        .length > 0
})
const errorStateScreenVersionSpecific = computed(() => {
    return screenVersionSpecificQueries
        .filter(byError(errors.value, instancePathStartsWithMatcher))
        .length > 0
})

export const errorPerStep = {
    start: errorStateScreenStart,
    authors: errorStateScreenAuthors,
    identifiers: errorStateScreenIdentifiers,
    'related-resources': errorStateScreenRelatedResources,
    abstract: computed(() => false),
    keywords: errorStateScreenKeywords,
    license: computed(() => false),
    'version-specific': errorStateScreenVersionSpecific,
    'extra-cff-fields': computed(() => { return extraCffFields.value.length > 0 && errors.value.length > 0 }),
    finish: computed(() => false)
}
