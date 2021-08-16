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
                            v-on:click="$router.go(-1)"
                        />
                        <q-btn
                            class="q-ml-xl"
                            color="primary"
                            icon="edit"
                            label="Create another"
                            no-caps
                            to="/1"
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
                        <q-btn
                            class="download-button"
                            color="primary"
                            icon="download"
                            label="Download"
                            size="xl"
                            no-caps
                            type="a"
                            download="CITATION.cff"
                            v-bind:href="downloadUrl"
                        />
                    </q-card-actions>
                </q-card>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, computed, unref, Ref } from 'vue'
import yaml from 'js-yaml'
import { useCff } from 'src/store/cff'
import { CffType } from 'src/types'
import Preview from 'components/Preview.vue'

function toYamlString (obj: Ref<CffType>) {
    const j: CffType = unref(obj)
    // TODO de-duplicate yaml.dump() in ../components/Preview.vue
    return yaml.dump(j)
}

function toDownloadUrl (obj: Ref<CffType>) {
    const body = toYamlString(obj)
    return `data:text/vnd.yaml,${encodeURIComponent(body)}`
}

export default defineComponent({
    name: 'Finish',
    components: {
        Preview
    },
    setup () {
        const { data } = useCff()

        return {
            downloadUrl: computed(() => toDownloadUrl(data))
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
