<template>
    <a
        v-bind:href="'https://github.com/citation-file-format/citation-file-format/blob/1.2.0/schema-guide.md' + anchor"
        tabindex="-1"
        target="_blank"
    >
        <q-icon
            name="ion-information-circle-outline"
            size="24px"
            color="primary"
        />
        <q-tooltip
            anchor="center right"
            class="bg-primary text-body2 text-white"
            self="center left"
            transition-show="scale"
            transition-hide="scale"
        >
            Click the icon to access specific documentation
        </q-tooltip>
    </a>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'SchemaGuideLink',
    props: {
        anchor: {
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
