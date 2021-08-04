<template>
  <div class="row">
    <div class="col">
      <q-btn flat @click="navigatePrevious()" color="" label="Back" />
    </div>
    <div class="col" align="right">
      <q-btn-group flat>
        <q-btn flat color="" label="Finish" to="/finish" />
        <q-btn @click="navigateNext()" color="grey-6" label="Next" />
      </q-btn-group>
    </div>
  </div>
</template>

<script lang="ts">
import { useStep } from '../store'
import { useRouter } from 'vue-router'

import { defineComponent } from 'vue'

export default defineComponent({
  name: 'StepperActions',

  setup () {
    const step = useStep()
    const router = useRouter()

    const navigateNext = () => {
      step.next()
      const targetRoute = `${String('/')}${String(step.step.value)}`
      void router.push({ path: targetRoute })
    }

    const navigatePrevious = () => {
      step.previous()
      const targetRoute = `${String('/')}${String(step.step.value)}`
      void router.push({ path: targetRoute })
    }

    const navigateTo = () => {
      console.log(step.step.value)
    }

    return {
      step,
      navigateNext,
      navigatePrevious,
      navigateTo
    }
  }

})
</script>

<style></style>
