<template>
  <q-card>
    <q-card-section>
      <pre>{{ JSON.stringify(store.state.cff, null, '\t') }}</pre>
    </q-card-section>
  </q-card>
</template>

<script lang="ts">
import { inject, defineComponent } from 'vue'

export default defineComponent({
  name: 'Preview',
  setup () {
    const store = inject('store')
    return {
      store
    }
  }
})
</script>
