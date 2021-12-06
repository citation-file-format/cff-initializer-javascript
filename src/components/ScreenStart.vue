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
                <SchemaInfoIcon section="title" />
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
                <SchemaInfoIcon section="message" />
            </p>
            <q-input
                bg-color="white"
                label="message"
                outlined
                v-bind:model-value="message"
                v-bind:error="messageError.hasError"
                v-bind:error-message="messageError.messages.join(', ')"
                v-on:new-value="setMessage"
                v-on:update:modelValue="setMessage"
            >
                <template #append>
                    <q-btn-dropdown
                        class="dropdown"
                        flat
                    >
                        <q-list>
                            <q-item
                                clickable
                                v-bind:key="messageOption"
                                v-close-popup
                                v-for="messageOption in messageOptions"
                                v-on:click="setMessage(messageOption)"
                            >
                                <q-item-section>
                                    <q-item-label>{{ messageOption }}</q-item-label>
                                </q-item-section>
                            </q-item>
                        </q-list>
                    </q-btn-dropdown>
                </template>
            </q-input>
            <p class="question">
                What type of work does this CITATION.cff describe?
                <SchemaInfoIcon section="type" />
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
import SchemaInfoIcon from 'components/SchemaInfoIcon.vue'
import Stepper from 'components/Stepper.vue'
import StepperActions from 'components/StepperActions.vue'
import { computed, defineComponent } from 'vue'
import { useCff } from '../store/cff'
import { getMyErrors } from 'src/store/validator'

export default defineComponent({
    name: 'ScreenStart',
    components: {
        SchemaInfoIcon,
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
            titleError: computed(() => getMyErrors('', ['title']))
        }
    }
})
</script>

<style scoped>
.dropdown {
    height: 100%;
}
</style>
