<template>
    <div class="q-pa-md">
        <q-stepper
            active-icon=""
            animated
            class="bg-secondary text-primary"
            flat
            header-nav
            inactive-icon=""
            v-bind:model-value="step"
            v-on:update:modelValue="updateStep"
            vertical
        >
            <q-step
                color="primary"
                icon=""
                title="Start"
                v-bind:name="1"
            />

            <q-step
                color="primary"
                icon=""
                title="Authors"
                v-bind:name="2"
            />

            <q-step
                color="primary"
                icon=""
                title="Identifiers"
                v-bind:name="3"
            />

            <q-step
                color="primary"
                icon=""
                title="Related resources"
                v-bind:name="4"
            />

            <q-step
                color="primary"
                icon=""
                title="Abstract"
                v-bind:name="5"
            />

            <q-step
                color="primary"
                icon=""
                title="Keywords"
                v-bind:name="6"
            />

            <q-step
                color="primary"
                icon=""
                title="License"
                v-bind:name="7"
            />

            <q-step
                color="primary"
                icon=""
                title="Version specific"
                v-bind:name="8"
            />

            <q-step
                color="primary"
                disable
                icon=""
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
import { useApp } from '../store/app'

export default {
    setup () {
        const { step, setStep } = useApp()
        const router = useRouter()

        const updateStep = (newStep: number) => {
            setStep(newStep)
            const targetRoute = `/${step.value}`
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
