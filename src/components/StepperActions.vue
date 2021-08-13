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
import { useStep } from '../store/step'

import { defineComponent } from 'vue'

export default defineComponent({
    name: 'StepperActions',

    setup () {
        const step = useStep()
        const router = useRouter()

        const navigateNext = () => {
            step.next()
            const targetRoute = `/${step.step.value}`
            return router.push({ path: targetRoute })
        }

        const navigatePrevious = () => {
            step.previous()
            const targetRoute = `/${step.step.value}`
            return router.push({ path: targetRoute })
        }

        const navigateTo = (newStep: number) => {
            step.goto(newStep)
            const targetRoute = `/${step.step.value}`
            return router.push({ path: targetRoute })
        }

        return {
            step,
            navigateNext,
            navigatePrevious,
            navigateTo
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
