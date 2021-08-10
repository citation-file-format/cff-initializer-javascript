<template>
  <div class="">
    <div
      align="center"
      class="q-gutter-md"
    >
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
    </div>

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
            class="text-primary q-gutter-md q-mb-xl"
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

          <div
            class="text-primary q-gutter-md q-mb-xl"
            align="left"
            style="font-size: 2em"
          >
            <q-skeleton
              type="text"
              width="50%"
              class="text-subtitle1"
            />
            <q-skeleton
              type="text"
              width="50%"
              class="text-subtitle1"
            />
          </div>

          <q-card-actions
            align="center"
            class="q-gutter-md"
          >
            <q-btn
              color="primary"
              icon="chevron_left"
              label="Back to form"
              class="q-mr-xl"
            />
            <q-btn
              color="primary"
              icon="edit"
              label="Create another"
              class="q-ml-xl"
            />
          </q-card-actions>
        </q-card>
      </div>

      <div class="col-6  q-pa-lg">
        <q-card
          flat
          class="secondary q-mt-xl q-pt-xl"
        >
          <q-item>
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
            height="210px"
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
            <q-skeleton
              type="text"
              class="text-caption"
            />
          </q-card-section>

          <q-card-actions
            align="center"
            class="q-gutter-md q-mt-xl q-mb-2xl"
          >
            <q-btn
              color="primary"
              icon="download"
              label="Download"
              class="download-button"
            />
          </q-card-actions>
        </q-card>
      </div>
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

.download-button {
    margin-top: 150px;
}

</style>
