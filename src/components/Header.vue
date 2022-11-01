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
            class="gt-xs"
            flat
            href="https://github.com/citation-file-format/cff-initializer-javascript/issues"
            icon="ion-logo-github"
            label="Report an issue"
            target="_blank"
            type="a"
        />
        <q-btn
            aria-label="Documentation of the CFF schema"
            class="gt-xs"
            flat
            href="https://github.com/citation-file-format/citation-file-format/blob/1.2.0/schema-guide.md"
            icon="ion-document"
            label="Documentation"
            target="_blank"
            type="a"
        />
    </q-toolbar>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
    name: 'Header',
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
