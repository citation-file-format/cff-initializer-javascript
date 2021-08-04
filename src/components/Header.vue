<template>
  <q-header class="bg-grey-4 text-white">
    <q-toolbar>
      <q-space ></q-space>
      <q-toolbar-title align="right">
          <q-btn-group flat>
            <q-btn flat color="" label="Report an issue" icon-right="ion-logo-github" type="a" href="" target="_blank" />
            <q-btn flat color="" label="Documentation" icon-right="" />
            <q-btn flat color="" label="About" icon-right="" />
          </q-btn-group>
      </q-toolbar-title>
    </q-toolbar>
  </q-header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Header'
})
</script>

<style>

</style>
