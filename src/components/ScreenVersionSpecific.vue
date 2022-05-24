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
                <SchemaGuideLink anchor="#commit" />
            </p>
            <q-input
                bg-color="white"
                label="commit"
                outlined
                standout
                v-bind:model-value="commit"
                v-on:update:modelValue="setCommit"
            />

            <p class="question">
                What is the version of the work?
                <SchemaGuideLink anchor="#version" />
            </p>
            <q-input
                bg-color="white"
                label="version"
                outlined
                standout
                v-bind:model-value="version"
                v-on:update:modelValue="setVersion"
            />

            <p class="question">
                When was the version released?
                <SchemaGuideLink anchor="#date-released" />
            </p>
            <q-input
                bg-color="white"
                hint="Format: YYYY-MM-DD"
                label="date-released"
                mask="####-##-##"
                outlined
                standout
                style="width: 33.33%"
                today-btn="true"
                v-bind:model-value="dateReleased"
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
                                v-bind:model-value="dateReleased === '' ? initializeDate() : dateReleased"
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
import SchemaGuideLink from 'components/SchemaGuideLink.vue'
import Stepper from 'components/Stepper.vue'
import StepperActions from 'components/StepperActions.vue'
import { defineComponent } from 'vue'
import { useCff } from '../store/cff'

export default defineComponent({
    name: 'ScreenVersionSpecific',
    components: {
        SchemaGuideLink,
        Stepper,
        StepperActions
    },
    setup () {
        const initializeDate = () => {
            const today = new Date()
            const y = today.getFullYear()
            const m = ('0' + (today.getMonth() + 1).toString()).slice(-2)
            const d = ('0' + today.getDate().toString()).slice(-2)
            return `${y}-${m}-${d}`
        }
        const { commit, dateReleased, version, setCommit, setDateReleased, setVersion } = useCff()
        return {
            commit,
            dateReleased,
            initializeDate,
            version,
            setCommit,
            setDateReleased,
            setVersion
        }
    }
})
</script>

<style scoped>
</style>
