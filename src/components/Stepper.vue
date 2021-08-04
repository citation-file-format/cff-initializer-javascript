<template>
  <div class="q-pa-md">

    <q-stepper
      :modelValue="step.step"
      @update:modelValue="step.goto"
      vertical
      animated
      header-nav
      flat
      active-icon=""
      inactive-icon="star"
    >
      <q-step
        title="Start"
        icon="star"
        :name="0"
        :done="step.step > 0"
      >
        <q-stepper-navigation>
          <q-btn @click="step.next()" color="grey-6" label="Continue" to="/screen2"/>
        </q-stepper-navigation>
      </q-step>

      <q-step
        title="Authors"
        icon="done_all"
        :name="1"
        :done="step.step > 1"
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

    Step: {{ step.step.value }}

  </div>
</template>

<script>

import { useStep } from '../store'

export default {
  setup () {
    const step = useStep()

    return {
      step
    }
  }
}
</script>
