<template>
  <div class="window-height window-width row justify-center items-center">
    <q-card
      dark
      bordered
      class="bg-grey-9 my-card"
    >
      <q-card-section>
        <div class="text-h6">
          Start Page
        </div>
        <div class="text-subtitle2">
          by John Doe
        </div>
      </q-card-section>

      <q-separator
        dark
        inset
      />

      <q-card-section>
        <p
          v-for="n in 5"
          :key="n"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nihil praesentium molestias a adipisci, dolore vitae odit, quidem consequatur optio voluptates asperiores pariatur eos numquam rerum delectus commodi perferendis voluptate?
        </p>
        <q-btn
          color="grey-6"
          label="Get started"
          to="/1"
        />
      </q-card-section>
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
