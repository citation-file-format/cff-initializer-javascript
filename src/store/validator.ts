/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { useErrors } from './errors'
import { ErrorObject } from 'ajv'

export type messageErrorType = {
    hasError: boolean,
    messages: string[]
}

interface NamedParameters {
    instancePath?: string | undefined,
    schemaPath?: string | undefined,
    param: string | undefined
}

export function getMyErrors ({ instancePath = undefined, schemaPath = undefined, param = undefined }: NamedParameters): messageErrorType {
    const { errors } = useErrors()
    const omitAnyOtherInstancePaths = (item: ErrorObject) => {
        return instancePath !== undefined && item.instancePath === instancePath
    }
    const omitAnyOtherSchemaPaths = (item: ErrorObject) => {
        return schemaPath !== undefined && item.schemaPath === schemaPath
    }
    const omitNonMatchingParams = (item: ErrorObject) => {
        if (param === undefined) {
            return true
        }
        if (item.keyword === 'required') {
            return param === item.params.missingProperty
        }
        if (item.keyword === 'minItems') {
            return param === item.params.limit
        }
        return true
    }

    console.info(errors.value)

    const messages = errors.value
        .filter(omitAnyOtherInstancePaths)
        .filter(omitAnyOtherSchemaPaths)
        .filter(omitNonMatchingParams)
        .map((item) => {
            return item.message
        }) as string[]

    return {
        hasError: messages.length > 0,
        messages: [...new Set(messages)]
    }
}
