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
            v-bind:class="cannotGoForward ? 'hidden' : ''"
            v-bind:disabled="errors.length > 0"
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
            v-bind:disabled="hasScreenError"
            v-on:click="navigateNext"
        />
    </q-toolbar>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { errorPerStep } from 'src/store/stepper-errors'
import { useApp } from 'src/store/app'
import { useValidation } from 'src/store/validation'

export default defineComponent({
    name: 'StepperActions',

    setup () {
        const { cannotGoBack, cannotGoForward, navigateNext, navigatePrevious, setStepName, stepName } = useApp()
        const { errors } = useValidation()

        return {
            cannotGoBack,
            cannotGoForward,
            errors,
            hasScreenError: computed(() => { return errorPerStep[stepName.value].value }),
            navigateNext,
            navigatePrevious,
            setStepName
        }
    }

})
</script>
