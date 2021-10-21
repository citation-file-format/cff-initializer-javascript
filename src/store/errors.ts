/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import Ajv, { ErrorObject } from 'ajv'
import addFormats from 'ajv-formats'
import { useCffstr } from './cffstr'
import schema from '../schemas/1.2.0/schema.json'
import { computed, ref } from 'vue'

const ajv = new Ajv({ allErrors: true })
addFormats(ajv)
ajv.addSchema(schema)

type ajvErrorType = ErrorObject<string, Record<string, unknown>, unknown>
const errors = ref([] as ajvErrorType[])
// const errors = [] as ajvErrorType[]

function validate () {
    const { jsObject } = useCffstr()
    ajv.validate(schema.$id, jsObject)
    if (ajv.errors) {
        errors.value = ajv.errors
        // return ajv.errors
    } else {
        errors.value = []
        // return []
    }
    return errors
}

export function useErrors () {
    return {
        errors: computed(validate)
    }
}
