<template>
    <q-card
        bordered
        flat
    >
        <q-btn
            class="copy-button"
            color=""
            flat
            label="Copy"
            v-on:click="copyToClipboard"
        />
        <q-card-section>
            <pre>{{ cffstr }}</pre>
        </q-card-section>
    </q-card>
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
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
            commit,
            cffVersion,
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

        const copyToClipboard = async () => {
            await navigator.clipboard.writeText(makeCffstr())
        }
        const makeCffstr = () => {
            const cff = {
                abstract: abstract.value,
                commit: commit.value,
                cffVersion: cffVersion.value,
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
            } as CffType
            return yaml.dump(kebabcaseKeys(cff), { indent: 2, sortKeys: true })
        }

        return {
            cffstr: computed(() => makeCffstr()),
            copyToClipboard
        }
    }
})
</script>

<style scoped>
pre {
    overflow-x: auto;
}
.copy-button {
    margin-right: 0px;
    margin-left: auto;
    display: block;
}

</style>
