<template>
    <q-layout view="hHh lpR fFf">
        <q-header id="header-inner">
            <a
                class="skip-to-main-content-link"
                href="#middle"
                id="skipToMain"
                v-on:blur="skipToMainFocused = false"
                v-on:click.prevent="focusMain"
                v-on:focus="skipToMainFocused = true"
            >
                Skip to main content
            </a>
            <Header
                v-on:togglePreview="onTogglePreview"
            />
        </q-header>

        <q-drawer
            id="preview-drawer"
            elevated
            overlay
            side="right"
            v-model="isPreviewDrawerEnabled"
            v-bind:width="600"
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
                role="main"
                tabindex="0"
            >
                <Stepper />
                <div
                    id="form"
                    class="col-12 col-lg-5 col-sm-10"
                >
                    <div id="form-content">
                        <router-view />
                    </div>

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
        const isPreviewDrawerEnabled = ref(false)
        return {
            focusMain: () => {
                const element = window.document.getElementById('middle')
                if (!element) return
                element.focus()
            },
            isNotFinish: computed(() => {
                const currentPath = useRoute().path
                return currentPath !== '/finish'
            }),
            isPreviewDrawerEnabled,
            onTogglePreview: () => { isPreviewDrawerEnabled.value = !isPreviewDrawerEnabled.value },
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
