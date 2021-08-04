<template>
    <q-page-container>
      <q-page>
        <h1>Finish Page</h1>
        <q-btn @click="step = 1" color="grey-6" label="Create another" to="/"/>
        <q-btn @click="step = 1" color="grey-6" label="Back to form" to="/"/>

      </q-page>
    </q-page-container>

</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PageFinish',
  components: { },
  setup () {
    return {}
  }
})
</script>
