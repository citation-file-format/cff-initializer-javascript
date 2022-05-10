<template>
    <div id="logo">
        <a
            href="https://esciencecenter.nl"
            target="_blank"
        >
            <img src="~assets/nlesc-logo.svg">
        </a>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'ComponentFooter'
})
</script>

<style scoped>
a {
    text-decoration: none;
    display: flex;
}
img {
    height: 22px;
}
</style>
