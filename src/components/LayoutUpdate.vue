<template>
    <q-layout view="hHh lpR fFf">
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
            <Header />
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
                        <form
                            class="col q-gutter-md"
                            id="form"
                            v-on:submit.prevent
                        >
                            <h1
                                id="form-title"
                                tabindex="-1"
                            >
                                Update your CITATION.cff
                            </h1>
                            <p>
                                Paste your CITATION.cff in the field below and click the button to start updating your CITATION.cff.
                                The "Start editing" button will be available once a valid file is parsed.
                            </p>
                            <q-input
                                autogrow
                                data-cy="input-existing-cff"
                                outlined
                                label="Paste your existing CFF"
                                type="textarea"
                                v-model="existingCff"
                            />
                            <q-toolbar>
                                <q-btn
                                    color="primary"
                                    data-cy="btn-parse"
                                    icon="upload"
                                    label="Parse"
                                    v-on:click.prevent="parseExistingCff"
                                />
                                <q-space />
                                <q-btn
                                    color="primary"
                                    data-cy="btn-start"
                                    icon-right="ion-arrow-forward"
                                    label="Start editing"
                                    v-bind:disable="!parseSuccess"
                                    v-on:click.prevent="startEditing"
                                />
                            </q-toolbar>
                            <div data-cy="text-validation-msg">
                                <q-item
                                    v-for="(error, errorIndex) in existingCffError"
                                    v-bind:key="errorIndex"
                                >
                                    <q-item-section side>
                                        <q-icon
                                            size="24px"
                                            v-bind:color="parseSuccess ? 'accent' : 'negative'"
                                            v-bind:name="parseSuccess ? 'warning' : 'error'"
                                        />
                                    </q-item-section>
                                    <q-item-section>
                                        <q-item-label>
                                            {{ error }}
                                        </q-item-label>
                                    </q-item-section>
                                </q-item>
                                <q-item v-if="parseSuccess">
                                    <q-item-section side>
                                        <q-icon
                                            name="done"
                                            color="primary"
                                            side="24px"
                                        />
                                    </q-item-section>
                                    <q-item-section>
                                        <q-item-label>
                                            Parsed CFF successfully.
                                        </q-item-label>
                                    </q-item-section>
                                </q-item>
                            </div>
                        </form>
                    </div>
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
import Footer from 'src/components/Footer.vue'
import Header from 'src/components/Header.vue'
import { updateCff } from 'src/store/cff'
import { useApp } from 'src/store/app'
import { useQuasar } from 'quasar'

export default defineComponent({
    name: 'LayoutUpdate',
    components: {
        Footer,
        Header
    },
    setup () {
        const q = useQuasar()
        const existingCff = ref('')
        const existingCffError = ref<string[]>([])
        const parseSuccess = ref(false)
        const parseExistingCff = () => {
            const res = updateCff(existingCff.value)
            parseSuccess.value = res.success
            existingCffError.value = res.msg
        }
        const { setStepName, visitScreen } = useApp()

        return {
            existingCff,
            existingCffError,
            focusElement: (id: string) => {
                const element = window.document.getElementById(id)
                if (!element) return
                element.focus()
            },
            isMainConnected: computed(() => q.screen.xs || q.screen.sm),
            parseSuccess,
            skipLinks: [
                { id: 'form-title', where: 'main content' }
            ],
            skipToMainFocused: ref(false),
            parseExistingCff,
            startEditing: () => {
                visitScreen('finish')
                void setStepName('start')
            }
        }
    }
})
</script>
