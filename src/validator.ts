import Ajv from 'ajv'
import addFormats from 'ajv-formats'
import schema from './schemas/1.2.0/schema.json'

console.log(schema)
export const ajv = new Ajv()
addFormats(ajv)
const schemaId = schema.$id
ajv.addSchema(schema, schemaId)

export const useValidator = () => {
    const makeFieldValidator = (subschema: string) => {
        return (val: unknown) => {
            const isValid = ajv.validate(`${schemaId}#${subschema}`, val)
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
