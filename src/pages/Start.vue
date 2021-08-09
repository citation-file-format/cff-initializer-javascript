<template>
  <div class="window-height window-width row justify-center items-center">
    <q-card>
      <q-card-title><h1>Start Page</h1></q-card-title>
      <q-card-main>
        <p
          v-for="n in 10"
          :key="n"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nihil praesentium molestias a adipisci, dolore vitae odit, quidem consequatur optio voluptates asperiores pariatur eos numquam rerum delectus commodi perferendis voluptate?
        </p>
      </q-card-main>

      <q-card-separator />

      <q-card-actions align="right">
        <q-btn
          color="grey-6"
          label="Continue"
          to="/1"
        />
      </q-card-actions>
    </q-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'PageLanding',
    components: { },
    setup () {
        return {}
    }
})
</script>

<style scoped>

</style>
