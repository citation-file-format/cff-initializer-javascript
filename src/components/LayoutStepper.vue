<template>
    <q-layout view="hHh lpR fFf">
        <div id="app">
            <q-header id="header-inner">
                <Header />
            </q-header>
            <q-page-container>
                <q-page
                    id="middle"
                    class="row"
                >
                    <router-view />
                    <div
                        id="preview"
                        class="col-12 col-md-4 col-sm-3"
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
import { computed, defineComponent } from 'vue'
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
