<template>
    <q-btn
        color=""
        flat
        label="Previous"
        no-caps
        v-bind:class="cannotGoBack ? 'hidden' : ''"
        v-on:click="navigatePrevious"
    />
    <span class="spacer" />

    <q-btn-group
        flat
        v-bind:class="cannotGoForward ? 'hidden' : ''"
    >
        <q-btn
            color=""
            flat
            label="Finish"
            no-caps
            v-bind:to="showAdvanced === true ? '/finish-advanced' : '/finish-minimum'"
        />
        <q-btn
            color="primary"
            label="Next"
            no-caps
            v-on:click="navigateNext"
        />
    </q-btn-group>
</template>

<script lang="ts">
import { useApp } from '../store/app'

import { defineComponent } from 'vue'

export default defineComponent({
    name: 'StepperActions',

    setup () {
        const { showAdvanced, cannotGoBack, cannotGoForward, navigateNext, navigatePrevious } = useApp()
        return {
            cannotGoBack,
            cannotGoForward,
            showAdvanced,
            navigateNext,
            navigatePrevious
        }
    }

})
</script>

<style scoped>
.spacer {
    flex-grow: 1;
}
.hidden {
    display: none;
}
</style>
