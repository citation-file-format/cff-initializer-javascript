<template>
    <q-footer class="bg-grey-4 text-primary">
        <q-toolbar>
            <q-toolbar-title>
                <a href="https://esciencecenter.nl">
                    <img src="~assets/nlesc-logo.png">
                </a>
            </q-toolbar-title>
        </q-toolbar>
    </q-footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'Footer'
})
</script>

<style scoped>
img {
    height: 22px;
    vertical-align: middle;
}
</style>
