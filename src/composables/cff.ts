/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { ref, computed } from 'vue'
import { AuthorsType, CffType, IdentifiersType, KeywordsType, TypeType } from 'src/types'
import kebabcaseKeys from 'kebabcase-keys'
import deepfilter from 'deep-filter'
import * as yaml from 'js-yaml'
import schema from 'src/schemas/1.2.0/schema.json'
import Ajv, { ErrorObject } from 'ajv'
import addFormats from 'ajv-formats'

const initialData = {
    cffVersion: '1.2.0',
    title: undefined,
    message: undefined,
    type: 'software',
    authors: [],
    identifiers: undefined,
    repositoryCode: undefined,
    url: undefined,
    repository: undefined,
    repositoryArtifact: undefined,
    abstract: undefined,
    keywords: undefined,
    license: undefined,
    commit: undefined,
    version: undefined,
    dateReleased: undefined
} as CffType

const data = ref(initialData)

const kebabed = () => {
    const notEmpty = (value: unknown) => {
        return value !== undefined && value !== null
    }
    const filtered = deepfilter(data.value, notEmpty)
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return kebabcaseKeys(filtered, { deep: true })
}

const stringified = () => {
    return yaml.dump(kebabed(), { indent: 2, lineWidth: 53 })
}

const validate = () => {
    type ajvErrorType = ErrorObject<string, Record<string, unknown>, unknown>
    const ajv = new Ajv({ allErrors: true })
    addFormats(ajv)
    ajv.addSchema(schema)
    ajv.validate(schema.$id, kebabed())
    if (ajv.errors) {
        return ajv.errors
    } else {
        return [] as ajvErrorType[]
    }
}

export const useCff = () => {
    return {
        abstract: computed(() => data.value.abstract),
        authors: computed(() => data.value.authors),
        cffstr: computed(stringified),
        commit: computed(() => data.value.commit),
        cffVersion: computed(() => data.value.cffVersion),
        data: computed(() => data.value),
        dateReleased: computed(() => data.value.dateReleased),
        errors: computed(validate),
        identifiers: computed(() => data.value.identifiers),
        keywords: computed(() => data.value.keywords),
        license: computed(() => data.value.license),
        message: computed(() => data.value.message),
        repository: computed(() => data.value.repository),
        repositoryArtifact: computed(() => data.value.repositoryArtifact),
        repositoryCode: computed(() => data.value.repositoryCode),
        title: computed(() => data.value.title),
        type: computed(() => data.value.type),
        url: computed(() => data.value.url),
        version: computed(() => data.value.version),
        setAbstract: (newAbstract: string) => (data.value.abstract = newAbstract === '' ? undefined : newAbstract),
        setAuthors: (newAuthors: AuthorsType) => (data.value.authors = newAuthors === [] ? undefined : newAuthors),
        setCommit: (newCommit: string) => (data.value.commit = newCommit === '' ? undefined : newCommit),
        setDateReleased: (newDateReleased: string) => (data.value.dateReleased = newDateReleased === '' ? undefined : newDateReleased),
        setIdentifiers: (newIdentifiers: IdentifiersType) => (data.value.identifiers = newIdentifiers === [] ? undefined : newIdentifiers),
        setKeywords: (newKeywords: KeywordsType) => (data.value.keywords = newKeywords === [] ? undefined : newKeywords),
        setLicense: (newLicense: string) => (data.value.license = newLicense === '' ? undefined : newLicense),
        setMessage: (newMessage: string) => (data.value.message = newMessage === '' ? undefined : newMessage),
        setRepository: (newRepository: string) => (data.value.repository = newRepository === '' ? undefined : newRepository),
        setRepositoryArtifact: (newRepositoryArtifact: string) => (data.value.repositoryArtifact = newRepositoryArtifact === '' ? undefined : newRepositoryArtifact),
        setRepositoryCode: (newRepositoryCode: string) => (data.value.repositoryCode = newRepositoryCode === '' ? undefined : newRepositoryCode),
        setTitle: (newTitle: string) => (data.value.title = newTitle === '' ? undefined : newTitle),
        setType: (newType: TypeType) => (data.value.type = newType),
        setUrl: (newUrl: string) => (data.value.url = newUrl === '' ? undefined : newUrl),
        setVersion: (newVersion: string) => (data.value.version = newVersion === '' ? undefined : newVersion),
        reset: () => (data.value = initialData)
    }
}
