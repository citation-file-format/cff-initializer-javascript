<template>
    <div class="scale-container">
        <div id="app">
            <div id="header-outer">
                <div id="header-inner">
                    <Header />
                </div>
            </div>
            <span class="spacer" />
            <div id="middle">
                <router-view />
                <div id="preview">
                    <div id="preview-content">
                        <Preview />
                    </div>

                    <div id="preview-button-bar">
                        <DownloadButton v-if="isNotFinish" />
                    </div>
                </div>
            </div>
            <span class="spacer" />
            <Footer />
        </div>
    </div>
</template>

<script lang="ts">
import Header from 'components/Header.vue'
import Preview from 'components/Preview.vue'
import DownloadButton from 'components/DownloadButton.vue'
import Footer from 'components/Footer.vue'
import { defineComponent, computed } from 'vue'
import { useRoute } from 'vue-router'

export default defineComponent({
    name: 'StepperLayout',
    components: {
        Header,
        Preview,
        DownloadButton,
        Footer
    },
    setup () {
        return {
            isNotFinish: computed(() => {
                const currentPath = useRoute().path
                return currentPath !== '/finish-minimum' && currentPath !== '/finish-advanced'
            })
        }
    }
})
</script>
<style scoped>
.spacer {
    flex-grow: 1.0;
}
</style>
