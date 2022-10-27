<template>
    <q-btn
        aria-label="Download CITATION.cff"
        color="primary"
        data-cy="btn-download"
        download="CITATION.cff"
        icon="download"
        label="Download"
        size="xl"
        no-caps
        type="a"
        v-bind:href="downloadUrl"
        v-bind:class="q.platform.is.mobile ? 'full-width' : ''"
    />
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useCffstr } from 'src/store/cffstr'
import { useQuasar } from 'quasar'

const toDownloadUrl = (body: string) => {
    return `data:text/vnd.yaml,${encodeURIComponent(body)}`
}

export default defineComponent({
    name: 'DownloadButton',
    setup () {
        const { cffstr } = useCffstr()
        const q = useQuasar()
        return {
            q,
            downloadUrl: computed(() => toDownloadUrl(cffstr.value))
        }
    }
})
</script>
