/* eslint-disable @typescript-eslint/no-explicit-any */
import Ajv, { ErrorObject } from 'ajv'
import addFormats from 'ajv-formats'
import schema from '../schemas/1.2.0/schema.json'
import { useCffstr } from './cffstr'
import { computed, ref, watch } from 'vue'

export const ajv = new Ajv({ allErrors: true })
addFormats(ajv)
ajv.addSchema(schema)

const isValidFile = ref(true)
const errors = ref<ErrorObject<string, Record<string, unknown>, unknown>[]>([])

type messageErrorType = {
    hasError: boolean,
    messages: string[]
}

export function getMyErrors (myPath: string, fieldNames?: string[]):messageErrorType {
    console.log('ajvErrors: ', errors.value)
    const messages = errors.value.filter((item) => {
        return item.instancePath === myPath
    }).filter((item) => {
        if (fieldNames !== undefined && item.keyword === 'required') {
            return fieldNames.includes(item.params.missingProperty as string)
        }
        return true
    }).map((item) => {
        return item.message
    }) as string[]
    return {
        hasError: messages.length > 0,
        messages: messages
    }
}

function validateFile (jsObject: any) {
    isValidFile.value = ajv.validate(schema.$id, jsObject)
    if (ajv.errors) {
        errors.value = ajv.errors
    } else {
        errors.value = []
    }
}

export function useFileValidator () {
    const { jsObject } = useCffstr()
    validateFile(jsObject.value)
    watch(jsObject, (newObject) => validateFile(newObject))
    return {
        isValidFile: computed(() => isValidFile.value),
        errors: computed(() => errors.value)
    }
}
