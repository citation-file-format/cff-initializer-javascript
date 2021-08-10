<template>
  <div class="">
    <div class="row">
      <div class="col-6 q-pa-lg">
        <q-card
          flat
          class="secondary q-mt-xl"
        >
          <div
            class="text-primary q-gutter-md q-mb-xl"
            align="left"
            style="font-size: 2em"
          >
            <q-skeleton
              type="text"
              width="100%"
              class="text-h1"
            />
            <q-skeleton
              type="text"
              width="50%"
              class="text-h1"
            />
            <q-skeleton
              type="text"
              width="50%"
              class="text-h1"
            />
            <q-skeleton
              type="text"
              width="50%"
              class="text-h1"
            />
          </div>

          <div
            class="text-primary q-gutter-md"
            style="font-size: 2em"
          >
            <q-icon
              name="star"
              size="xl"
            />
            <q-icon
              name="star"
              size="xl"
            />
            <q-icon
              name="star"
              size="xl"
            />
          </div>
        </q-card>
      </div>
      <div class="col-6  q-pa-lg">
        <q-card
          bordered
          class="secondary rotated-card"
          style="overflow: hidden"
        >
          <q-item>
            <q-item-section avatar>
              <q-skeleton
                type="QAvatar"
                animation="fade"
              />
            </q-item-section>

            <q-item-section>
              <q-item-label>
                <q-skeleton
                  type="text"
                  animation="fade"
                />
              </q-item-label>
              <q-item-label caption>
                <q-skeleton
                  type="text"
                  animation="fade"
                />
              </q-item-label>
            </q-item-section>
          </q-item>

          <q-skeleton
            height="400px"
            square
            animation="fade"
          />

          <q-card-section>
            <q-skeleton
              type="text"
              class="text-subtitle2"
              animation="fade"
            />
            <q-skeleton
              type="text"
              width="50%"
              class="text-subtitle2"
              animation="fade"
            />
          </q-card-section>
        </q-card>
      </div>
    </div>

    <div
      class="row justify-center items-center q-pt-xl"
    >
      <q-btn
        no-caps
        size="xl"
        color="primary"
        label="Get started"
        to="/1"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'PageStart',
    components: { },
    setup () {
        return {}
    }
})
</script>

<style scoped>

.rotated-card {
    transform: rotate(20deg) translateX(150px) translateY(65px);
    display: block;
}

</style>
