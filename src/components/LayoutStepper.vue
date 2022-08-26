<template>
    <q-layout view="hHh lpR fFf">
        <div id="app">
            <q-header id="header-inner">
                <Header v-on:togglePreview="onTogglePreview" />
            </q-header>

            <q-drawer
                id="preview-drawer"
                elevated
                overlay
                side="right"
                v-model="isPreviewDrawerEnabled"
                v-bind:width="width"
            >
                <div id="preview-button-close">
                    <q-btn
                        icon="close"
                        v-on:click="onTogglePreview"
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
                    <Stepper />
                    <div
                        id="form"
                        class="col-12 col-lg-5 col-sm-10"
                    >
                        <router-view />

                        <div id="form-button-bar">
                            <StepperActions />
                        </div>
                    </div>
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
import Stepper from 'components/Stepper.vue'
import StepperActions from 'components/StepperActions.vue'
import { useRoute } from 'vue-router'

export default defineComponent({
    name: 'LayoutStepper',
    components: {
        Header,
        Preview,
        DownloadButton,
        Footer,
        Stepper,
        StepperActions
    },
    setup () {
        const width = ref(600)
        const isPreviewDrawerEnabled = ref(false)
        return {
            isNotFinish: computed(() => {
                const currentPath = useRoute().path
                return currentPath !== '/finish-minimum' && currentPath !== '/finish-advanced'
            }),
            width,
            isPreviewDrawerEnabled,
            onTogglePreview: () => { isPreviewDrawerEnabled.value = !isPreviewDrawerEnabled.value }
        }
    }
})
</script>
<style scoped>
.spacer {
    flex-grow: 1.0;
}
</style>
