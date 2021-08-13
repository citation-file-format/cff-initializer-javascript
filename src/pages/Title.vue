<template>
    <div class="q-pa-md col-flex">
        <div
            class="q-gutter-md title-field text-dark"
        >
            <p class="q-mt-xl text-h5">
                What is the title of the work?
            </p>
            <q-input
                bg-color="white"
                label="title"
                outlined
                standout
                v-bind:model-value="title"
                v-bind:rules="[ val => val && val.length > 3 || 'Please use minimum 3 characters']"
                v-on:update:modelValue="setTitle"
            />
            <p class="q-mt-xl  text-h5">
                What do you want citers to do with the information provided in your CITATION.cff file?
            </p>
            <q-input
                bg-color="white"
                label="message"
                outlined
                v-bind:model-value="message"
                v-bind:rules="[ val => val && val.length > 3 || 'Please use minimum 3 characters']"
                v-on:update:modelValue="setMessage"
            />
            <p class="q-mt-xl text-h5">
                What type of work does this CITATION.cff describe?
            </p>
            <q-option-group
                type="radio"
                v-bind:model-value="type"
                v-bind:options="typeOptions"
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

.col-flex {
    flex: 1;
}
.title-field {
    margin-right: 120px;
    max-width: 700px;
    min-width: 300px;
}

</style>
