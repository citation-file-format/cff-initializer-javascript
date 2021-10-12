import { makeOptionalFieldValidator } from '../validator'
import { computed, ComputedRef } from 'vue'
import { useCff } from './cff'

type CffErrorType = {
    hasError: boolean,
    message: string
}

type CffErrorsSimpleRootType = {
    // abstract: CffErrorType,
    // cffVersion: CffErrorType,
    // commit: CffErrorType,
    // dateReleased: CffErrorType,
    // license: CffErrorType,
    // message: CffErrorType,
    repository: CffErrorType,
    'repository-artifact': CffErrorType,
    'repository-code': CffErrorType,
    // title: CffErrorType,
    // type: CffErrorType,
    url: CffErrorType,
    // version: CffErrorType
}

export function validateOptionalRootField (fieldName: keyof CffErrorsSimpleRootType, newValue: ComputedRef<unknown>) {
    const fn = makeOptionalFieldValidator(`/properties/${fieldName}`)
    const result = fn(newValue.value)
    return getErrorAndMessage(result)
}

export function getErrorAndMessage (result: string | true) {
    const hasError = result !== true
    const message = hasError ? result : ''
    return {
        hasError,
        message
    }
}

export function validateKeywords (keywords: ComputedRef<Array<string>>) {
    // we can only check the duplicate items but cannot validate minItems and minLength
    if (hasDuplicates(keywords.value.filter(d => d !== ''))) {
        return {
            hasError: true,
            message: 'must NOT have duplicate keywords.'
        }
    } else {
        return {
            hasError: false,
            message: ''
        }
    }
}

export function useKeywordErrors () {
    const { keywords } = useCff()
    return computed(() => validateKeywords(keywords))
}

function hasDuplicates (items: Array<string>) {
    return (new Set(items)).size !== items.length
}

export function useFieldErrors () {
    const { url, repository, repositoryArtifact, repositoryCode } = useCff()
    return {
        url: computed(() => validateOptionalRootField('url', url)),
        repository: computed(() => validateOptionalRootField('repository', repository)),
        repositoryArtifact: computed(() => validateOptionalRootField('repository-artifact', repositoryArtifact)),
        repositoryCode: computed(() => validateOptionalRootField('repository-code', repositoryCode))
    }
}

export function useScreenErrors () {
    const { url, repository, repositoryArtifact, repositoryCode } = useFieldErrors()
    const keywordErrors = useKeywordErrors()

    return {
        relatedResources: computed(() => url.value.hasError || repository.value.hasError || repositoryArtifact.value.hasError || repositoryCode.value.hasError),
        keywords: computed(() => keywordErrors.value.hasError)
    }
}
