<template>
    <div id="metroline">
        <Stepper />
    </div>

    <div id="form">
        <div id="form-title">
            <h1 class="page-title">
                Start
            </h1>
        </div>

        <div id="form-content">
            <p class="question">
                What is the title of the work?
            </p>
            <q-input
                bg-color="white"
                label="title"
                outlined
                standout
                v-bind:model-value="title"
                v-bind:error="titleError.hasError"
                v-bind:error-message="titleError.messages.join(', ')"
                v-on:update:modelValue="setTitle"
            />
            <p class="question">
                What do you want citers to do with the information provided in your CITATION.cff file?
            </p>
            <q-select
                bg-color="white"
                fill-input
                hide-selected
                label="message"
                outlined
                use-input
                v-bind:options="messageOptions"
                v-bind:model-value="message"
                v-bind:error="messageError.hasError"
                v-bind:error-message="messageError.messages.join(', ')"
                v-on:new-value="setMessage"
                v-on:update:modelValue="setMessage"
            />
            <p class="question">
                What type of work does this CITATION.cff describe?
            </p>
            <q-option-group
                type="radio"
                v-bind:model-value="type"
                v-bind:options="typeOptions"
                v-on:update:modelValue="setType"
            />
        </div>

        <q-banner
            v-if="screenError.hasError"
            class="bg-warning text-negative"
        >
            <div
                v-bind:key="index"
                v-for="(screenMessage, index) in screenError.messages"
            >
                {{ screenMessage }}
            </div>
        </q-banner>

        <div id="form-button-bar">
            <StepperActions />
        </div>
    </div>
</template>

<script lang="ts">
import Stepper from 'components/Stepper.vue'
import StepperActions from 'components/StepperActions.vue'
import { computed, defineComponent } from 'vue'
import { useCff } from '../store/cff'
import { getMyErrors } from 'src/store/validator'

export default defineComponent({
    name: 'ScreenStart',
    components: {
        Stepper,
        StepperActions
    },
    setup () {
        const { message, title, type, setMessage, setTitle, setType } = useCff()
        const messageOptions = [
            'If you use this software, please cite it using the metadata from this file.',
            'Please cite this software using these metadata.',
            'Please cite this software using the metadata from \'preferred-citation\'.',
            'If you use this dataset, please cite it using the metadata from this file.',
            'Please cite this dataset using these metadata.',
            'Please cite this dataset using the metadata from \'preferred-citation\'.'
        ]
        return {
            message,
            messageOptions,
            title,
            type,
            typeOptions: [
                { label: 'Software', value: 'software' },
                { label: 'Dataset', value: 'dataset' }
            ],
            setMessage,
            setTitle,
            setType,
            messageError: computed(() => getMyErrors('', ['message'])),
            titleError: computed(() => getMyErrors('', ['title'])),
            screenError: computed(() => getMyErrors('', ['message', 'title']))
        }
    }
})
</script>

<style scoped>
</style>
