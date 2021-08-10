<template>
  <div class="row action-buttons">
    <div class="col">
      <q-btn
        no-caps
        flat
        v-on:click="navigatePrevious"
        color=""
        label="Back"
      />
    </div>
    <div
      class="col q-mr-lg"
      align="right"
    >
      <q-btn-group flat>
        <q-btn
          no-caps
          flat
          color=""
          label="Finish"
          to="/finish"
        />
        <q-btn
          no-caps
          v-on:click="navigateNext"
          color="grey-6"
          label="Next"
        />
      </q-btn-group>
    </div>
  </div>
</template>

<script lang="ts">
import { useRouter } from 'vue-router'
import { useStep } from '../store/step'

import { defineComponent } from 'vue'

export default defineComponent({
    name: 'StepperActions',

    setup () {
        const step = useStep()
        const router = useRouter()

        const navigateNext = () => {
            step.next()
            const targetRoute = `/${step.step.value}`
            return router.push({ path: targetRoute })
        }

        const navigatePrevious = () => {
            step.previous()
            const targetRoute = `/${step.step.value}`
            return router.push({ path: targetRoute })
        }

        const navigateTo = (newStep: number) => {
            step.goto(newStep)
            const targetRoute = `/${step.step.value}`
            return router.push({ path: targetRoute })
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

<style>
.action-buttons {
  margin-top: 100px;
  padding-bottom: 20px;;
}

</style>
