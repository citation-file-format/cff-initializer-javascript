<template>
  <h1>Title Page</h1>
  <div class="q-pa-md">
    <div
      class="q-gutter-md"
      style="max-width: 400px"
    >
      <q-input
        :model-value="title"
        v-on:update:modelValue="setTitle"
        label="Title"
        :rules="[ val => val && val.length > 3 || 'Please use minimum 3 characters']"
      />
      <q-input
        :model-value="message"
        v-on:update:modelValue="setMessage"
        label="Message"
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
    name: 'PageTitle',
    components: {
        StepperActions
    },
    setup () {
        const cff = useCFF()
        return {
            title: cff.title,
            message: cff.message,
            setTitle: cff.setTitle,
            setMessage: cff.setMessage
        }
    }
})
</script>
