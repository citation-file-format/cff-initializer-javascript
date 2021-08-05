<template>
  <q-header class="bg-grey-4 text-black">
    <q-toolbar>
      Store-progress: {{ store.state.progress }}
      <q-space ></q-space>
      <q-toolbar-title align="right">
          <q-btn-group flat>
            <q-btn flat color="" label="Report an issue" icon-right="ion-logo-github" type="a" href="" target="_blank" />
            <q-btn flat color="" label="Documentation" />
            <q-btn flat color="" label="About" />
          </q-btn-group>
      </q-toolbar-title>
    </q-toolbar>
  </q-header>
</template>

<script lang="ts">
import { inject, defineComponent } from 'vue'

export default defineComponent({
  name: 'Header',

  setup () {
    const store = inject('store')

    return {
      store
    }
  }

})
</script>

<style>

</style>
