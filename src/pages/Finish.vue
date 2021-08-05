<template>
    <div class="window-height window-width row justify-center items-center">
    <q-card>
      <q-card-title><h1>Finish Page</h1></q-card-title>
      <q-card-main>
          <p v-for="n in 10" :key="n">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nihil praesentium molestias a adipisci, dolore vitae odit, quidem consequatur optio voluptates asperiores pariatur eos numquam rerum delectus commodi perferendis voluptate?
          </p>
      </q-card-main>

      <q-card-separator/>

      <q-card-actions align="center">
                  <q-btn-group flat>
            <q-btn
              v-on:click="step = 1"
              color="grey-6"
              label="Create another"
              to="/"
            />
            <q-btn
              v-on:click="step = 1"
              color="grey-6"
              label="Back to form"
              to="/"
            />
          </q-btn-group>
      </q-card-actions>
    </q-card>
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
