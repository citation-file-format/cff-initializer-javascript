<template>
  <div>
    <h1>Screen2 Page</h1>
    <StepperActions />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import StepperActions from 'components/StepperActions.vue'

export default defineComponent({
    name: 'PageScreen2',
    components: {
        StepperActions
    },
    setup () {
        return {}
    }
})
</script>
