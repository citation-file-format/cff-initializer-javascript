import { ref, computed } from 'vue'
import { AuthorsType, CffType, IdentifiersType, KeywordsType, TypeType } from '../types'

const cff = ref({
    abstract: '',
    authors: [],
    cffVersion: '1.2.0',
    commit: '',
    dateReleased: '',
    identifiers: [],
    keywords: [
        '',
        '',
        ''
    ],
    license: '',
    message: '',
    repository: '',
    repositoryArtifact: '',
    repositoryCode: '',
    title: '',
    type: 'software',
    url: '',
    version: ''
} as CffType)

export function useCff () {
    return {
        abstract: computed(() => cff.value.abstract),
        authors: computed(() => cff.value.authors),
        commit: computed(() => cff.value.commit),
        cffVersion: computed(() => cff.value.cffVersion),
        dateReleased: computed(() => cff.value.dateReleased),
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
        setAbstract: (newAbstract: string) => { cff.value.abstract = newAbstract },
        setAuthors: (newAuthors: AuthorsType) => { cff.value.authors = newAuthors },
        setCommit: (newCommit: string) => { cff.value.commit = newCommit },
        setDateReleased: (newDateReleased: string) => { cff.value.dateReleased = newDateReleased },
        setIdentifiers: (newIdentifiers: IdentifiersType) => { cff.value.identifiers = newIdentifiers },
        setKeywords: (newKeywords: KeywordsType) => { cff.value.keywords = newKeywords },
        setLicense: (newLicense: string) => { cff.value.license = newLicense },
        setMessage: (newMessage: string) => { cff.value.message = newMessage },
        setRepository: (newRepository: string) => { cff.value.repository = newRepository },
        setRepositoryArtifact: (newRepositoryArtifact: string) => { cff.value.repositoryArtifact = newRepositoryArtifact },
        setRepositoryCode: (newRepositoryCode: string) => { cff.value.repositoryCode = newRepositoryCode },
        setTitle: (newTitle: string) => { cff.value.title = newTitle },
        setType: (newType: TypeType) => { cff.value.type = newType },
        setUrl: (newUrl: string) => { cff.value.url = newUrl },
        setVersion: (newVersion: string) => { cff.value.version = newVersion },
        reset: () => {
            cff.value = {
                abstract: '',
                authors: [],
                cffVersion: '1.2.0',
                commit: '',
                dateReleased: '',
                identifiers: [],
                keywords: [],
                license: '',
                message: '',
                repository: '',
                repositoryArtifact: '',
                repositoryCode: '',
                title: '',
                type: 'software',
                url: '',
                version: ''
            } as CffType
        }
    }
}
