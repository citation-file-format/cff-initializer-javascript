<template>
    <div class="row">
        <div
            id="logo"
            class="col"
        >
            <a
                href="https://esciencecenter.nl"
                target="_blank"
            >
                <img src="~assets/nlesc-logo.svg">
            </a>
        </div>
        <span class="col text-right text-white text-body1">
            Version 2.0.3
        </span>
    </div>
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
