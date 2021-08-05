<template>
  <q-layout view="hhh lpr fff">
    <Header />
    <q-page-container>
      <q-page>
        <div class="row">
            <div class="col-2">
              <Stepper />
            </div>
            <div class="col-6">
              <router-view />
            </div>
            <div class="col-4">
              <Preview />
            </div>
        </div>
      </q-page>
    </q-page-container>
    <Footer />
  </q-layout>
</template>

<script lang="ts">
import Header from 'components/Header.vue'
import Footer from 'components/Footer.vue'
import Stepper from 'components/Stepper.vue'
import Preview from 'components/Preview.vue'

import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MainLayout',

  components: {
    Header,
    Footer,
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

.col-2 {
  background-color: rgb(185, 180, 180);
}

.col-6 {
  background-color: rgb(185, 180, 180);
}

</style>
