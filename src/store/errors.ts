import { makeOptionalFieldValidator } from '../validator'
import { computed, ref } from 'vue'
import { AuthorType, IdentifierType } from 'src/types'

type CffErrorType = false | string

type AuthorsErrorType = Array<Record<keyof AuthorType, CffErrorType>>
type IdentifiersErrorType = Array<Record<keyof IdentifierType, CffErrorType>>
type KeywordsErrorType = Array<CffErrorType>

type CffErrorsSimpleRootType ={
    abstract: CffErrorType,
    cffVersion: CffErrorType,
    commit: CffErrorType,
    dateReleased: CffErrorType,
    license: CffErrorType,
    message: CffErrorType,
    repository: CffErrorType,
    repositoryArtifact: CffErrorType,
    repositoryCode: CffErrorType,
    title: CffErrorType,
    type: CffErrorType,
    url: CffErrorType,
    version: CffErrorType
}

type CffErrorsType = CffErrorsSimpleRootType & {
    keywords: KeywordsErrorType,
    identifiers: IdentifiersErrorType,
    authors: AuthorsErrorType,
}

const errors = ref<CffErrorsType>({
    abstract: false,
    authors: [],
    cffVersion: false,
    commit: false,
    dateReleased: false,
    identifiers: [],
    keywords: [],
    license: false,
    message: false,
    repository: false,
    repositoryArtifact: false,
    repositoryCode: false,
    title: false,
    type: false,
    url: false,
    version: false
})

export function validateOptionalRootField (fieldName: keyof CffErrorsSimpleRootType, newValue: unknown) {
    const result = makeOptionalFieldValidator(`/properties/${fieldName}`)(newValue)
    if (result === true) {
        errors.value[fieldName] = false
    } else {
        errors.value[fieldName] = result
    }
}

const quasarError = (fieldName: keyof CffErrorsType) => {
    return () => {
        const hasError = errors.value[fieldName] !== false
        const message = hasError ? errors.value[fieldName] : ''
        return {
            hasError,
            message
        }
    }
}

export function useErrors () {
    return {
        versionError: computed(quasarError('version')),
        urlError: computed(quasarError('url')),
        startScreenIsValid: computed(() => quasarError('title')(currentTitle).hasError || quasarError('message')(currentMessage).hasError)
    }
}
