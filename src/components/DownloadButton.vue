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
import { defineComponent, computed, Ref } from 'vue'
import { useCff } from 'src/store/cff'
import { CffType } from 'src/types'
import { toYamlString } from 'src/utils'

function toDownloadUrl (obj: Ref<CffType>) {
    const body = toYamlString(obj.value)
    return `data:text/vnd.yaml,${encodeURIComponent(body)}`
}

export default defineComponent({
    name: 'DownloadButton',
    setup () {
        const { data } = useCff()

        return {
            downloadUrl: computed(() => toDownloadUrl(data))
        }
    }
})
</script>
