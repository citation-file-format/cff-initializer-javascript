<template>
    <div id="metroline">
        <Stepper />
    </div>
    <div id="form">
        <div id="form-title">
            <h1 class="page-title">
                Version specific
            </h1>
        </div>

        <div id="form-content">
            <p class="question">
                What is the commit identifier of the work?
            </p>
            <q-input
                bg-color="white"
                label="commit"
                outlined
                standout
                v-bind:model-value="commit"
                v-bind:rules="[validateCommit]"
                v-on:update:modelValue="setCommit"
            />

            <p class="question">
                What is the version of the work?
            </p>
            <q-input
                bg-color="white"
                label="version"
                outlined
                standout
                v-bind:model-value="version"
                v-bind:rules="[validateVersion]"
                v-on:update:modelValue="setVersion"
            />

            <p class="question">
                When was the version released?
            </p>
            <q-input
                bg-color="white"
                label="date-released"
                outlined
                standout
                today-btn="true"
                v-bind:model-value="dateReleased"
                v-bind:rules="[validateDateReleased]"
                v-on:update:modelValue="setDateReleased"
            >
                <template #append>
                    <q-icon
                        name="event"
                        class="cursor-pointer"
                    >
                        <q-popup-proxy
                            ref="qDateProxy"
                            transition-show="scale"
                            transition-hide="scale"
                        >
                            <q-date
                                v-bind:model-value="dateReleased"
                                v-on:update:modelValue="setDateReleased"
                                mask="YYYY-MM-DD"
                            >
                                <div class="row items-center justify-end">
                                    <q-btn
                                        v-close-popup
                                        label="Close"
                                        color="primary"
                                        flat
                                    />
                                </div>
                            </q-date>
                        </q-popup-proxy>
                    </q-icon>
                </template>
            </q-input>
        </div>

        <div id="form-button-bar">
            <StepperActions />
        </div>
    </div>
</template>

<script lang="ts">
import Stepper from 'components/Stepper.vue'
import StepperActions from 'components/StepperActions.vue'
import { makeOptionalFieldValidator } from '../validator'
import { defineComponent } from 'vue'
import { useCff } from '../store/cff'

export default defineComponent({
    name: 'ScreenVersionSpecific',
    components: {
        Stepper,
        StepperActions
    },
    setup () {
        const { commit, dateReleased, version, setCommit, setDateReleased, setVersion } = useCff()
        return {
            commit,
            dateReleased,
            version,
            setCommit,
            setDateReleased,
            setVersion,
            validateCommit: makeOptionalFieldValidator('/properties/commit'),
            validateDateReleased: makeOptionalFieldValidator('/properties/date-released'),
            validateVersion: makeOptionalFieldValidator('/properties/version')
        }
    }
})
</script>

<style scoped>
</style>