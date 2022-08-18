<template>
    <Stepper />

    <div
        id="form"
        class="col-12 col-lg-5 col-sm-10"
    >
        <div id="form-title">
            <h1 class="page-title">
                Start
            </h1>
        </div>

        <div id="form-content">
            <h2 class="question">
                What type of work does this CITATION.cff describe?
                <SchemaGuideLink anchor="#type" />
            </h2>
            <q-option-group
                type="radio"
                v-bind:model-value="type"
                v-bind:options="typeOptions"
                v-on:update:modelValue="[setType, setMessagePlaceHolder]"
            />
            <h2 class="question">
                What is the title of the work?
                <SchemaGuideLink anchor="#title" />
            </h2>
            <q-input
                bg-color="white"
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
                label="message"
                outlined
                standout
                v-bind:class="[messageErrors.length > 0 ? 'has-error' : '']"
                v-bind:model-value="message"
                v-bind:error="messageErrors.length > 0"
                v-bind:error-message="messageErrors.join(', ')"
                v-on:update:modelValue="setMessage"
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
        const setMessagePlaceHolder = () => {
            // check if user modified the placeholder, if that is the case, do not update the message
            const messagePlaceHolderRegex = /^If you use this (?<cfftype>software|dataset), please cite it using the metadata from this file.$/igd
            const isMessageModifiedByApp = messagePlaceHolderRegex.exec(message.value)
            const testing = messagePlaceHolderRegex.test(message.value)
            console.log(testing)
            if (isMessageModifiedByApp) {
                setMessage(`If you use this ${type.value}, please cite it using the metadata from this file.`)
            }
        }
        return {
            message,
            messageErrors,
            title,
            titleErrors,
            type,
            typeOptions: [
                { label: 'Software', value: 'software' },
                { label: 'Dataset', value: 'dataset' }
            ],
            setMessage,
            setMessagePlaceHolder,
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
