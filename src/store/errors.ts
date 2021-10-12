import { makeOptionalFieldValidator } from '../validator'
import { computed, ComputedRef, ref } from 'vue'
// import { AuthorType, IdentifierType } from 'src/types'
import { useCff } from './cff'

// type CffErrorType = false | string

type CffErrorType = {
    hasError: boolean,
    message: string
}

// type AuthorsErrorType = Array<Record<keyof AuthorType, CffErrorType>>
// type IdentifiersErrorType = Array<Record<keyof IdentifierType, CffErrorType>>
// type KeywordsErrorType = Array<CffErrorType>

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

type CffErrorsType = CffErrorsSimpleRootType & {
    //     keywords: KeywordsErrorType,
    //     identifiers: IdentifiersErrorType,
    //     authors: AuthorsErrorType,
}

const errors = ref<CffErrorsType>({
    // abstract: false,
    // authors: [],
    // cffVersion: false,
    // commit: false,
    // dateReleased: false,
    // identifiers: [],
    // keywords: [],
    // license: false,
    // message: false,
    repository: { hasError: false, message: '' },
    'repository-artifact': { hasError: false, message: '' },
    'repository-code': { hasError: false, message: '' },
    // title: false,
    // type: false,
    url: { hasError: false, message: '' }
    // version: false
})

export function validateOptionalRootField (fieldName: keyof CffErrorsSimpleRootType, newValue: ComputedRef<unknown>) {
    const fn = makeOptionalFieldValidator(`/properties/${fieldName}`)

    const result = fn(newValue.value)

    errors.value[fieldName].hasError = result !== true

    if (result === true) {
        errors.value[fieldName].message = ''
    } else {
        errors.value[fieldName].message = result
    }
    return errors.value[fieldName]
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
    return {
        relatedResources: computed(() => url.value.hasError || repository.value.hasError || repositoryArtifact.value.hasError || repositoryCode.value.hasError)
    }
}
