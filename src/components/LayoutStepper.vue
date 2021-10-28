<template>
    <div class="scale-container">
        <div id="app">
            <span class="spacer" />
            <div id="header-outer">
                <div id="header-inner">
                    <Header />
                </div>
            </div>
            <div id="middle">
                <div class="wrapper">
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
            </div>
            <div id="footer-outer">
                <div id="footer-inner">
                    <Footer />
                </div>
            </div>

            <span class="spacer" />
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
.wrapper{
    display: flex;
    box-shadow: 0px 8px 22px -6px rgba(24, 39, 75, 0.12), 0px 14px 64px -4px rgba(24, 39, 75, 0.12);
}
</style>
