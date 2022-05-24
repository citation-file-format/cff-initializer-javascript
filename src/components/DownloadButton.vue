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
import { useCffObject } from 'src/composables/cffobject'

export default defineComponent({
    name: 'DownloadButton',
    setup () {
        const toDownloadUrl = () => {
            const { cffstr } = useCffObject()
            return `data:text/vnd.yaml,${encodeURIComponent(cffstr.value)}`
        }
        return {
            downloadUrl: computed(toDownloadUrl)
        }
    }
})
</script>
