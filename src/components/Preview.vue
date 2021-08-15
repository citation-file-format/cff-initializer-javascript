<template>
    <q-card
        bordered
        flat
    >
        <q-card-section>
            <pre>{{ yaml }}</pre>
        </q-card-section>
    </q-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useCff } from '../store/cff'

export default defineComponent({
    name: 'Preview',
    setup () {
        const cff = useCff()
        return {
            yaml: cff.asYAML
        }
    }
})
</script>

<style scoped>
pre {
    overflow-x: auto;
}
</style>
