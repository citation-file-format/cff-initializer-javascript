<template>
  <q-card>
    <q-card-section>
      <pre>{{ yaml }}</pre>
    </q-card-section>
  </q-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useCFF } from '../store/cff'

export default defineComponent({
    name: 'Preview',
    setup () {
        const cff = useCFF()
        return {
            yaml: cff.asYAML
        }
    }
})
</script>
