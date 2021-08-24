<template>
    <q-card
        bordered
        flat
    >
        <q-btn
            class="copy-button"
            color="primary"
            hover-color="negative"
            flat
            icon="content_copy"
            v-bind:ripple="false"
            v-on:click="copyToClipboard"
        >
            <q-tooltip class="bg-primary text-subtitle2">
                Copy to clipboard
            </q-tooltip>
            <q-tooltip
                anchor="center left"
                self="center right"
                v-bind:offset="[10, 10]"
                no-parent-event
                v-bind:model-value="showTooltip"
                class="text-subtitle2"
            >
                Copied
                <q-icon
                    size="md"
                    name="check"
                    class="text-green"
                />
            </q-tooltip>
        </q-btn>
        <q-card-section>
            <pre>{{ asString }}</pre>
        </q-card-section>
        <q-separator />
        <q-card-section>
            <p>{{ isValid ? 'File is valid' : 'File is invalid' }}</p>
        </q-card-section>
    </q-card>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useCffstr } from 'src/store/cffstr'
import { useFileValidator } from 'src/store/validator'

export default defineComponent({
    name: 'Preview',
    setup () {
        const { asString } = useCffstr()
        const { isValid } = useFileValidator()
        const showTooltip = ref(false)

        const copyToClipboard = async () => {
            await navigator.clipboard.writeText(asString.value)
            showTooltip.value = true
            await new Promise(resolve => setTimeout(resolve, 3000))
            showTooltip.value = false
        }

        return {
            asString,
            copyToClipboard,
            showTooltip,
            isValid
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

.copy-button:hover {
    background: white;
    background-color: white;
}

</style>
