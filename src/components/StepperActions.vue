<template>
    <q-btn
        label="Previous"
        no-caps
        v-bind:class="cannotGoBack ? 'hidden' : ''"
        v-bind:color="boldPrevious ? 'primary' : ''"
        v-bind:flat="!boldPrevious"
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
            v-bind:class="!showAdvanced ? 'hidden' : ''"
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
