import Ajv from 'ajv'
import addFormats from 'ajv-formats'
import schema from './schemas/1.2.0/schema.json'

console.log(schema)
export const ajv = new Ajv()
addFormats(ajv)
ajv.addSchema(schema)

export const useValidator = () => {
    const makeFieldValidator = (subschema: string) => {
        return (val: unknown) => {
            const isValid = ajv.validate(`${schema.$id}#${subschema}`, val)
            if (isValid) {
                return true
            } else {
                console.log(ajv.errors)
                const messages = ajv.errors?.map(e => e.message) as unknown as string[]
                return messages.join(', ')
            }
        }
    }
    return {
        makeFieldValidator
    }
}
