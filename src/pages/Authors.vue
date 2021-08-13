<template>
    <div>
        <div class="text-h4">
            Authors page
        </div>

        <q-card
            class="secondary q-mt-xl q-pa-lg"
            flat
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
                    class="text-subtitle1"
                    type="text"
                />
                <q-skeleton
                    class="text-subtitle1"
                    type="text"
                    width="50%"
                />
                <q-skeleton
                    class="text-caption"
                    type="text"
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
