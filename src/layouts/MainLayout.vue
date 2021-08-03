<template>
  <q-layout view="hhh lpr fff">

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

    <q-page-container>
      <q-page>
        <div class="row">
            <div class="col-2">
              <Stepper />
            </div>
            <div class="col-6">
              <q-page-container >
                <router-view />
              </q-page-container>
            </div>
            <div class="col-4">
              <Preview />
            </div>
        </div>
      </q-page>
    </q-page-container>

    <q-footer class="bg-grey-4 text-white">
      <q-toolbar>
        <q-toolbar-title>
            <img src="~/assets/nlesc-logo.svg">
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<script lang="ts">
import Stepper from 'src/components/Stepper.vue'
import Preview from 'src/components/Preview.vue'

import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MainLayout',

  components: {
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
  border-style: solid;
}

.col-6 {
  border-style: solid;
}

.col-4 {
  border-style: solid;
}

</style>
