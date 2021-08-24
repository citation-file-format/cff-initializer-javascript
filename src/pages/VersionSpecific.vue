<template>
    <div class="q-pa-md col-flex">
        <div
            class="q-gutter-md title-field text-dark"
        >
            <p class="q-mt-xl page-title">
                Version specific
            </p>

            <p class="question">
                What is the commit identifier of the work?
            </p>
            <q-input
                bg-color="white"
                label="commit"
                outlined
                standout
                v-bind:model-value="commit"
                v-bind:error="errors.commit?.length > 0"
                v-bind:error-message="errors.commit ? errors.commit.join(', ') : ''"
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
                v-bind:error="errors.version?.length > 0"
                v-bind:error-message="errors.version ? errors.version.join(', ') : ''"
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
                v-bind:error="errors['date-released']?.length > 0"
                v-bind:error-message="errors['date-released'] ? errors['date-released'].join(', ') : ''"
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
    </div>
    <StepperActions />
</template>

<script lang="ts">
import StepperActions from 'components/StepperActions.vue'
import { useFileValidator } from '../store/validator'
import { defineComponent } from 'vue'
import { useCff } from '../store/cff'

export default defineComponent({
    name: 'VersionSpecific',
    components: {
        StepperActions
    },
    setup () {
        const { groupedErrors } = useFileValidator()
        const { commit, dateReleased, version, setCommit, setDateReleased, setVersion } = useCff()
        return {
            commit,
            dateReleased,
            version,
            setCommit,
            setDateReleased,
            setVersion,
            errors: groupedErrors
        }
    }
})
</script>

<style scoped>

.col-flex {
    flex: 1;
}
.title-field {
    margin-right: 120px;
    max-width: 700px;
    min-width: 300px;
}

</style>
