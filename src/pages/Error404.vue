<template>
    <div class="fullscreen bg-blue text-white text-center q-pa-md flex flex-center">
        <div>
            <div style="font-size: 30vh">
                404
            </div>
            <div
                class="text-h2"
                style="opacity:.4"
            >
                Oops. Nothing here...
            </div>

            <q-btn
                no-caps
                class="q-mt-xl"
                color="white"
                text-color="blue"
                unelevated
                to="/"
                label="Go Home"
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
