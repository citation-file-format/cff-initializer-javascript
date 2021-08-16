import { ref, computed } from 'vue'
import { IdentifiersType, KeywordsType, TypeType } from '../types'

const abstract = ref('')
const cffVersion = ref('1.2.0')
const commit = ref('')
const dateReleased = ref('')
const identifiers = ref([] as IdentifiersType)
const keywords = ref([] as KeywordsType)
const license = ref('')
const message = ref('')
const repository = ref('')
const repositoryArtifact = ref('')
const repositoryCode = ref('')
const title = ref('')
const type = ref('software')
const url = ref('')
const version = ref('')

export function useCff () {
    return {
        abstract: computed(() => abstract.value),
        commit: computed(() => commit.value),
        cffVersion: computed(() => cffVersion.value),
        dateReleased: computed(() => dateReleased.value),
        identifiers: computed(() => identifiers.value),
        keywords: computed(() => keywords.value),
        license: computed(() => license.value),
        message: computed(() => message.value),
        repository: computed(() => repository.value),
        repositoryArtifact: computed(() => repositoryArtifact.value),
        repositoryCode: computed(() => repositoryCode.value),
        title: computed(() => title.value),
        type: computed(() => type.value),
        url: computed(() => url.value),
        version: computed(() => version.value),
        setAbstract: (newAbstract: string) => { abstract.value = newAbstract },
        setCommit: (newCommit: string) => { commit.value = newCommit },
        setDateReleased: (newDateReleased: string) => { dateReleased.value = newDateReleased },
        setIdentifiers: (newIdentifiers: IdentifiersType) => { identifiers.value = newIdentifiers },
        setKeywords: (newKeywords: KeywordsType) => { keywords.value = newKeywords },
        setLicense: (newLicense: string) => { license.value = newLicense },
        setMessage: (newMessage: string) => { message.value = newMessage },
        setRepository: (newRepository: string) => { repository.value = newRepository },
        setRepositoryArtifact: (newRepositoryArtifact: string) => { repositoryArtifact.value = newRepositoryArtifact },
        setRepositoryCode: (newRepositoryCode: string) => { repositoryCode.value = newRepositoryCode },
        setTitle: (newTitle: string) => { title.value = newTitle },
        setType: (newType: TypeType) => { type.value = newType },
        setUrl: (newUrl: string) => { url.value = newUrl },
        setVersion: (newVersion: string) => { version.value = newVersion }
    }
}
