<template>
  <div class="q-pa-md">

    <q-stepper
      v-model="step"
      vertical
      active-color="grey-6"
      inactive-color="grey-6"
      done-color="grey-6"
      animated
      header-nav
      flat
      active-icon=""
      inactive-icon="star"
    >
      <q-step
        :name="0"
        title="Start"
        icon="star"
        :done="step > 0"
      >
        <q-stepper-navigation>
          <q-btn @click="step = 1" color="grey-6" label="Continue" to="/screen2"/>
        </q-stepper-navigation>
      </q-step>

      <q-step
        :name="2"
        title="Authors"
        caption=""
        icon="done_all"
        :done="step > 2"
      >
        <q-stepper-navigation>
          <q-btn @click="step = 2" color="grey-6" label="Continue" to="/finish" />
          <q-btn flat @click="step = 1" color="grey-6" label="Back" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>

      <q-step
        :name="100"
        title="Finish"
        icon="expand_more"
        disable
      >
        This step won't show up because it is disabled.
      </q-step>
    </q-stepper>

    Step: {{ step }}

  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      step: ref(0)
    }
  }
}
</script>
