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

function toDownloadUrl (body: string) {
    return `data:text/vnd.yaml,${encodeURIComponent(body)}`
}

export default defineComponent({
    name: 'DownloadButton',
    setup () {
        const cffstr = computed(() => 'temporarily unavailable')

        return {
            downloadUrl: computed(() => toDownloadUrl(cffstr.value))
        }
    }
})
</script>
