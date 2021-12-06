<template>
    <a v-bind:href="'https://github.com/citation-file-format/citation-file-format/blob/main/schema-guide.md#' + section">
        <q-icon name="ion-information-circle-outline" />
    </a>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'SchemaInfoIcon',
    props: {
        section: {
            type: String,
            required: true
        }
    }
})
</script>

<style scoped>
a {
    text-decoration: none;
}
</style>
