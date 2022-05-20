/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { useErrors } from './errors'
import { ErrorObject } from 'ajv'

export type messageErrorType = {
    hasError: boolean,
    messages: string[]
}

type ErrorMatch = {
    instancePath?: string,
    schemaPath?: string,
    params?: Record<string, string>
}

function isMatch (error: ErrorObject, matchParams: ErrorMatch): boolean {
    let found = true
    if (matchParams.instancePath) {
        found = found && error.instancePath === matchParams.instancePath
    }
    if (matchParams.schemaPath) {
        found = found && error.schemaPath === matchParams.schemaPath
    }
    if (matchParams.params && error.params) {
        for (const key in matchParams.params) {
            found = found && error.params[key] === matchParams.params[key]
        }
    }
    return found
}

export function getMyErrors (matchParams: ErrorMatch): string | null {
    const { errors } = useErrors()

    for (const error of errors.value) {
        if (isMatch(error, matchParams)) {
            return error.message as string
        }
    }

    return null
}

export function getMyErrorsArray (matchArray: ErrorMatch[]): string[] {
    function notNull<T> (value: T | null): value is T {
        return value !== null
    }
    return matchArray.map(match => getMyErrors(match)).filter(notNull)
}
