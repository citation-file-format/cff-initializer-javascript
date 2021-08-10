import { ref, computed } from 'vue'
import yaml from 'js-yaml'

type CFFType = 'software' | 'dataset'
interface CFF {
  'cff-version': string,
  title?: string,
  message?: string,
  type: CFFType
}

const cff = ref<CFF>({
    'cff-version': '1.2.0',
    type: 'software'
})

export function useCFF () {
    return {
        cff: computed(() => cff.value),
        title: computed(() => cff.value.title),
        message: computed(() => cff.value.message),
        type: computed(() => cff.value.type),
        setTitle: (newTitle: string) => { cff.value.title = newTitle },
        setMessage: (newMessage: string) => { cff.value.message = newMessage },
        setType: (newType: CFFType) => { cff.value.type = newType },
        asYAML: computed(() => {
            return yaml.dump(cff.value, {
                replacer: hideEmptyKeys
            })
        })
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
