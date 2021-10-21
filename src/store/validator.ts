/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { useErrors } from './errors'

type messageErrorType = {
    hasError: boolean,
    messages: string[]
}

export function getMyErrors (myPath: string, fieldNames?: string[]):messageErrorType {
    const { errors } = useErrors()
    console.log('ajvErrors: ', errors.value)
    const messages = errors.value.filter((item) => {
        return item.instancePath === myPath
    }).filter((item) => {
        if (fieldNames !== undefined && item.keyword === 'required') {
            return fieldNames.includes(item.params.missingProperty as string)
        }
        // if (fieldNames !== undefined && item.keyword === 'uniqueItems') {
        //     return fieldNames.includes(item.params.missingProperty as string)
        // }
        return true
    }).map((item) => {
        return item.message
    }) as string[]

    return {
        hasError: messages.length > 0,
        messages: messages
    }
}
