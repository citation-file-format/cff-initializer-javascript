<template>
    <q-btn
        aria-label="Download CITATION.cff"
        class="rounded-borders"
        color="primary"
        data-cy="btn-download"
        download="CITATION.cff"
        v-bind:disable="errors.length > 0"
        icon="download"
        label="Download"
        size="xl"
        no-caps
        type="a"
        v-bind:href="downloadUrl"
    />
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useCffstr } from 'src/store/cffstr'
import { useValidation } from 'src/store/validation'

const toDownloadUrl = (body: string) => {
    return `data:text/vnd.yaml,${encodeURIComponent(body)}`
}

export default defineComponent({
    name: 'DownloadButton',
    setup () {
        const { cffstr } = useCffstr()
        const { errors } = useValidation()
        return {
            downloadUrl: computed(() => toDownloadUrl(cffstr.value)),
            errors
        }
    }
})
</script>
