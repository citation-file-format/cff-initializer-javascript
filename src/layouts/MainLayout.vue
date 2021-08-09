<template>
  <q-layout view="hhh lpr fff">
    <Header />
    <q-page-container>
      <q-page>
        <router-view />
      </q-page>
    </q-page-container>
    <Footer />
  </q-layout>
</template>

<script lang="ts">
import Header from 'components/Header.vue'
import Footer from 'components/Footer.vue'

import { defineComponent } from 'vue'

export default defineComponent({
    name: 'MainLayout',

    components: {
        Header,
        Footer
    },

    setup () {
        return {
        }
    }
})
</script>

<style scoped>

</style>
