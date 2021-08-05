<template>
  <h1>Screen1 Page</h1>
  <div class="q-pa-md">
    <div class="q-gutter-md" style="max-width: 300px">
      <q-input v-model="store.state.cff.title" label="Title" />
    </div>
  </div>
  <StepperActions />
</template>

<script lang="ts">
import StepperActions from 'components/StepperActions.vue'
import { inject, defineComponent } from 'vue'

export default defineComponent({
  name: 'PageScreen1',
  components: {
    StepperActions
  },
  setup () {
    const store = inject('store')
    return {
      store
    }
  }
})
</script>
