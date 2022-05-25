<template>
    <q-btn
        color="primary"
        icon="download"
        label="Download"
        size="xl"
        no-caps
        type="a"
        download="CITATION.cff"
        v-bind:href="downloadUrl"
    />
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useCff } from 'src/composables/cff'

export default defineComponent({
    name: 'DownloadButton',
    setup () {
        const toDownloadUrl = () => {
            const { cffstr } = useCff()
            const encoded = encodeURIComponent(cffstr.value)
            return `data:text/vnd.yaml,${encoded}`
        }
        return {
            downloadUrl: computed(toDownloadUrl)
        }
    }
})
</script>
