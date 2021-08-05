<template>
  <div class="q-pa-md">
    <q-layout view="lHh lpr lFf" class="rounded-borders">
      <q-page-container>
        <q-page padding align="middle">
          <h1>Finish Page</h1>
          <q-btn-group flat>
            <q-btn v-on:click="step = 1" color="grey-6" label="Create another" to="/"/>
            <q-btn v-on:click="step = 1" color="grey-6" label="Back to form" to="/"/>
          </q-btn-group>
          <p v-for="n in 10" :key="n">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nihil praesentium molestias a adipisci, dolore vitae odit, quidem consequatur optio voluptates asperiores pariatur eos numquam rerum delectus commodi perferendis voluptate?
          </p>
        </q-page>
      </q-page-container>
    </q-layout>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PageFinish',
  components: { },
  setup () {
    return {}
  }
})
</script>
