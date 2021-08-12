import { ref, computed } from 'vue'
import yaml from 'js-yaml'

type CFFType = 'software' | 'dataset'

type Keywords = Array<string>

interface CFF {
    'cff-version': string,
    commit?: string,
    // eslint-disable-next-line camelcase
    date_released?: string,
    keywords?: Keywords,
    message?: string,
    title?: string,
    type: CFFType,
    version?: string
}

const cff = ref<CFF>({
    'cff-version': '1.2.0',
    type: 'software',
    keywords: [
        'first keyword',
        'second keyword',
        'third'
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
        keywords: computed(() => cff.value.keywords),
        message: computed(() => cff.value.message),
        title: computed(() => cff.value.title),
        type: computed(() => cff.value.type),
        version: computed(() => cff.value.version),
        setCommit: (newCommit: string) => { cff.value.commit = newCommit },
        setDateReleased: (newDateReleased: string) => { cff.value.date_released = newDateReleased },
        setKeywords: (newKeywords: Keywords) => { cff.value.keywords = newKeywords },
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
