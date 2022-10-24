<template>
    <h1 id="form-title">
        Start
    </h1>

    <h2 class="question">
        What type of work does this CITATION.cff describe?
        <InfoDialog name="type" />
    </h2>
    <q-option-group
        data-cy="radio-type"
        type="radio"
        v-bind:model-value="type"
        v-bind:options="typeOptions"
        v-on:update:modelValue="[setType, setMessageOrDefault, checkDefaultMessage]"
    />

    <q-input
        bg-color="white"
        data-cy="input-title"
        outlined
        standout
        v-bind:aria-label="`Title of the ${ type } (required). Press tab to reach help button.`"
        v-bind:class="[titleErrors.length > 0 ? 'has-error' : '']"
        v-bind:error-message="titleErrors.join(', ')"
        v-bind:error="titleErrors.length > 0"
        v-bind:label="`Title of the ${ type } (required)`"
        v-bind:model-value="title"
        v-on:update:modelValue="setTitle"
    >
        <template v-slot:after>
            <InfoDialog name="title" />
        </template>
    </q-input>
    <q-input
        aria-label="`Title of the ${ type }. Press tab to reach help button.`"
        bg-color="white"
        data-cy="input-message"
        label="Personalized message. Leave blank to use default"
        outlined
        standout
        v-bind:class="[messageErrors.length > 0 ? 'has-error' : '']"
        v-model="localMessage"
        v-bind:error="messageErrors.length > 0"
        v-bind:error-message="messageErrors.join(', ')"
        v-on:update:modelValue="setMessageOrDefault"
    >
        <template v-slot:after>
            <InfoDialog name="message" />
        </template>
    </q-input>
</template>

<script lang="ts">
import { byError, messageQueries, titleQueries } from 'src/error-filtering'
import { computed, defineComponent, ref } from 'vue'
import InfoDialog from 'components/InfoDialog.vue'
import { useCff } from 'src/store/cff'
import { useValidation } from 'src/store/validation'

export default defineComponent({
    name: 'ScreenStart',
    components: {
        InfoDialog
    },
    setup () {
        const { message, title, type, setMessage, setTitle, setType } = useCff()
        const localMessage = ref('')
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
        const checkDefaultMessage = () => {
            if (message.value === `If you use this ${type.value}, please cite it using the metadata from this file.`) {
                localMessage.value = ''
            } else {
                localMessage.value = message.value
            }
        }
        checkDefaultMessage()
        const setMessageOrDefault = () => {
            if (localMessage.value === '') {
                // search and replace all occurrences
                setMessage(`If you use this ${type.value}, please cite it using the metadata from this file.`)
            } else {
                setMessage(localMessage.value)
            }
        }
        return {
            checkDefaultMessage,
            localMessage,
            messageErrors,
            title,
            titleErrors,
            type,
            typeOptions: [
                { label: 'Software', value: 'software' },
                { label: 'Dataset', value: 'dataset' }
            ],
            setMessageOrDefault,
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
