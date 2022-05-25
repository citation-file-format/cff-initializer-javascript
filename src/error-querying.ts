import { ErrorObject } from 'ajv'

type ErrorQueryFind = {
    [key: string]: undefined | string | Record<string, string>
    instancePath: string
    message: string
    schemaPath: string
}
type ErrorQueryReplace = {
    message: string
}
export type ErrorQuery = {
    find: ErrorQueryFind
    replace: ErrorQueryReplace
}

export const byError = (errors: ErrorObject[]) => {
    return (query: ErrorQuery) => {
        const matches = (error: ErrorObject) => {
            return query.find.instancePath === error.instancePath &&
                query.find.message === error.message &&
                query.find.schemaPath === error.schemaPath
        }
        return errors.some(matches)
    }
}

export const messageQueries: ErrorQuery[] = [{
    find: {
        instancePath: '',
        message: 'must have required property \'message\'',
        schemaPath: '#/required'
    },
    replace: {
        message: '\'message\' is a required property'
    }
}]

export const titleQueries: ErrorQuery[] = [{
    find: {
        instancePath: '',
        message: 'must have required property \'title\'',
        schemaPath: '#/required'
    },
    replace: {
        message: '\'title\' is a required property'
    }
}]

export const authorsQueries: ErrorQuery[] = [{
    find: {
        instancePath: '/authors',
        schemaPath: '#/properties/authors/minItems',
        message: 'must NOT have fewer than 1 items'
    },
    replace: {
        message: 'Click the button to add an author.'
    }
}]
