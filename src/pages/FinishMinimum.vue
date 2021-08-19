<template>
    <div class="">
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
                            Now you have a minimal valid CITATION.cff file.
                        </p>
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
                            label="Show advanced"
                            no-caps
                            to="/identifiers"
                            v-on:click="showAdvanced"
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
import { useApp } from '../store/app'
import Preview from 'components/Preview.vue'
import DownloadButton from 'components/DownloadButton.vue'

export default defineComponent({
    name: 'FinishMinimum',
    components: {
        DownloadButton,
        Preview
    },
    setup () {
        const { setShowAdvanced, navigatePrevious, setStepName } = useApp()
        return {
            backToForm: async () => {
                await setStepName('authors')
            },
            setShowAdvanced,
            navigatePrevious,
            showAdvanced: async () => {
                setShowAdvanced(true)
                await setStepName('identifiers')
            }
        }
    }
})
</script>

<style scoped>

.col-flex {
    flex: 1;
}
.title-field {
    margin-right: 120px;
    max-width: 700px;
    min-width: 300px;
}

</style>
