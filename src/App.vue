<template>
  <router-view />
</template>
<script lang="ts">
import { provide } from 'vue'
import store from './store/index'

export default ({
  name: 'App',

  setup () {
    provide('store', store)
  }
})

</script>
