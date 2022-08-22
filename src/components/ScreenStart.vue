<template>
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
            v-on:update:modelValue="[setType, parseAndSetMessagePlaceHolder]"
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
            v-bind:placeholder="messagePlaceHolder"
            v-bind:class="[messageErrors.length > 0 ? 'has-error' : '']"
            v-bind:model-value="message"
            v-bind:error="messageErrors.length > 0"
            v-bind:error-message="messageErrors.join(', ')"
            v-on:update:modelValue="setMessage"
        />
    </div>
</template>

<script lang="ts">
import { byError, messageQueries, titleQueries } from 'src/error-filtering'
import { computed, defineComponent, onUpdated, ref } from 'vue'
import SchemaGuideLink from 'components/SchemaGuideLink.vue'
import { useCff } from 'src/store/cff'
import { useStepperErrors } from 'src/store/stepper-errors'
import { useValidation } from 'src/store/validation'

export default defineComponent({
    name: 'ScreenStart',
    components: {
        SchemaGuideLink
    },
    setup () {
        onUpdated(() => {
            const { setErrorStateScreenStart } = useStepperErrors()
            setErrorStateScreenStart(document.getElementsByClassName('has-error').length > 0)
        })
        const { message, title, type, setMessage, setTitle, setType } = useCff()
        const messagePlaceHolder = ref('e.g. If you use this software, please cite it using the metadata from this file.')
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
        const parseAndSetMessagePlaceHolder = () => {
            const messagePlaceHolderRegex = /(software|dataset)/igm
            const matches = messagePlaceHolderRegex.exec(messagePlaceHolder.value)
            if (matches) {
                // search and replace all occurrences
                messagePlaceHolder.value = messagePlaceHolder.value.split(matches[0]).join(type.value)
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
            messagePlaceHolder,
            parseAndSetMessagePlaceHolder,
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
