import { AuthorsType, CffType, IdentifiersType, KeywordsType, TypeType } from 'src/types'
import { computed, ref } from 'vue'

const getInitialData = () => {
    return {
        abstract: undefined,
        authors: [],
        cffVersion: '1.2.0',
        commit: undefined,
        dateReleased: undefined,
        identifiers: undefined,
        keywords: undefined,
        license: undefined,
        message: 'If you use this software, please cite it using the metadata from this file.',
        repository: undefined,
        repositoryArtifact: undefined,
        repositoryCode: undefined,
        title: '',
        type: 'software',
        url: undefined,
        version: undefined
    } as CffType
}

const cff = ref(getInitialData())
const extraCffFields = ref('')

export const useCff = () => {
    return {
        abstract: computed(() => cff.value.abstract),
        authors: computed(() => cff.value.authors),
        commit: computed(() => cff.value.commit),
        cffVersion: computed(() => cff.value.cffVersion),
        dateReleased: computed(() => cff.value.dateReleased),
        extraCffFields: computed(() => extraCffFields.value),
        identifiers: computed(() => cff.value.identifiers),
        keywords: computed(() => cff.value.keywords),
        license: computed(() => cff.value.license),
        message: computed(() => cff.value.message),
        repository: computed(() => cff.value.repository),
        repositoryArtifact: computed(() => cff.value.repositoryArtifact),
        repositoryCode: computed(() => cff.value.repositoryCode),
        title: computed(() => cff.value.title),
        type: computed(() => cff.value.type),
        url: computed(() => cff.value.url),
        version: computed(() => cff.value.version),
        setAbstract: (newAbstract: string) => { cff.value.abstract = newAbstract === '' ? undefined : newAbstract },
        setAuthors: (newAuthors: AuthorsType) => { cff.value.authors = newAuthors },
        setCommit: (newCommit: string) => { cff.value.commit = newCommit === '' ? undefined : newCommit },
        setDateReleased: (newDateReleased: string) => { cff.value.dateReleased = newDateReleased === '' ? undefined : newDateReleased },
        setExtraCffFields: (newExtraCffFields: string) => { extraCffFields.value = newExtraCffFields },
        setIdentifiers: (newIdentifiers: IdentifiersType) => { cff.value.identifiers = newIdentifiers === [] ? undefined : newIdentifiers },
        setKeywords: (newKeywords: KeywordsType) => { cff.value.keywords = newKeywords === [] ? undefined : newKeywords },
        setLicense: (newLicense: string) => { cff.value.license = newLicense === '' ? undefined : newLicense },
        setMessage: (newMessage: string) => { cff.value.message = newMessage },
        setRepository: (newRepository: string) => { cff.value.repository = newRepository === '' ? undefined : newRepository },
        setRepositoryArtifact: (newRepositoryArtifact: string) => { cff.value.repositoryArtifact = newRepositoryArtifact === '' ? undefined : newRepositoryArtifact },
        setRepositoryCode: (newRepositoryCode: string) => { cff.value.repositoryCode = newRepositoryCode === '' ? undefined : newRepositoryCode },
        setTitle: (newTitle: string) => { cff.value.title = newTitle },
        setType: (newType: TypeType) => { cff.value.type = newType },
        setUrl: (newUrl: string) => { cff.value.url = newUrl === '' ? undefined : newUrl },
        setVersion: (newVersion: string) => { cff.value.version = newVersion === '' ? undefined : newVersion },
        reset: () => {
            cff.value = getInitialData()
            extraCffFields.value = ''
        }
    }
}
