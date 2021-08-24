import Ajv from 'ajv'
import addFormats from 'ajv-formats'
import schema from './schemas/1.2.0/schema.json'
import { useCffstr } from './store/cffstr'

export const ajv = new Ajv()
addFormats(ajv)
ajv.addSchema(schema)

export const isValidCffFile = () => {
    const { jsObject } = useCffstr()
    const isValid = ajv.validate(`${schema.$id}`, jsObject.value)
    return isValid
}

export const makeFieldValidator = (subschema: string) => {
    return (val: unknown) => {
        const isValid = ajv.validate(`${schema.$id}#${subschema}`, val)
        if (isValid) {
            return true
        } else {
            const messages = ajv.errors?.map(e => e.message) as unknown as string[]
            return messages.join(', ')
        }
    }
}

export const makeOptionalFieldValidator = (subschema: string) => {
    const fn = makeFieldValidator(subschema)
    return (val: unknown) => {
        if (val === '') {
            return true
        } else {
            return fn(val)
        }
    }
}
