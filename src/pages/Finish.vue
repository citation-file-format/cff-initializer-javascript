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
                        <!-- <div class="text-subtitle2">by John Doe</div> -->
                    </q-card-section>

                    <q-item>
                        <q-item-section>
                            <q-item-label>
                                <q-skeleton type="text" />
                            </q-item-label>
                            <q-item-label caption>
                                <q-skeleton type="text" />
                            </q-item-label>
                        </q-item-section>
                    </q-item>

                    <q-skeleton
                        height="200px"
                        square
                    />

                    <q-card-section>
                        <q-skeleton
                            class="text-subtitle1"
                            type="text"
                        />
                        <q-skeleton
                            class="text-subtitle1"
                            type="text"
                            width="50%"
                        />
                        <q-skeleton
                            class="text-caption"
                            type="text"
                        />
                    </q-card-section>

                    <div
                        align="center"
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

                    <div
                        align="left"
                        class="text-primary q-gutter-md q-mb-xl"
                        style="font-size: 2em"
                    >
                        <q-skeleton
                            class="text-subtitle1"
                            type="text"
                            width="50%"
                        />
                        <q-skeleton
                            class="text-subtitle1"
                            type="text"
                            width="50%"
                        />
                    </div>

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
                        <q-skeleton
                            class="text-h6"
                            type="text"
                            v-bind:key="index"
                            v-for="index in 11"
                        />
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
import { defineComponent, computed, unref } from 'vue'
import { useCff } from 'src/store/cff'
import yaml from 'js-yaml'

type CffAsJson = Record<string, string | string[]>

function toJsonObject (obj: CffAsJson) {
    const getters = new Set([
        'abstract',
        'cffVersion',
        'commit',
        'dateReleased',
        'identifiers',
        'keywords',
        'license',
        'message',
        'repository',
        'repositoryArtifact',
        'repositoryCode',
        'title',
        'type',
        'url',
        'version'
    ])

    const j: CffAsJson = {}
    Object.entries(obj)
        .filter((d: [string, string | string[]]) => getters.has(d[0]))
        .forEach(([key, val]: [string, string | string[]]) => {
            j[key] = unref(val)
            // TODO also unref nested
        })
    return j
}

function toYamlString (obj: CffAsJson) {
    const j = toJsonObject(obj)
    // TODO de-duplicate yaml.dump() in ../components/Preview.vue
    return yaml.dump(j)
}

function toDownloadUrl (obj: CffAsJson) {
    const body = toYamlString(obj)
    return `data:text/vnd.yaml,${encodeURIComponent(body)}`
}

export default defineComponent({
    name: 'PageFinish',
    components: { },
    setup () {
        const obj = useCff() as unknown as CffAsJson

        return {
            downloadUrl: computed(() => toDownloadUrl(obj))
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
