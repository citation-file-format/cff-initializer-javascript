<template>
    <q-toolbar>
        <q-btn
            aria-label="Netherlands eScience Center website (opens in a new tab)"
            class="q-py-md"
            flat
            href="https://esciencecenter.nl"
            target="_blank"
            type="a"
        >
            <img
                alt=""
                height="28"
                src="~assets/nlesc-logo.svg"
            >
        </q-btn>
        <q-toolbar-title class="text-black text-right text-body1">
            Version 2.3.0
        </q-toolbar-title>
    </q-toolbar>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'Footer'
})
</script>
