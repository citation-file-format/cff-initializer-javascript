<template>
  <div class="q-pa-md">

    <q-stepper
      :modelValue="step.step"
      v-on:update:modelValue="updateStep"
      ref="stepper"
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
        :name="1"
        :done="step.step.value > 1"
      />
        <!-- v-on:click="updateStep" -->
      <q-step
        title="Authors"
        icon="done_all"
        :name="2"
        :done="step.step.value > 2"
      />

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

<script lang="ts">

import { useRouter } from 'vue-router'
import { useStep } from '../store/step'

export default {
  setup () {
    const step = useStep()
    const router = useRouter()

    const updateStep = (newStep: number) => {
      step.goto(newStep)
      const targetRoute = `/${step.step.value}`
      return router.push({ path: targetRoute })
    }

    return {
      step,
      updateStep
    }
  }
}
</script>

<style scoped>

.q-stepper {
  background-color: rgb(185, 180, 180);
}

</style>
