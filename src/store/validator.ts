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

/**
 * @param matchParams - An object with some of the following properties: instancePath, schemaPath or params.
 * @returns (string | null) - The error message or null if no error was found.
 */
export function getMatchingError (matchParams: ErrorMatch): string | null {
    const { errors } = useErrors()

    for (const error of errors.value) {
        if (isMatch(error, matchParams)) {
            return error.message as string
        }
    }

    return null
}

/**
 * @param matchArray - An array of objects with some of the following properties: instancePath, schemaPath or params.
 * @returns (string[]) - An array with matching error messages using `getMatchingError`. `null` values are removed. If no error was found, an empty array is returned.
 */
export function getArrayOfMatchingError (matchArray: ErrorMatch[]): string[] {
    function notNull<T> (value: T | null): value is T {
        return value !== null
    }
    return matchArray.map(match => getMatchingError(match)).filter(notNull)
}
