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
            <q-btn
                icon="help"
                flat
                v-on:click="showHelp= true"
            />
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
        <InfoDialog
            v-model="showHelp"
            v-bind:data="helpData.message"
        />
    </div>
</template>

<script lang="ts">
import { byError, messageQueries, titleQueries } from 'src/error-filtering'
import { computed, defineComponent, onUpdated, ref } from 'vue'
import InfoDialog from 'components/InfoDialog.vue'
import SchemaGuideLink from 'components/SchemaGuideLink.vue'
import { useCff } from 'src/store/cff'
import { useStepperErrors } from 'src/store/stepper-errors'
import { useValidation } from 'src/store/validation'

export default defineComponent({
    name: 'ScreenStart',
    components: {
        SchemaGuideLink,
        InfoDialog
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
            const messagePlaceHolderRegex = /(software|dataset)/igm
            const matches = messagePlaceHolderRegex.exec(message.value)
            if (matches) {
                // search and replace all occurrences
                setMessage(message.value.split(matches[0]).join(type.value))
            }
        }
        const helpData = {
            message: {
                title: 'message',
                url: 'https://github.com/citation-file-format/citation-file-format/blob/1.2.0/schema-guide.md#message',
                description: 'A message to the human reader of the CITATION.cff file to let them know what to do with the citation metadata.',
                examples: [
                    'If you use this software, please cite it using the metadata from this file.',
                    'Please cite this software using these metadata.',
                    'Please cite this software using the metadata from "preferred-citation".'
                ]
            },
            title: {

            }
        }
        return {
            helpData,
            message,
            messageErrors,
            showHelp: ref(false),
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
