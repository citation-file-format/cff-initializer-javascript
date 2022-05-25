/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { useErrors } from './errors'
import { ErrorObject } from 'ajv'

export type messageErrorType = {
    hasError: boolean,
    messages: string[]
}

export function getMyErrors (myPath: string, fieldNames?: string[]):messageErrorType {
    const { errors } = useErrors()
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
        if (fieldNames !== undefined && item.keyword === 'additionalProperties') {
            return fieldNames.includes(item.params.additionalProperty as string)
        }
        return true
    }

    const hideEntityErrorProblems = (item: ErrorObject) => {
        const additionalPropertyList = [
            'affiliation',
            'email',
            'family-names',
            'given-names',
            'name-particle',
            'name-suffix',
            'orcid'
        ]
        if (item.instancePath.startsWith('/authors/') && item.keyword === 'anyOf') {
            return false
        }
        if (item.instancePath.startsWith('/authors/') && item.keyword === 'required' && item.params.missingProperty === 'name') {
            return false
        }
        if (item.instancePath.startsWith('/authors/') && item.keyword === 'additionalProperties' && additionalPropertyList.includes(item.params.additionalProperty)) {
            return false
        }
        return true
    }

    const translateMessages = (item: ErrorObject) => {
        console.log(item)
        if (item.params.missingProperty && item.keyword === 'required') {
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            item.message = `The ${item.params.missingProperty} field is required`
        }
        if (item.keyword === 'format') {
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            item.message = `Wrong ${item.params.format} format, please see the documentation.`
        }
        if (item.keyword === 'pattern') {
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            item.message = ''
        }
        return item
    }

    const messages = errors.value
        .filter(checkForInstancePath)
        .filter(checkForArrayProblems)
        .filter(checkForObjectProblems)
        .filter(hideEntityErrorProblems)
        .map(translateMessages)
        .map((item) => {
            return item.message
        }) as string[]

    return {
        hasError: messages.length > 0,
        messages: [...new Set(messages)]
    }
}
