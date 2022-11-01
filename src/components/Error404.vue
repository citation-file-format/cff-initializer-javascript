<template>
    <div class="fullscreen bg-blue text-white text-center q-pa-md flex flex-center">
        <div>
            <h1>
                404
            </h1>
            <h2

                style="opacity:.4"
            >
                Oops. Nothing here...
            </h2>

            <q-btn
                class="q-mt-xl"
                color="white"
                label="Go Home"
                no-caps
                text-color="blue"
                to="/"
                unelevated
            />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'Error404'
})
</script>
