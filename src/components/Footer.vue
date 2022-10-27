<template>
    <div class="row">
        <div
            id="logo"
            class="col"
        >
            <a
                href="https://esciencecenter.nl"
                target="_blank"
                aria-label="Netherlands eScience Center website (opens in a new tab)"
            >
                <img
                    src="~assets/nlesc-logo.svg"
                    alt="Netherlands eScience Center logo"
                >
            </a>
        </div>
        <span class="col text-right text-white text-body1">
            Version 2.0.4
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
