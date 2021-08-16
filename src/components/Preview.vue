<template>
    <q-card
        bordered
        flat
    >
        <q-btn
            class="copy-button"
            color=""
            flat
            label="Copy"
            v-on:click="copyToClipboard"
        />
        <q-card-section>
            <pre>{{ cffstr }}</pre>
        </q-card-section>
    </q-card>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useCff } from 'src/store/cff'
import { toYamlString } from 'src/utils'

export default defineComponent({
    name: 'Preview',
    setup () {
        const { data } = useCff()

        const cffstr = computed(() => toYamlString(data.value))
        const copyToClipboard = async () => {
            await navigator.clipboard.writeText(cffstr.value)
        }

        return {
            cffstr,
            copyToClipboard
        }
    }
})
</script>

<style scoped>
pre {
    overflow-x: auto;
}
.copy-button {
    margin-right: 0px;
    margin-left: auto;
    display: block;
}

</style>
