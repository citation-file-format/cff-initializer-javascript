<template>
    <q-header class="bg-grey-4 text-primary">
        <q-toolbar>
            <q-space />
            <q-toolbar-title align="right">
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
            </q-toolbar-title>
        </q-toolbar>
    </q-header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'Header'
})
</script>

<style>
</style>
