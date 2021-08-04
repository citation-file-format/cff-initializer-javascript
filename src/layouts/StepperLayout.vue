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
              Step: {{ step.step.value }}
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
import { useStep } from '../store'

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
    const step = useStep()

    return {
      step
    }
  }
})
</script>

<style scoped>

.col-2 {
  border-style: solid;
}

.col-6 {
  border-style: solid;
}

.col-4 {
  border-style: solid;
}

</style>
