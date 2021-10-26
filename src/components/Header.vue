<template>
    <img src="~assets/cff-logo.svg">
    <span class="spacer" />
    <q-btn-group flat>
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
            flat
            href="https://github.com/citation-file-format/citation-file-format/blob/1.2.0/schema-guide.md"
            label="Documentation"
            no-caps
            target="_blank"
            type="a"
        />
    </q-btn-group>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'Header'
})
</script>

<style scoped>
img{
    margin: 5px;
}
.spacer {
    flex-grow: 1;
}
</style>
