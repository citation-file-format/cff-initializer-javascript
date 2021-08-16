<template>
    <q-card
        bordered
        flat
    >
        <q-card-section>
            <pre>{{ cffstr }}</pre>
        </q-card-section>
    </q-card>
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { defineComponent, computed } from 'vue'
import { useCff } from 'src/store/cff'
import yaml from 'js-yaml'
import { CffType } from 'src/types'
import kebabcaseKeys from 'kebabcase-keys'

export default defineComponent({
    name: 'Preview',
    setup () {
        const {
            abstract,
            cffVersion,
            commit,
            dateReleased,
            identifiers,
            keywords,
            license,
            message,
            repository,
            repositoryArtifact,
            repositoryCode,
            title,
            type,
            url,
            version
        } = useCff()

        const cff = kebabcaseKeys({
            abstract: abstract.value,
            cffVersion: cffVersion.value,
            commit: commit.value,
            dateReleased: dateReleased.value,
            identifiers: identifiers.value,
            keywords: keywords.value,
            license: license.value,
            message: message.value,
            repository: repository.value,
            repositoryArtifact: repositoryArtifact.value,
            repositoryCode: repositoryCode.value,
            title: title.value,
            type: type.value,
            url: url.value,
            version: version.value
        } as CffType)
        return {
            cffstr: computed(() => yaml.dump(cff))
        }
    }
})
</script>

<style scoped>
pre {
    overflow-x: auto;
}
</style>
