<template>
    <div class="row action-buttons">
        <div class="col">
            <q-btn
                color=""
                flat
                label="Back"
                no-caps
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
                    to="/finish"
                />
                <q-btn
                    color="grey-6"
                    label="Next"
                    no-caps
                    v-on:click="navigateNext"
                />
            </q-btn-group>
        </div>
    </div>
</template>

<script lang="ts">
import { useRouter } from 'vue-router'
import { useAppState } from '../store/app-state'

import { defineComponent } from 'vue'

export default defineComponent({
    name: 'StepperActions',

    setup () {
        const { step, incrementStep, decrementStep } = useAppState()
        const router = useRouter()

        const navigateNext = () => {
            incrementStep()
            const targetRoute = `/${step.value}`
            return router.push({ path: targetRoute })
        }

        const navigatePrevious = () => {
            decrementStep()
            const targetRoute = `/${step.value}`
            return router.push({ path: targetRoute })
        }

        return {
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
