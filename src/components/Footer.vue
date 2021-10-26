<template>
    <footer>
        <div class="container">
            <a
                href="https://esciencecenter.nl"
                target="_blank"
            >
                <img src="~assets/nlesc-logo.svg">
            </a>
        </div>
    </footer>
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
footer{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 10px;
    height: 60px;
    background: var(--footer-background);
}
.container{
    max-width: 1919px;
    width: 100%;
}
</style>
