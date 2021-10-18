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
        class="cffstr"
        readonly="true"
        v-bind:value="cffstr"
        wrap="hard"
    />
    <div class="validation-msg">
        <p>
            Your CITATION.cff is {{ isValidFile ? "valid" : "not valid" }}
        </p>
        <p>
            ------------------------------
        </p>
        <div
            v-for="(error, index) in groupedErrors"
            v-bind:key="index"
            class="q-mb-md"
        >
            {{ error }}
        </div>
        <p>
            ------------------------------
        </p>
        <div
            v-for="(error, index) in errors"
            v-bind:key="index"
            class="q-mb-md"
        >
            {{ error }}
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useCffstr } from 'src/store/cffstr'
import { useFileValidator } from 'src/store/validator'

export default defineComponent({
    name: 'Preview',
    components: {
    },
    setup () {
        const { cffstr } = useCffstr()
        const showTooltip = ref(false)
        const { isValidFile, groupedErrors, errors } = useFileValidator()

        const copyToClipboard = async () => {
            await navigator.clipboard.writeText(cffstr.value)
            showTooltip.value = true
            await new Promise(resolve => setTimeout(resolve, 3000))
            showTooltip.value = false
        }

        return {
            cffstr,
            copyToClipboard,
            isValidFile,
            showTooltip,
            groupedErrors,
            errors
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
</style>
