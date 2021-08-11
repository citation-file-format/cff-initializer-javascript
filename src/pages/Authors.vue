<template>
    <div>
        <div class="text-h4">
            Authors page
        </div>

        <q-card
            flat
            class="secondary q-mt-xl q-pa-lg"
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
        </q-card>
        <StepperActions />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import StepperActions from 'components/StepperActions.vue'

export default defineComponent({
    name: 'PageAuthors',
    components: {
        StepperActions
    },
    setup () {
        return {}
    }
})
</script>
