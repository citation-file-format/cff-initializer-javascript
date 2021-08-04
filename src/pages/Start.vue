<template>
    <q-page-container>
      <q-page>
        <h1>Landing Page</h1>
        <q-btn @click="step = 1" color="grey-6" label="Continue" to="/screen1"/>
      </q-page>
    </q-page-container>

</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PageLanding',
  components: { },
  setup () {
    return {}
  }
})
</script>
