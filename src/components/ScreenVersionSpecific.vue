<template>
    <h1 id="form-title">
        Version specific
    </h1>

    <h2 class="question">
        What is the commit identifier of the work?
        <InfoDialog name="commit" />
    </h2>
    <q-input
        bg-color="white"
        data-cy="input-commit"
        label="commit"
        outlined
        standout
        v-bind:model-value="commit"
        v-on:update:modelValue="setCommit"
    />

    <h2 class="question">
        What is the version of the work?
        <InfoDialog name="version" />
    </h2>
    <q-input
        bg-color="white"
        data-cy="input-version"
        label="version"
        outlined
        standout
        v-bind:model-value="version"
        v-on:update:modelValue="setVersion"
    />

    <h2 class="question">
        When was the version released?
        <InfoDialog name="dateReleased" />
    </h2>
    <q-input
        bg-color="white"
        hint="Format: YYYY-MM-DD"
        data-cy="input-date-released"
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
</template>

<script lang="ts">
import { byError, dateReleasedQueries } from 'src/error-filtering'
import { computed, defineComponent } from 'vue'
import InfoDialog from 'components/InfoDialog.vue'
import { useCff } from 'src/store/cff'
import { useValidation } from 'src/store/validation'

export default defineComponent({
    name: 'ScreenVersionSpecific',
    components: {
        InfoDialog
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
