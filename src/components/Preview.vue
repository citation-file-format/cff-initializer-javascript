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
import { defineComponent, computed, unref, Ref } from 'vue'
import { useCff } from 'src/store/cff'
import { CffType } from 'src/types'
import yaml from 'js-yaml'

function toYamlString (obj: Ref<CffType>) {
    const j: CffType = unref(obj)
    // TODO de-duplicate yaml.dump() in ./Finish.vue
    return yaml.dump(j)
}

export default defineComponent({
    name: 'Preview',
    setup () {
        const { data } = useCff()

        const cffstr = computed(() => toYamlString(data))
        const copyToClipboard = async () => {
            await navigator.clipboard.writeText(cffstr.value)
        }

        return {
            cffstr,
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
