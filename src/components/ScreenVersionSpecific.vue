<template>
    <div id="form-title">
        <h1 class="page-title">
            Version specific
        </h1>
    </div>

    <div id="form-content">
        <h2 class="question">
            What is the commit identifier of the work?
            <q-icon
                name="ion-information-circle-outline"
                size="24px"
                color="primary"
                v-on:click="showCommitHelp = true"
                style="cursor:pointer;"
            />
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
            <q-icon
                name="ion-information-circle-outline"
                size="24px"
                color="primary"
                v-on:click="showVersionHelp = true"
                style="cursor:pointer;"
            />
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
            <q-icon
                name="ion-information-circle-outline"
                size="24px"
                color="primary"
                v-on:click="showDateReleasedHelp = true"
                style="cursor:pointer;"
            />
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
        <InfoDialog
            v-model="showCommitHelp"
            v-bind:data="helpData.commit"
        />
        <InfoDialog
            v-model="showVersionHelp"
            v-bind:data="helpData.version"
        />
        <InfoDialog
            v-model="showDateReleasedHelp"
            v-bind:data="helpData.dateReleased"
        />
    </div>
</template>

<script lang="ts">
import { byError, dateReleasedQueries } from 'src/error-filtering'
import { computed, defineComponent, onUpdated, ref } from 'vue'
import InfoDialog from 'components/InfoDialog.vue'
import { useCff } from 'src/store/cff'
import { useStepperErrors } from 'src/store/stepper-errors'
import { useValidation } from 'src/store/validation'

export default defineComponent({
    name: 'ScreenVersionSpecific',
    components: {
        InfoDialog
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
        const helpData = {
            commit: {
                title: 'commit',
                url: 'https://github.com/citation-file-format/citation-file-format/blob/1.2.0/schema-guide.md#commit',
                description: 'The commit hash or revision number of the software version.',
                examples: [
                    '1ff847d81f29c45a3a1a5ce73d38e45c2f319bba',
                    'Revision: 8612'
                ]
            },
            version: {
                title: 'version',
                url: 'https://github.com/citation-file-format/citation-file-format/blob/1.2.0/schema-guide.md#version',
                description: 'The version of the software or dataset.',
                examples: [
                    '1.2.0',
                    '1.2',
                    '21.10 (Impish Indri)'
                ]
            },
            dateReleased: {
                title: 'date-released',
                url: 'https://github.com/citation-file-format/citation-file-format/blob/1.2.0/schema-guide.md#date-released',
                description: 'The date the work has been released.'
            }
        }
        return {
            commit,
            dateReleased,
            dateReleasedErrors,
            helpData,
            initializeDate,
            version,
            setCommit,
            setDateReleased,
            setVersion,
            showCommitHelp: ref(false),
            showVersionHelp: ref(false),
            showDateReleasedHelp: ref(false)
        }
    }
})
</script>

<style scoped>
</style>
