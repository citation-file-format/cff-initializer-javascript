<template>
    <Stepper />

    <div
        id="form"
        class="col-12 col-md-6 col-sm-7"
    >
        <div id="form-title">
            <h1 class="page-title">
                Start
            </h1>
        </div>

        <div id="form-content">
            <h2 class="question">
                What is the title of the work?
                <SchemaGuideLink anchor="#title" />
            </h2>
            <q-input
                bg-color="white"
                data-cy="title"
                label="title"
                outlined
                standout
                v-bind:class="[titleErrors.length > 0 ? 'has-error' : '']"
                v-bind:model-value="title"
                v-bind:error="titleErrors.length > 0"
                v-bind:error-message="titleErrors.join(', ')"
                v-on:update:modelValue="setTitle"
            />
            <h2 class="question">
                What do you want citers to do with the information provided in your CITATION.cff file?
                <SchemaGuideLink anchor="#message" />
            </h2>
            <q-input
                bg-color="white"
                data-cy="message"
                label="message"
                outlined
                v-bind:class="[messageErrors.length > 0 ? 'has-error' : '']"
                v-bind:model-value="message"
                v-bind:error="messageErrors.length > 0"
                v-bind:error-message="messageErrors.join(', ')"
                v-on:new-value="setMessage"
                v-on:update:modelValue="setMessage"
            >
                <template v-slot:append>
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
            <h2 class="question">
                What type of work does this CITATION.cff describe?
                <SchemaGuideLink anchor="#type" />
            </h2>
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
import { byError, messageQueries, titleQueries } from 'src/error-filtering'
import { computed, defineComponent, onUpdated } from 'vue'
import SchemaGuideLink from 'components/SchemaGuideLink.vue'
import Stepper from 'components/Stepper.vue'
import StepperActions from 'components/StepperActions.vue'
import { useCff } from 'src/store/cff'
import { useStepperErrors } from 'src/store/stepper-errors'
import { useValidation } from 'src/store/validation'

export default defineComponent({
    name: 'ScreenStart',
    components: {
        SchemaGuideLink,
        Stepper,
        StepperActions
    },
    setup () {
        onUpdated(() => {
            const { setErrorStateScreenStart } = useStepperErrors()
            setErrorStateScreenStart(document.getElementsByClassName('has-error').length > 0)
        })
        const { message, title, type, setMessage, setTitle, setType } = useCff()
        const { errors } = useValidation()
        const messageOptions = [
            'If you use this software, please cite it using the metadata from this file.',
            'Please cite this software using these metadata.',
            'Please cite this software using the metadata from \'preferred-citation\'.',
            'If you use this dataset, please cite it using the metadata from this file.',
            'Please cite this dataset using these metadata.',
            'Please cite this dataset using the metadata from \'preferred-citation\'.'
        ]
        const messageErrors = computed(() => {
            return messageQueries
                .filter(byError(errors.value))
                .map(query => query.replace.message)
        })
        const titleErrors = computed(() => {
            return titleQueries
                .filter(byError(errors.value))
                .map(query => query.replace.message)
        })
        return {
            message,
            messageErrors,
            messageOptions,
            title,
            titleErrors,
            type,
            typeOptions: [
                { label: 'Software', value: 'software' },
                { label: 'Dataset', value: 'dataset' }
            ],
            setMessage,
            setTitle,
            setType
        }
    }
})
</script>

<style scoped>
.dropdown {
    height: 100%;
}
</style>
