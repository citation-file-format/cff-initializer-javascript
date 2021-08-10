<template>
  <q-layout view="hhh lpr fff">
    <q-page-container>
      <Header />
      <Stars />
      <q-page>
        <div class="row window-height">
          <div class="col-2 bg-secondary">
            <Stepper />
          </div>
          <div class="col-6 bg-secondary">
            <router-view />
          </div>
          <div class="col-4">
            <Preview />
          </div>
        </div>
      </q-page>
      <Footer />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import Header from 'components/Header.vue'
import Footer from 'components/Footer.vue'
import Stars from 'components/Stars.vue'
import Stepper from 'components/Stepper.vue'
import Preview from 'components/Preview.vue'

import { defineComponent } from 'vue'

export default defineComponent({
    name: 'MainLayout',

    components: {
        Header,
        Footer,
        Stars,
        Stepper,
        Preview
    },

    setup () {
        return {
        }
    }
})
</script>

<style scoped>

</style>
