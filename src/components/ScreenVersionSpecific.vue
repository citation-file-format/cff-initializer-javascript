<template>
    <Stepper />
    <div
        id="form"
        class="col-12 col-md-6 col-sm-7"
    >
        <div id="form-title">
            <h1 class="page-title">
                Version specific
            </h1>
        </div>

        <div id="form-content">
            <h2 class="question">
                What is the commit identifier of the work?
                <SchemaGuideLink anchor="#commit" />
            </h2>
            <q-input
                bg-color="white"
                label="commit"
                outlined
                standout
                v-bind:model-value="commit"
                v-on:update:modelValue="setCommit"
            />

            <h2 class="question">
                What is the version of the work?
                <SchemaGuideLink anchor="#version" />
            </h2>
            <q-input
                bg-color="white"
                label="version"
                outlined
                standout
                v-bind:model-value="version"
                v-on:update:modelValue="setVersion"
            />

            <h2 class="question">
                When was the version released?
                <SchemaGuideLink anchor="#date-released" />
            </h2>
            <q-input
                bg-color="white"
                hint="Format: YYYY-MM-DD"
                label="date-released"
                mask="####-##-##"
                outlined
                standout
                style="width: 33.33%"
                today-btn="true"
                v-bind:class="dateReleasedErrors.length > 0 ? 'has-error' : ''"
                v-bind:model-value="dateReleased"
                v-bind:error="dateReleasedErrors.length > 0"
                v-bind:error-message="dateReleasedErrors.join(', ')"
                v-on:update:modelValue="setDateReleased"
            >
                <template v-slot:append>
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
import { byError, dateReleasedQueries } from 'src/error-filtering'
import { computed, defineComponent, onUpdated } from 'vue'
import SchemaGuideLink from 'components/SchemaGuideLink.vue'
import Stepper from 'components/Stepper.vue'
import StepperActions from 'components/StepperActions.vue'
import { useCff } from 'src/store/cff'
import { useStepperErrors } from 'src/store/stepper-errors'
import { useValidation } from 'src/store/validation'

export default defineComponent({
    name: 'ScreenVersionSpecific',
    components: {
        SchemaGuideLink,
        Stepper,
        StepperActions
    },
    setup () {
        onUpdated(() => {
            const { setErrorStateScreenVersionSpecific } = useStepperErrors()
            setErrorStateScreenVersionSpecific(document.getElementsByClassName('has-error').length > 0)
        })
        const initializeDate = () => {
            const today = new Date()
            const y = today.getFullYear()
            const m = ('0' + (today.getMonth() + 1).toString()).slice(-2)
            const d = ('0' + today.getDate().toString()).slice(-2)
            return `${y}-${m}-${d}`
        }
        const { commit, dateReleased, version, setCommit, setDateReleased, setVersion } = useCff()
        const { errors } = useValidation()
        const dateReleasedErrors = computed(() => {
            return dateReleasedQueries
                .filter(byError(errors.value))
                .map(query => query.replace.message)
        })
        return {
            commit,
            dateReleased,
            dateReleasedErrors,
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
