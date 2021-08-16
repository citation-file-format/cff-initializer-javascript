<template>
    <div class="">
        <div class="row">
            <div class="col-6 q-pa-lg">
                <q-card
                    class="secondary q-mt-xl"
                    flat
                >
                    <div
                        align="left"
                        class="text-primary q-gutter-md q-mb-xl"
                        style="font-size: 2em"
                    >
                        <q-skeleton
                            class="text-h1"
                            type="text"
                            width="100%"
                        />
                        <q-skeleton
                            class="text-h1"
                            type="text"
                            width="50%"
                        />
                        <q-skeleton
                            class="text-h1"
                            type="text"
                            width="50%"
                        />
                        <q-skeleton
                            class="text-h1"
                            type="text"
                            width="50%"
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
                                animation="fade"
                                type="QAvatar"
                            />
                        </q-item-section>

                        <q-item-section>
                            <q-item-label>
                                <q-skeleton
                                    animation="fade"
                                    type="text"
                                />
                            </q-item-label>
                            <q-item-label caption>
                                <q-skeleton
                                    animation="fade"
                                    type="text"
                                />
                            </q-item-label>
                        </q-item-section>
                    </q-item>

                    <q-skeleton
                        animation="fade"
                        height="400px"
                        square
                    />

                    <q-card-section>
                        <q-skeleton
                            animation="fade"
                            class="text-subtitle2"
                            type="text"
                        />
                        <q-skeleton
                            animation="fade"
                            class="text-subtitle2"
                            type="text"
                            width="50%"
                        />
                    </q-card-section>
                </q-card>
            </div>
        </div>

        <div
            class="row justify-center items-center q-pt-xl"
        >
            <q-btn
                color="primary"
                label="Get started"
                no-caps
                size="xl"
                to="/1"
            />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'Landing',
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
