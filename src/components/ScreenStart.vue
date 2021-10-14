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
                v-bind:rules="[validateTitle]"
                v-on:update:modelValue="setTitle"
            />
            <p class="question">
                What do you want citers to do with the information provided in your CITATION.cff file?
            </p>
            <q-select
                bg-color="white"
                label="message"
                outlined
                v-bind:options="messageOptions"
                v-bind:model-value="message"
                v-bind:rules="[validateMessage]"
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

        <div id="form-button-bar">
            <StepperActions />
        </div>
    </div>
</template>

<script lang="ts">
import Stepper from 'components/Stepper.vue'
import StepperActions from 'components/StepperActions.vue'
import { makeFieldValidator } from '../validator'
import { defineComponent } from 'vue'
import { useCff } from '../store/cff'

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
            validateTitle: makeFieldValidator('/properties/title'),
            validateMessage: makeFieldValidator('/properties/message')
        }
    }
})
</script>

<style scoped>
</style>
