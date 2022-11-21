<template>
    <q-layout view="hHh lpR fFf">
        <q-resize-observer v-on:resize="onResize" />
        <q-header
            id="header"
            class="text-black"
        >
            <div
                id="skipToMain"
            >
                <a
                    v-for="skipLink in skipLinks"
                    class="skip-to-main-content-link"
                    v-bind:key="skipLink.id"
                    v-bind:href="`#${skipLink.id}`"
                    v-on:blur="skipToMainFocused = false"
                    v-on:click.prevent="focusElement(skipLink.id)"
                    v-on:focus="skipToMainFocused = true"
                >
                    Skip to {{ skipLink.where }}
                </a>
            </div>
            <Header
                v-bind:show-open-preview-button="isPreviewDrawer"
            />
        </q-header>

        <q-page-container>
            <q-page
                id="main"
                role="main"
                v-bind:class="isMainConnected ? '' : 'q-pa-md'"
            >
                <div v-bind:class="['row', 'justify-center', isMainConnected ? '' : 'q-pa-md q-ml-auto']">
                    <div
                        id="main-block"
                        v-bind:class="['row', 'col', 'bg-white', 'q-pa-md', isMainConnected ? '' : 'elevated rounded-borders q-mx-lg']"
                    >
                        <aside
                            class="col-auto gt-xs"
                            id="stepper"
                            tabindex="-1"
                        >
                            <Stepper />
                        </aside>
                        <form
                            class="col column"
                            id="form"
                        >
                            <div id="form-content">
                                <router-view />
                            </div>
                            <q-space />
                            <div
                                class="row q-pt-md"
                                id="form-button-bar"
                            >
                                <StepperActions />
                            </div>

                            <q-btn
                                v-if="isPreviewDrawer"
                                class="floating-preview-button bg-primary text-white"
                                data-cy="btn-open-cff-preview"
                                fab
                                icon="ion-arrow-round-back"
                                label="Open CFF Preview"
                                no-caps
                                v-on:click="togglePreview"
                            />
                        </form>
                    </div>
                    <component
                        v-if="!isOnlyForm"
                        id="preview-block"
                        v-bind:breakpoint="1439"
                        v-bind:class="isPreviewDrawer ? 'bg-white q-pa-md' : 'col transparent q-mx-lg'"
                        v-bind:is="isPreviewDrawer ? 'q-drawer' : 'div'"
                        v-bind:overlay="isPreviewDrawer"
                        v-bind:side="isPreviewDrawer ? 'right' : ''"
                        v-model="isPreviewDrawerOpen"
                        v-bind:width="isPreviewDrawer ? 600 : ''"
                    >
                        <div
                            v-if="isPreviewDrawer"
                            id="preview-button-close"
                            class="text-center"
                        >
                            <q-btn
                                flat
                                icon="close"
                                v-on:click="togglePreview"
                            >
                                Close preview
                            </q-btn>
                        </div>

                        <div id="preview-content">
                            <Preview v-bind:inside-drawer="isPreviewDrawer" />
                        </div>

                        <div
                            id="preview-button-bar"
                            class="text-center"
                        >
                            <DownloadButton v-if="isNotFinish" />
                        </div>
                    </component>
                </div>
            </q-page>
        </q-page-container>

        <q-footer id="footer">
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
        const isPreviewDrawerOpen = ref(false)
        const onResize = () => {
            isPreviewDrawerOpen.value = false
        }
        return {
            focusElement: (id: string) => {
                const element = window.document.getElementById(id)
                if (!element) return
                element.focus()
            },
            isOnlyForm: computed(() => q.screen.xs),
            isNotFinish: computed(() => {
                const currentPath = useRoute().path
                return currentPath !== '/finish'
            }),
            isPreviewDrawerOpen,
            isPreviewDrawer: computed(() => q.screen.sm || q.screen.md),
            isMainConnected: computed(() => q.screen.xs || q.screen.sm),
            skipLinks: [
                { id: 'form-title', where: 'main content' },
                { id: 'stepper', where: 'stepper navigation' }
            ],
            skipToMainFocused: ref(false),
            onResize,
            togglePreview: () => {
                isPreviewDrawerOpen.value = !isPreviewDrawerOpen.value
            }
        }
    }
})
</script>
<style scoped>
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
