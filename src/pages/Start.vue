<template>
  <div class="">
    <div class="row">
      <div class="col-6 q-pa-lg ">
        <q-card
          bordered
          class="secondary"
        >
          <q-skeleton
            height="500px"
            square
          />

          <q-card-section>
            <q-skeleton
              type="text"
              class="text-subtitle1"
            />
            <q-skeleton
              type="text"
              width="50%"
              class="text-subtitle1"
            />
            <q-skeleton
              type="text"
              class="text-caption"
            />
          </q-card-section>
        </q-card>
      </div>
      <div class="col-6  q-pa-lg">
        <q-card
          bordered
          class="secondary"
          style="transform:rotate(20deg) translateX(150px) translateY(60px)"
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
            height="350px"
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
    name: 'PageLanding',
    components: { },
    setup () {
        return {}
    }
})
</script>

<style scoped>

</style>
