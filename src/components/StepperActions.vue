<template>
  <div class="row">
    <div class="col">
      <q-btn flat color="" label="Back" to="" />
    </div>
    <div class="col" align="right">
      <q-btn-group flat>
        <q-btn flat color="" label="Finish" to="/finish" />
        <q-btn color="grey-6" label="Next" />
      </q-btn-group>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'StepperActions'
})
</script>

<style></style>
