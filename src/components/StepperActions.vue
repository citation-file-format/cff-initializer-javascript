<template>
    <div class="row action-buttons">
        <div class="col">
            <q-btn
                color=""
                flat
                label="Back"
                no-caps
                v-bind:disable="cannotGoBack"
                v-on:click="navigatePrevious"
            />
        </div>
        <div
            class="col q-mr-lg"
            align="right"
        >
            <q-btn-group flat>
                <q-btn
                    color=""
                    flat
                    label="Finish"
                    no-caps
                    v-bind:to="showAdvanced === true ? '/finish-advanced' : '/finish-minimum'"
                />
                <q-btn
                    color="grey-6"
                    label="Next"
                    no-caps
                    v-bind:disable="cannotGoForward"
                    v-on:click="navigateNext"
                />
            </q-btn-group>
        </div>
    </div>
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

<style>
.action-buttons {
    height: 60px;
    padding-bottom: 20px;
}

</style>
