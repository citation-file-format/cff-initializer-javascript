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
import { defineComponent } from 'vue'
import { useCffstr } from 'src/store/cffstr'

export default defineComponent({
    name: 'Preview',
    setup () {
        const cffstr = useCffstr()

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
