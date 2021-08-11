<template>
    <div class="q-pa-md">
        <div
            class="q-gutter-md title-field text-dark"
        >
            <p class="q-mt-xl text-h5">
                What is the title of the work?
            </p>
            <q-input
                v-bind:model-value="title"
                v-on:update:modelValue="setTitle"
                label="title"
                outlined
                standout
                bg-color="white"
                v-bind:rules="[ val => val && val.length > 3 || 'Please use minimum 3 characters']"
            />
            <p class="q-mt-xl  text-h5">
                What do you want citers to do with the information provided in your CITATION.cff file?
            </p>
            <q-input
                v-bind:model-value="message"
                v-on:update:modelValue="setMessage"
                label="message"
                outlined
                bg-color="white"
                v-bind:rules="[ val => val && val.length > 3 || 'Please use minimum 3 characters']"
            />
            <p class="q-mt-xl text-h5">
                What type of work does this CITATION.cff describe?
            </p>
            <q-option-group
                v-bind:options="typeOptions"
                type="radio"
                v-bind:model-value="type"
                v-on:update:modelValue="setType"
            />
        </div>
    </div>
    <StepperActions />
</template>

<script lang="ts">
import StepperActions from 'components/StepperActions.vue'
import { defineComponent } from 'vue'
import { useCFF } from '../store/cff'

export default defineComponent({
    name: 'PageTitle',
    components: {
        StepperActions
    },
    setup () {
        const cff = useCFF()
        return {
            typeOptions: [
                { label: 'Software', value: 'software' },
                { label: 'Dataset', value: 'dataset' }
            ],
            title: cff.title,
            message: cff.message,
            type: cff.type,
            setTitle: cff.setTitle,
            setMessage: cff.setMessage,
            setType: cff.setType
        }
    }
})
</script>

<style scoped>

.title-field {
    margin-right: 120px;
    min-width: 300px;
    max-width: 700px;
}

</style>
