<template>
    <div class="q-pa-md col-flex">
        <div
            class="q-gutter-md title-field text-dark"
        >
            <p class="q-mt-xl page-title">
                Start
            </p>

            <p class="question">
                What is the title of the work?
            </p>
            <q-input
                bg-color="white"
                label="title"
                outlined
                standout
                v-bind:model-value="title"
                v-bind:error="errors.title?.length > 0"
                v-bind:error-message="errors.title ? errors.title.join(', ') : ''"
                v-on:update:modelValue="setTitle"
            />
            <p class="question">
                What do you want citers to do with the information provided in your CITATION.cff file?
            </p>
            <q-input
                bg-color="white"
                label="message"
                outlined
                v-bind:model-value="message"
                v-bind:error="errors.message?.length > 0"
                v-bind:error-message="errors.message ? errors.message.join(', ') : ''"
                v-on:update:modelValue="setMessage"
            />
            <p class="question">
                What type of work does this CITATION.cff describe?
            </p>
            <q-option-group
                type="radio"
                v-bind:model-value="type"
                v-bind:options="typeOptions"
                v-bind:error="errors.type?.length > 0"
                v-bind:error-message="errors.type ? errors.type.join(', ') : ''"
                v-on:update:modelValue="setType"
            />
        </div>
    </div>
    <StepperActions />
</template>

<script lang="ts">
import StepperActions from 'components/StepperActions.vue'
import { useFileValidator } from '../validator'
import { defineComponent } from 'vue'
import { useCff } from '../store/cff'

export default defineComponent({
    name: 'Start',
    components: {
        StepperActions
    },
    setup () {
        const { message, title, type, setMessage, setTitle, setType } = useCff()
        const { groupedErrors } = useFileValidator()
        return {
            message,
            title,
            type,
            typeOptions: [
                { label: 'Software', value: 'software' },
                { label: 'Dataset', value: 'dataset' }
            ],
            setMessage,
            setTitle,
            setType,
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
