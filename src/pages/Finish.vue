<template>
  <div class="">
    <div class="row">
      <div class="col-6 q-pa-lg ">
        <q-card
          flat
          class="secondary"
        >
          <q-card-section>
            <div class="text-h3">
              <q-icon
                class="text-h1"
                name="check"
              />
              Congratulations
            </div>
            <!-- <div class="text-subtitle2">by John Doe</div> -->
          </q-card-section>

          <q-item>
            <q-item-section avatar>
              <q-skeleton type="QAvatar" />
            </q-item-section>

            <q-item-section>
              <q-item-label>
                <q-skeleton type="text" />
              </q-item-label>
              <q-item-label caption>
                <q-skeleton type="text" />
              </q-item-label>
            </q-item-section>
          </q-item>

          <q-skeleton
            height="200px"
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

          <div
            class="text-primary q-gutter-md"
            align="center"
            style="font-size: 2em"
          >
            <q-icon
              name="ion-logo-twitter"
              size="xl"
            />
            <q-icon
              name="ion-logo-linkedin"
              size="xl"
            />
            <q-icon
              name="ion-logo-reddit"
              size="xl"
            />
          </div>

          <q-card-actions
            align="center"
            class="q-gutter-md"
          >
            <q-skeleton type="QBtn" />
            <q-skeleton type="QBtn" />
          </q-card-actions>
        </q-card>
      </div>

      <div class="col-6  q-pa-lg">
        <q-card
          flat
          class="secondary q-mt-xl q-pt-xl"
        >
          <q-item>
            <q-item-section avatar>
              <q-skeleton type="QAvatar" />
            </q-item-section>

            <q-item-section>
              <q-item-label>
                <q-skeleton type="text" />
              </q-item-label>
              <q-item-label caption>
                <q-skeleton type="text" />
              </q-item-label>
            </q-item-section>
          </q-item>

          <q-skeleton
            height="200px"
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

          <q-card-actions
            vertical
            align="center"
            class="q-gutter-md"
            size="xl"
          >
            <q-skeleton type="QBtn" />
          </q-card-actions>
        </q-card>
      </div>
    </div>

    <div
      class="row justify-center items-center q-pt-xl"
    >
      <q-btn
        size="xl"
        color="primary"
        label="Finish"
        to="/1"
      />
    </div>
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

<style scoped>

</style>
