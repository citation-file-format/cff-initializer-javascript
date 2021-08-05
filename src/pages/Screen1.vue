<template>
  <h1>Screen1 Page</h1>
  <div class="q-pa-md">
    <div class="q-gutter-md" style="max-width: 400px">
      <q-input
      :modelValue="title"
      @update:modelValue="setTitle"
      label="Title"
      :rules="[ val => val && val.length > 3 || 'Please use minimum 3 characters']"
      />
    </div>
  </div>
  <StepperActions />
</template>

<script lang="ts">
import StepperActions from 'components/StepperActions.vue'
import { defineComponent } from 'vue'
import { useCFF } from '../store/cff'

export default defineComponent({
  name: 'PageScreen1',
  components: {
    StepperActions
  },
  setup () {
    const cff = useCFF()
    return {
      title: cff.title,
      setTitle: cff.setTitle
    }
  }
})
</script>
