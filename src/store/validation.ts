/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import * as yaml from 'js-yaml'
import Ajv, { ErrorObject } from 'ajv'
import addFormats from 'ajv-formats'
import { computed } from 'vue'
import schema from 'src/schemas/1.2.0/schema.json'
import { useCff } from 'src/store/cff'
import { useCffstr } from 'src/store/cffstr'

const ajv = new Ajv({ allErrors: true })
addFormats(ajv)
ajv.addSchema(schema)

type ajvErrorType = ErrorObject<string, Record<string, unknown>, unknown>
const { extraCffFields } = useCff()
const { jsObject } = useCffstr()

const errors = computed(() => {
    try {
        if (extraCffFields.value.trim() === '') {
            ajv.validate(schema.$id, jsObject.value)
        } else {
            const extraYaml = yaml.load(extraCffFields.value) as Record<string, unknown>
            const duplicateKeys = Object.keys(extraYaml).filter(x => x in jsObject.value)
            if (duplicateKeys.length > 0) {
                throw Error(`Duplicate keys: '${duplicateKeys.join("', '")}'`)
            }
            ajv.validate(schema.$id, {
                ...jsObject.value,
                ...extraYaml
            })
        }
    } catch (error) {
        ajv.validate(schema.$id, {
            ...jsObject.value
        })
        let msg = ''
        if (error instanceof yaml.YAMLException) {
            msg = 'YAML Error: ' + error.message
        } else if (error instanceof Error) {
            msg = error.message
        } else {
            msg = 'Uncaught error. Please report this issue.'
        }
        if (!(ajv.errors)) {
            ajv.errors = [] as ErrorObject[]
        }
        ajv.errors.push({
            keyword: 'Extra CFF Fields error',
            instancePath: '',
            schemaPath: '',
            params: [],
            message: msg
        } as ErrorObject)
    }
    if (ajv.errors) {
        return ajv.errors
    } else {
        return [] as ajvErrorType[]
    }
})

export const useValidation = () => {
    return {
        errors: errors
    }
}
