import { ref, computed } from 'vue'

interface CFF {
  title?: string,
  message?: string
}

const cff = ref<CFF>({
})

export function useCFF () {
    return {
        cff: computed(() => cff.value),
        title: computed(() => cff.value.title),
        message: computed(() => cff.value.message),
        setTitle: (newTitle: string) => { cff.value.title = newTitle },
        setMessage: (newMessage: string) => { cff.value.message = newMessage },
        asYAML: computed(() => JSON.stringify(cff.value, null))
    }
}
