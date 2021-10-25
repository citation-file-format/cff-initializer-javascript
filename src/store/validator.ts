/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { useErrors } from './errors'
import { ErrorObject } from 'ajv'

type messageErrorType = {
    hasError: boolean,
    messages: string[]
}

export function getMyErrors (myPath: string, fieldNames?: string[]):messageErrorType {
    const { errors } = useErrors()
    console.log('ajvErrors: ', errors.value)

    const checkForInstancePath = (item: ErrorObject) => {
        return item.instancePath === myPath
    }

    const checkForArrayProblems = (item: ErrorObject) => {
        const keywords = ['uniqueItems', 'minItems']
        if (fieldNames !== undefined && keywords.includes(item.keyword)) {
            return false
        }
        return true
    }

    const checkForObjectProblems = (item: ErrorObject) => {
        if (fieldNames !== undefined && item.keyword === 'required') {
            return fieldNames.includes(item.params.missingProperty as string)
        }
        return true
    }

    const hideEntityErrorProblems = (item: ErrorObject) => {
        if (item.instancePath.startsWith('/authors/') && item.keyword === 'anyOf') {
            return false
        }
        if (item.instancePath.startsWith('/authors/') && item.keyword === 'required' && item.params.missingProperty === 'name') {
            return false
        }
        return true
    }

    const messages = errors.value
        .filter(checkForInstancePath)
        .filter(checkForArrayProblems)
        .filter(checkForObjectProblems)
        .filter(hideEntityErrorProblems)
        .map((item) => {
            return item.message
        }) as string[]

    console.log('messages:', messages)

    return {
        hasError: messages.length > 0,
        messages: [...new Set(messages)]
    }
}
