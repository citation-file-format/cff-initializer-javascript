/* eslint-disable @typescript-eslint/no-explicit-any */
import { ref, computed } from 'vue'
import yaml from 'js-yaml'
import { CffType, IdentifierType, KeywordsType, TypeType } from '../types'

const cff = ref<CffType>({
    'cff-version': '1.2.0',
    type: 'software'
})

export function useCFF () {
    return {
        abstract: computed(() => cff.value.abstract),
        asYAML: computed(() => yaml.dump(cff.value)),
        cff: computed(() => cff.value),
        commit: computed(() => cff.value.commit),
        date_released: computed(() => cff.value.date_released),
        identifiers: computed(() => cff.value.identifiers),
        keywords: computed(() => cff.value.keywords),
        license: computed(() => cff.value.license),
        message: computed(() => cff.value.message),
        repository: computed(() => cff.value.repository),
        repository_artifact: computed(() => cff.value.repository_artifact),
        repository_code: computed(() => cff.value.repository_code),
        title: computed(() => cff.value.title),
        type: computed(() => cff.value.type),
        url: computed(() => cff.value.url),
        version: computed(() => cff.value.version),
        setAbstract: (newAbstract: string) => { cff.value.abstract = newAbstract },
        setCommit: (newCommit: string) => { cff.value.commit = newCommit },
        setDateReleased: (newDateReleased: string) => { cff.value.date_released = newDateReleased },
        setIdentifiers: (newIdentifiers: Array<IdentifierType>) => { cff.value.identifiers = newIdentifiers },
        setKeywords: (newKeywords: KeywordsType) => { cff.value.keywords = newKeywords },
        setLicense: (newLicense: string) => { cff.value.license = newLicense },
        setMessage: (newMessage: string) => { cff.value.message = newMessage },
        setRepository: (newRepository: string) => { cff.value.repository = newRepository },
        setRepositoryArtifact: (newRepositoryArtifact: string) => { cff.value.repository_artifact = newRepositoryArtifact },
        setRepositoryCode: (newRepositoryCode: string) => { cff.value.repository_code = newRepositoryCode },
        setTitle: (newTitle: string) => { cff.value.title = newTitle },
        setType: (newType: TypeType) => { cff.value.type = newType },
        setUrl: (newUrl: string) => { cff.value.url = newUrl },
        setVersion: (newVersion: string) => { cff.value.version = newVersion }
    }
}
