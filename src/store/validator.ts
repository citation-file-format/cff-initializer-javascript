/* eslint-disable @typescript-eslint/no-explicit-any */
// import Ajv, { ErrorObject } from 'ajv'
// import addFormats from 'ajv-formats'
// import schema from '../schemas/1.2.0/schema.json'
// import { useCffstr } from './cffstr'
// import { computed, watch } from 'vue'

import { useErrors } from './errors'

// export const ajv = new Ajv({ allErrors: true })
// addFormats(ajv)
// ajv.addSchema(schema)

// const isValidFile = ref(true)
// const errors = ref<ErrorObject<string, Record<string, unknown>, unknown>[]>([])

type messageErrorType = {
    hasError: boolean,
    messages: string[]
}

export function getMyErrors (myPath: string, fieldNames?: string[]):messageErrorType {
    const { errors } = useErrors()

    console.log('ajvErrors: ', errors.value)
    console.log('myPath:', myPath)
    console.log('fieldNames:', fieldNames)

    // const messages = errors.value.filter((item) => {
    //     return item.instancePath === myPath
    // }).filter((item) => {
    //     if (fieldNames !== undefined && item.keyword === 'required') {
    //         return fieldNames.includes(item.params.missingProperty as string)
    //     }
    //     return true
    // }).map((item) => {
    //     return item.message
    // }) as string[]

    const messages:string[] = []
    return {
        hasError: messages.length > 0,
        messages: messages
    }
}
