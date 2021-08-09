import { ref, computed } from 'vue'

interface CFF {
  title?: string
}

const cff = ref<CFF>({
})

export function useCFF () {
    return {
        cff: computed(() => cff.value),
        title: computed(() => cff.value.title),
        setTitle: (newTitle: string) => { cff.value.title = newTitle },
        asYAML: computed(() => JSON.stringify(cff.value, null))
    }
}
