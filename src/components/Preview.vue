<template>
    <div style="position: relative">
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
    </div>
    <textarea
        v-bind:class="['cffstr', isValidCFF ? '' : 'error']"
        readonly="true"
        v-bind:value="cffstr"
        wrap="hard"
    />
    <div class="validation-msg">
        <p v-bind:class="isValidCFF ? '' : 'invalid'">
            Your CITATION.cff is {{ isValidCFF ? "valid" : "not valid" }}
        </p>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import { useCffObject } from 'src/composables/cffobject'

export default defineComponent({
    name: 'Preview',
    components: {
    },
    setup () {
        const { cffstr } = useCffObject()
        const showTooltip = ref(false)

        const copyToClipboard = async () => {
            await navigator.clipboard.writeText(cffstr.value)
            showTooltip.value = true
            await new Promise(resolve => setTimeout(resolve, 3000))
            showTooltip.value = false
        }

        const isValidCFF = computed(() => true)

        return {
            cffstr,
            copyToClipboard,
            isValidCFF,
            showTooltip
        }
    }
})
</script>

<style scoped>
.cffstr {
    background-color:white;
    border-radius: 4px;
    border: 1px solid #ccc;
    font-family: 'Roboto Mono';
    height: 100%;
    max-height: 670px;
    outline: none !important;
    overflow-wrap: normal;
    overflow-x: auto;
    padding-bottom: 10px;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 15px;
    resize: none;
    white-space: pre;
}
.cffstr:hover {
    border: 1px solid #000;
}
.cffstr:focus {
    border:2px solid #888;
}
.cffstr:active {
    border:2px solid #888;
}
.copy-button {
    background-color: white;
    border: 1px solid #ccc;
    margin-bottom: 17px;
    margin-left: 17px;
    margin-right: 17px;
    margin-top: 17px;
    padding: 10px;
    position: absolute;
    right: 0px;
}
.validation-msg {
    padding-bottom: 25px;
    padding-top: 20px;
    text-align: center;
}
.error {
    border-color: #C10015 !important;
    border-width: 2px !important;
}
.invalid {
    color: var(--q-negative);
}
</style>
