<template>
    <div class="q-pa-md">
        <q-stepper
            v-bind:model-value="step.step"
            v-on:update:modelValue="updateStep"
            ref="stepper"
            vertical
            animated
            header-nav
            flat
            active-icon=""
            inactive-icon="star"
            class="bg-secondary text-primary"
        >
            <q-step
                title="Start"
                color="primary"
                icon="star"
                v-bind:name="1"
                v-bind:done="step.step.value > 1"
            />

            <q-step
                title="Authors"
                color="primary"
                icon="star"
                v-bind:name="2"
                v-bind:done="step.step.value > 2"
            />

            <q-step
                title="Identifiers"
                color="primary"
                icon="star"
                v-bind:name="3"
                v-bind:done="step.step.value > 3"
            />

            <q-step
                title="Related resources"
                color="primary"
                icon="star"
                v-bind:name="4"
                v-bind:done="step.step.value > 4"
            />

            <q-step
                title="Abstract"
                color="primary"
                icon="star"
                v-bind:name="5"
                v-bind:done="step.step.value > 5"
            />

            <q-step
                title="Keywords"
                color="primary"
                icon="star"
                v-bind:name="6"
                v-bind:done="step.step.value > 6"
            />
            <!-- 7 license -->
            <q-step
                title="Version specific"
                color="primary"
                icon="star"
                v-bind:name="8"
                v-bind:done="step.step.value > 8"
            />

            <q-step
                v-bind:name="100"
                title="Finish"
                color="primary"
                icon="expand_more"
                disable
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
