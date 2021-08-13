<template>
    <div class="q-pa-md">
        <q-stepper
            active-icon=""
            animated
            class="bg-secondary text-primary"
            flat
            header-nav
            inactive-icon="star"
            ref="stepper"
            v-bind:model-value="step.step"
            v-on:update:modelValue="updateStep"
            vertical
        >
            <q-step
                color="primary"
                icon="star"
                title="Start"
                v-bind:done="step.step.value > 1"
                v-bind:name="1"
            />

            <q-step
                color="primary"
                icon="star"
                title="Authors"
                v-bind:done="step.step.value > 2"
                v-bind:name="2"
            />

            <q-step
                color="primary"
                icon="star"
                title="Identifiers"
                v-bind:done="step.step.value > 3"
                v-bind:name="3"
            />

            <q-step
                color="primary"
                icon="star"
                title="Related resources"
                v-bind:done="step.step.value > 4"
                v-bind:name="4"
            />

            <q-step
                color="primary"
                icon="star"
                title="Abstract"
                v-bind:done="step.step.value > 5"
                v-bind:name="5"
            />

            <q-step
                color="primary"
                icon="star"
                title="Keywords"
                v-bind:done="step.step.value > 6"
                v-bind:name="6"
            />
            <!-- 7 license -->
            <q-step
                color="primary"
                icon="star"
                title="Version specific"
                v-bind:done="step.step.value > 8"
                v-bind:name="8"
            />

            <q-step
                color="primary"
                disable
                icon="expand_more"
                title="Finish"
                v-bind:name="100"
            >
                This step won't show up because it is disabled.
            </q-step>
        </q-stepper>
    </div>
</template>

<script lang="ts">

import { useRouter } from 'vue-router'
import { useStep } from '../store/step'

export default {
    setup () {
        const step = useStep()
        const router = useRouter()

        const updateStep = (newStep: number) => {
            step.goto(newStep)
            const targetRoute = `/${step.step.value}`
            return router.push({ path: targetRoute })
        }

        return {
            step,
            updateStep
        }
    }
}
</script>

<style scoped>

</style>
