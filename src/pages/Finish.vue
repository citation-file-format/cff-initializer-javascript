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
      <div class="col-6 q-pa-lg">
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
            <p class="text-h5">
              Now you have a CITATION.cff file and you get the credits you deserve.
            </p>
          </q-card-section>

          <q-card-section>
            <p>Share a reference to your software.</p>
            <div
              class="text-primary q-gutter-md q-mb-xl"
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
          </q-card-section>

          <q-card-actions
            align="center"
            class="q-gutter-md"
          >
            <q-btn
              no-caps
              color="primary"
              icon="chevron_left"
              label="Back to form"
              class="q-mr-xl"
              v-on:click="$router.go(-1)"
            />
            <q-btn
              no-caps
              color="primary"
              icon="edit"
              label="Create another"
              class="q-ml-xl"
              to="/1"
            />
          </q-card-actions>
        </q-card>
      </div>

      <div class="col-6 q-pa-lg">
        <q-card
          flat
          class="secondary cff-card"
        >
          <q-card-section>
            <Preview />
          </q-card-section>

          <q-card-actions
            align="center"
            class="q-gutter-md q-mt-xl"
          >
            <q-btn
              no-caps
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
import Preview from 'components/Preview.vue'

export default defineComponent({
    name: 'PageFinish',
    components: {
        Preview
    },
    setup () {
        return {}
    }
})
</script>

<style scoped>

.download-button {
    margin-top: 150px;
}

.cff-card {
    margin-top: 100px;
}

</style>
