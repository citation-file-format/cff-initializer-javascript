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
                <SchemaGuideLink anchor="#title" />
            </p>
            <q-input
                bg-color="white"
                label="title"
                outlined
                standout
                v-bind:error="titleErrors.length > 0"
                v-bind:error-message="titleErrors.join(', ')"
                v-bind:model-value="title"
                v-on:update:modelValue="setTitle"
            />
            <p class="question">
                What do you want citers to do with the information provided in your CITATION.cff file?
                <SchemaGuideLink anchor="#message" />
            </p>
            <q-input
                bg-color="white"
                label="message"
                outlined
                v-bind:error="messageErrors.length > 0"
                v-bind:error-message="messageErrors.join(', ')"
                v-bind:model-value="message"
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
                <SchemaGuideLink anchor="#type" />
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
import { computed, defineComponent } from 'vue'
import { useCff } from 'src/composables/cff'
import { byError, messageQueries, titleQueries } from 'src/error-querying'
import SchemaGuideLink from 'src/components/SchemaGuideLink.vue'
import Stepper from 'src/components/Stepper.vue'
import StepperActions from 'src/components/StepperActions.vue'

export default defineComponent({
    name: 'ScreenStart',
    components: {
        SchemaGuideLink,
        Stepper,
        StepperActions
    },
    setup () {
        const { message, title, type, setMessage, setTitle, setType, errors } = useCff()
        const messageOptions = [
            'If you use this software, please cite it using the metadata from this file.',
            'Please cite this software using these metadata.',
            'Please cite this software using the metadata from \'preferred-citation\'.',
            'If you use this dataset, please cite it using the metadata from this file.',
            'Please cite this dataset using these metadata.',
            'Please cite this dataset using the metadata from \'preferred-citation\'.'
        ]
        const messageErrors = computed(() => messageQueries.filter(byError(errors.value)).map(query => query.replace.message))
        const titleErrors = computed(() => titleQueries.filter(byError(errors.value)).map(query => query.replace.message))
        console.info(errors.value)
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
