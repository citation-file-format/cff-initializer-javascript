<template>
  <div class="q-pa-md">

      <!-- :modelValue="step.step"
      @update:modelValue="step.goto" -->

    <q-stepper
      v-model="store.state.progress"
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
        :done="store.state.progress > 1"
        v-on:click="showStep"
      />

      <q-step
        title="Authors"
        icon="done_all"
        :name="2"
        :done="store.state.progress > 2"
        v-on:click="showStep"
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
    Store-progress: {{ store.state.progress }}
  </div>
</template>

<script>

import { inject } from 'vue'
import { useRouter } from 'vue-router'

export default {
  setup () {
    const store = inject('store')

    const showStep = () => {
      console.log(store.state.progress)
    }

    return {
      store,
      showStep
    }
  }
}
</script>
