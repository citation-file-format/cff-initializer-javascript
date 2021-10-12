<template>
    <a
        href="https://esciencecenter.nl"
        target="_blank"
    >
        <img src="~assets/nlesc-logo.png">
    </a>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'Footer'
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
