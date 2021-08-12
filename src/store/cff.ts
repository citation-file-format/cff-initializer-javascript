/* eslint-disable @typescript-eslint/no-explicit-any */
import { ref, computed } from 'vue'
import yaml from 'js-yaml'

type IdentifierType = {
    type: 'doi' | 'url' | 'swh' | 'other',
    value: string,
    description?: string
}

type CFFType = 'software' | 'dataset'

interface CFF {
    'cff-version': string,
    commit?: string,
    // eslint-disable-next-line camelcase
    date_released?: string,
    identifiers?: Array<IdentifierType>
    message?: string,
    title?: string,
    type: CFFType,
    version?: string
}

const cff = ref<CFF>({
    'cff-version': '1.2.0',
    type: 'software',
    // this is just sample data that can be removed once we implement data binding for identifiers
    identifiers: [
        {
            type: 'doi',
            value: '10.0000/FIXME',
            description: 'This is the description of the DOI'
        },
        {
            type: 'swh',
            value: 'some swh identifier'
        },
        {
            type: 'url',
            value: 'https://github.com/citation-file-format/cffinit',
            description: 'This is the description of the URL'
        },
        {
            type: 'other',
            value: 'custom identifiers',
            description: 'This is the description of the custom identifier'
        }
    ]
})

export function useCFF () {
    return {
        asYAML: computed(() => {
            return yaml.dump(cff.value, {
                replacer: hideEmptyKeys
            })
        }),
        cff: computed(() => cff.value),
        commit: computed(() => cff.value.commit),
        date_released: computed(() => cff.value.date_released),
        identifiers: computed(() => cff.value.identifiers),
        message: computed(() => cff.value.message),
        title: computed(() => cff.value.title),
        type: computed(() => cff.value.type),
        version: computed(() => cff.value.version),
        setCommit: (newCommit: string) => { cff.value.commit = newCommit },
        setDateReleased: (newDateReleased: string) => { cff.value.date_released = newDateReleased },
        setIdentifiers: (newIdentifiers: Array<any>) => { cff.value.identifiers = newIdentifiers },
        setMessage: (newMessage: string) => { cff.value.message = newMessage },
        setTitle: (newTitle: string) => { cff.value.title = newTitle },
        setType: (newType: CFFType) => { cff.value.type = newType },
        setVersion: (newVersion: string) => { cff.value.version = newVersion }
    }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const hideEmptyKeys = (key: string, value: any) => {
    console.log('hideEmptyKeys: ', key, value)
    if (value === '') {
        return undefined
    }
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return value
}
