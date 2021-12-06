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
                <SchemaInfoIcon section="commit" />
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
                <SchemaInfoIcon section="version" />
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
                <SchemaInfoIcon section="date-released" />
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
                v-bind:error="dateError.hasError"
                v-bind:error-message="dateError.messages.join(', ')"
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
import SchemaInfoIcon from 'components/SchemaInfoIcon.vue'
import Stepper from 'components/Stepper.vue'
import StepperActions from 'components/StepperActions.vue'
import { computed, defineComponent } from 'vue'
import { useCff } from '../store/cff'
import { getMyErrors } from 'src/store/validator'

export default defineComponent({
    name: 'ScreenVersionSpecific',
    components: {
        SchemaInfoIcon,
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
            setVersion,
            dateError: computed(() => getMyErrors('/date-released'))
        }
    }
})
</script>

<style scoped>
</style>
