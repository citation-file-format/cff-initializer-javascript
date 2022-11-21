<template>
    <h1
        id="form-title"
        tabindex="-1"
    >
        Version specific
    </h1>

    <div class="q-gutter-md">
        <q-input
            aria-label="Commit identifier. Press tab to reach help button."
            data-cy="input-commit"
            label="Commit identifier"
            outlined
            standout
            v-bind:model-value="commit"
            v-on:update:modelValue="setCommit"
        >
            <template v-slot:after>
                <InfoDialog name="commit" />
            </template>
        </q-input>

        <q-input
            aria-label="Version. Press tab to reach help button."
            data-cy="input-version"
            label="Version"
            outlined
            standout
            v-bind:model-value="version"
            v-on:update:modelValue="setVersion"
        >
            <template v-slot:after>
                <InfoDialog name="version" />
            </template>
        </q-input>

        <q-input
            aria-label="Release date. Press tab to reach help button."
            hint="Format: YYYY-MM-DD"
            data-cy="input-date-released"
            label="Release date"
            mask="####-##-##"
            outlined
            standout
            today-btn="true"
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
                            v-bind:model-value="dateReleased ? dateReleased : initializeDate()"
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
            <template v-slot:after>
                <InfoDialog name="dateReleased" />
            </template>
        </q-input>
    </div>
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
