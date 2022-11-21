<template>
    <q-toolbar>
        <q-btn
            aria-label="Previous page"
            class="rounded-borders"
            color="primary"
            data-cy="btn-previous"
            label="Previous"
            no-caps
            v-bind:class="cannotGoBack ? 'hidden' : ''"
            v-bind:flat="!cannotGoForward"
            v-on:click="navigatePrevious"
        />
        <q-space />
        <q-btn
            aria-label="Jump to finish"
            class="rounded-borders"
            color="primary"
            data-cy="btn-finish"
            flat
            label="Finish"
            no-caps
            to="/finish"
            v-bind:class="!showAdvanced || cannotGoForward ? 'hidden' : ''"
            v-on:click="setStepName('finish')"
        />
        <q-btn
            aria-label="Next page"
            class="rounded-borders"
            color="primary"
            data-cy="btn-next"
            label="Next"
            no-caps
            unelevated
            v-bind:class="cannotGoForward ? 'hidden' : ''"
            v-on:click="navigateNext"
        />
    </q-toolbar>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useApp } from 'src/store/app'

export default defineComponent({
    name: 'StepperActions',

    setup () {
        const { cannotGoBack, cannotGoForward, navigateNext, navigatePrevious, setStepName, showAdvanced } = useApp()

        return {
            cannotGoBack,
            cannotGoForward,
            navigateNext,
            navigatePrevious,
            setStepName,
            showAdvanced
        }
    }

})
</script>
