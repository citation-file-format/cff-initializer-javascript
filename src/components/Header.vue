<template>
    <q-btn-group flat>
        <q-btn
            color=""
            flat
            href=""
            icon-right="ion-logo-github"
            label="Report an issue"
            no-caps
            target="_blank"
            type="a"
        />
        <q-btn
            color=""
            flat
            label="Documentation"
            no-caps
        />
        <q-btn
            color=""
            flat
            label="About"
            no-caps
        />
    </q-btn-group>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'Header'
})
</script>

<style>
</style>
