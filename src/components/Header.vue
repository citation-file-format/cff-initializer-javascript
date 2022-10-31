<template>
    <q-toolbar>
        <q-btn
            aria-label="Back to landing page"
            class="q-py-sm"
            data-cy="btn-logo"
            flat
            id="btn-logo"
            v-on:click="goHome"
        >
            <img
                alt=""
                height="40"
                src="~assets/cff-logo.svg"
            >
        </q-btn>
        <q-space />
        <q-btn
            flat
            href="https://github.com/citation-file-format/cff-initializer-javascript/issues"
            icon-right="ion-logo-github"
            label="Report an issue"
            no-caps
            target="_blank"
            type="a"
        />
        <q-btn
            aria-label="Documentation of the CFF schema"
            color=""
            flat
            href="https://github.com/citation-file-format/citation-file-format/blob/1.2.0/schema-guide.md"
            label="Documentation"
            no-caps
            target="_blank"
            type="a"
        />
        <q-btn
            v-if="showOpenPreviewButton"
            class="lt-lg gt-xs"
            flat
            icon="menu"
            v-on:click="$emit('togglePreview')"
        >
            Preview
        </q-btn>
    </q-toolbar>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
    name: 'Header',
    emits: ['togglePreview'],
    props: {
        showOpenPreviewButton: {
            type: Boolean,
            required: false,
            default: false
        }
    },
    setup () {
        const router = useRouter()
        return {
            goHome: async () => {
                await router.push({ path: '/' })
            }
        }
    }
})
</script>

<style scoped>
</style>
