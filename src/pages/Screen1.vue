<template>
  <h1>Screen1 Page</h1>
  <StepperActions />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import StepperActions from "components/StepperActions.vue";

export default defineComponent({
  name: "PageScreen1",
  components: {
    StepperActions
  },
  setup() {
    return {};
  },
});
</script>
