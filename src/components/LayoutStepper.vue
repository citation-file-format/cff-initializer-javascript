<template>
    <q-layout view="hHh lpR fFf">
        <div id="app">
            <q-header id="header-inner">
                <Header v-on:togglePreview="togglePreview" />
            </q-header>

            <q-drawer
                id="preview-drawer"
                elevated
                overlay
                side="right"
                v-model="previewDrawer"
                width="600"
            >
                <div id="preview-button-close">
                    <q-btn
                        icon="close"
                        v-on:click="togglePreview"
                    >
                        Close preview
                    </q-btn>
                </div>

                <div id="preview-content">
                    <Preview />
                </div>

                <div id="preview-button-bar">
                    <DownloadButton v-if="isNotFinish" />
                </div>
            </q-drawer>

            <q-page-container>
                <q-page
                    id="middle"
                    class="row"
                >
                    <router-view />
                    <div
                        id="preview-static"
                        class="col-12 col-lg-5 gt-md"
                    >
                        <div id="preview-content">
                            <Preview />
                        </div>

                        <div id="preview-button-bar">
                            <DownloadButton v-if="isNotFinish" />
                        </div>
                    </div>
                </q-page>
            </q-page-container>
            <q-footer id="footer-inner">
                <Footer />
            </q-footer>
        </div>
    </q-layout>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import DownloadButton from 'components/DownloadButton.vue'
import Footer from 'components/Footer.vue'
import Header from 'components/Header.vue'
import Preview from 'components/Preview.vue'
import { useRoute } from 'vue-router'

export default defineComponent({
    name: 'LayoutStepper',
    components: {
        Header,
        Preview,
        DownloadButton,
        Footer
    },
    setup () {
        const previewDrawer = ref(false)
        return {
            isNotFinish: computed(() => {
                const currentPath = useRoute().path
                return currentPath !== '/finish-minimum' && currentPath !== '/finish-advanced'
            }),
            previewDrawer,
            togglePreview: () => { previewDrawer.value = !previewDrawer.value }
        }
    }
})
</script>
<style scoped>
.spacer {
    flex-grow: 1.0;
}
</style>
