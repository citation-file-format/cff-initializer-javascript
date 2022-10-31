<template>
    <q-layout view="hHh lpR fFf">
        <q-resize-observer v-on:resize="onResize" />
        <q-header id="header-inner">
            <a
                class="skip-to-main-content-link"
                href="#main"
                id="skipToMain"
                v-on:blur="skipToMainFocused = false"
                v-on:click.prevent="focusMain"
                v-on:focus="skipToMainFocused = true"
            >
                Skip to main content
            </a>
            <Header
                v-bind:show-open-preview-button="isPreviewDrawer"
                v-on:togglePreview="togglePreview"
            />
        </q-header>

        <q-drawer
            id="preview-drawer"
            side="right"
            v-bind:breakpoint="1440"
            v-bind:overlay="isPreviewDrawer"
            v-model="isPreviewDrawerOpen"
            v-bind:width="600"
        >
            <div
                v-if="isPreviewDrawer"
                id="preview-button-close"
            >
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
                class="row bg-secondary"
                id="main"
                role="main"
                tabindex="0"
            >
                <aside class="bg-secondary col-12 col-sm-2 gt-xs">
                    <Stepper />
                </aside>
                <div
                    id="form"
                    class="col-12 col-lg-5 col-sm-10"
                >
                    <form id="form-content">
                        <router-view />
                    </form>

                    <div id="form-button-bar">
                        <StepperActions />
                    </div>
                </div>
            </q-page>
        </q-page-container>

        <q-footer id="footer-inner">
            <Footer />
        </q-footer>
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
import { useQuasar } from 'quasar'
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
        const q = useQuasar()
        const screenIsBigEnough = computed(() => q.screen.lg || q.screen.xl)
        const isPreviewDrawerOpen = ref(screenIsBigEnough.value)
        const onResize = () => { isPreviewDrawerOpen.value = false }
        return {
            focusMain: () => {
                const element = window.document.getElementById('main')
                if (!element) return
                element.focus()
            },
            isNotFinish: computed(() => {
                const currentPath = useRoute().path
                return currentPath !== '/finish'
            }),
            isPreviewDrawerOpen,
            onResize,
            togglePreview: () => { isPreviewDrawerOpen.value = !isPreviewDrawerOpen.value },
            isPreviewDrawer: computed(() => q.screen.sm || q.screen.md),
            skipToMainFocused: ref(false)
        }
    }
})
</script>
<style scoped>
.spacer {
    flex-grow: 1.0;
}
.skip-to-main-content-link {
  position: absolute;
  left: -9999px;
    z-index: 999;
    padding: 1em;
    background-color: black;
    color: white;
    opacity: 0;
}
.skip-to-main-content-link:focus {
    left: 50%;
    transform: translateX(-50%);
    opacity: 1;
}
</style>
