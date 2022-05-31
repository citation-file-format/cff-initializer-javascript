/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { useErrors } from './errors'
import { ErrorObject } from 'ajv'

export type messageErrorType = {
    hasError: boolean,
    messages: ErrorObject[]
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
        switch (item.keyword) {
        case 'required':
            item.message = `The ${item.params.missingProperty} field is required`
            break
        case 'format':
            item.message = `Wrong ${item.params.format} format, please see the documentation.`
            break
        case 'pattern':
            item.message = `The input should follow this pattern: ${item.params.pattern}`
            break
        case 'minItems':
            item.message = `At least ${item.params.limit} ${item.instancePath.replace('/', '')} is needed.`
            break
        case 'minLength':
            item.message = `At least ${item.params.limit} ${item.instancePath.split('/').pop()} is needed.`
            break
        case 'anyOf':
            item.message = `All the ${item.instancePath.split('/', 3)[1]} must be valid.`
            break
        case 'uniqueItems':
            item.message = `There are duplicate ${item.instancePath.split('/').pop()}.`
            break
        case 'enum':
            // item.message = `There are duplicate ${item.instancePath.split('/').pop()}.`
            item.message = 'enum-error'
            break
        default:
            item.message = `Unknown error: ${item.message}`
        }

        return item
    }

    const messages = errors.value
        .filter(checkForInstancePath)
        .filter(checkForArrayProblems)
        .filter(checkForObjectProblems)
        .filter(hideEntityErrorProblems)
        .map(translateMessages)

    return {
        hasError: messages.length > 0,
        messages: [...new Set(messages)]
    }
}
