/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import Ajv, { ErrorObject } from 'ajv'
import addFormats from 'ajv-formats'
import { computed } from 'vue'
import schema from 'src/schemas/1.2.0/schema.json'
import { useCffstr } from 'src/store/cffstr'

const ajv = new Ajv({ allErrors: true })
addFormats(ajv)
ajv.addSchema(schema)

type ajvErrorType = ErrorObject<string, Record<string, unknown>, unknown>
const { jsObject } = useCffstr()

export const useValidation = () => {
    return {
        errors: computed(() => {
            ajv.validate(schema.$id, jsObject.value)
            if (ajv.errors) {
                return ajv.errors
            } else {
                return [] as ajvErrorType[]
            }
        })
    }
}
