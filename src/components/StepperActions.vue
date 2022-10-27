<template>
    <q-btn
        aria-label="Previous page"
        data-cy="btn-previous"
        label="Previous"
        no-caps
        v-bind:class="cannotGoBack ? 'hidden' : ''"
        v-bind:color="boldPrevious ? 'primary' : ''"
        v-bind:flat="!boldPrevious"
        v-bind:unelevated="boldPrevious"
        v-on:click="navigatePrevious"
    />
    <span class="spacer" />

    <q-btn-group
        flat
        v-bind:class="cannotGoForward ? 'hidden' : ''"
    >
        <q-btn
            aria-label="Jump to finish"
            color=""
            data-cy="btn-finish"
            flat
            label="Finish"
            no-caps
            v-bind:class="!showAdvanced ? 'hidden' : ''"
            to="/finish"
        />
        <q-btn
            aria-label="Next page"
            color="primary"
            data-cy="btn-next"
            label="Next"
            no-caps
            unelevated
            v-on:click="navigateNext"
        />
    </q-btn-group>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useApp } from 'src/store/app'
import { useValidation } from 'src/store/validation'

export default defineComponent({
    name: 'StepperActions',

    setup () {
        const { showAdvanced, cannotGoBack, cannotGoForward, navigateNext, navigatePrevious } = useApp()
        const { errors } = useValidation()

        return {
            boldPrevious: computed(() => cannotGoForward.value && (errors.value.length > 0)),
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
