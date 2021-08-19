<template>
    <div class="">
        <div
            align="center"
            class="q-gutter-md"
        >
            <div
                class="text-primary q-gutter-md"
                style="font-size: 2em"
            >
                <q-icon
                    name="star"
                    size="xl"
                />
                <q-icon
                    name="star"
                    size="xl"
                />
                <q-icon
                    name="star"
                    size="xl"
                />
            </div>
        </div>

        <div class="row">
            <div class="col-6 q-pa-lg">
                <q-card
                    class="secondary"
                    flat
                >
                    <q-card-section>
                        <div class="text-h3">
                            <q-icon
                                class="text-h1"
                                name="check"
                            />
                            Congratulations
                        </div>
                    </q-card-section>

                    <q-card-section>
                        <p class="text-h5">
                            Now you have a CITATION.cff file and you get the credits you deserve.
                        </p>
                    </q-card-section>

                    <q-card-section>
                        <p>Share a reference to your software.</p>
                        <div
                            class="text-primary q-gutter-md q-mb-xl"
                            style="font-size: 2em"
                        >
                            <q-icon
                                name="ion-logo-twitter"
                                size="xl"
                            />
                            <q-icon
                                name="ion-logo-linkedin"
                                size="xl"
                            />
                            <q-icon
                                name="ion-logo-reddit"
                                size="xl"
                            />
                        </div>
                    </q-card-section>

                    <q-card-actions
                        align="center"
                        class="q-gutter-md"
                    >
                        <q-btn
                            class="q-mr-xl"
                            color="primary"
                            icon="chevron_left"
                            label="Back to form"
                            no-caps
                            v-on:click="backToForm"
                        />
                        <q-btn
                            class="q-ml-xl"
                            color="primary"
                            icon="edit"
                            label="Create another"
                            no-caps
                            v-on:click="createAnother"
                        />
                    </q-card-actions>
                </q-card>
            </div>

            <div class="col-6 q-pa-lg">
                <q-card
                    class="secondary cff-card"
                    flat
                >
                    <q-card-section>
                        <Preview />
                    </q-card-section>

                    <q-card-actions
                        align="center"
                        class="q-gutter-md q-mt-xl"
                    >
                        <DownloadButton
                            class="download-button"
                        />
                    </q-card-actions>
                </q-card>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Preview from 'components/Preview.vue'
import DownloadButton from 'components/DownloadButton.vue'
import { useApp } from '../store/app'
import { useCff } from '../store/cff'

export default defineComponent({
    name: 'FinishAdvanced',
    components: {
        Preview,
        DownloadButton
    },
    setup () {
        const { setStepName, setShowAdvanced } = useApp()
        const { reset } = useCff()

        return {
            createAnother: async () => {
                reset()
                setShowAdvanced(false)
                await setStepName('start')
            },
            backToForm: async () => {
                await setStepName('version-specific')
            }
        }
    }
})
</script>

<style scoped>

.download-button {
    margin-top: 150px;
}

.cff-card {
    margin-top: 100px;
}

</style>
