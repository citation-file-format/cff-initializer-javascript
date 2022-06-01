import { ErrorObject } from 'ajv'

type ErrorQueryFind = {
    [key: string]: string | undefined
    instancePath: string
    message?: string | undefined
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
            if (query.find.instancePath !== error.instancePath) {
                return false
            }
            if (query.find.schemaPath !== error.schemaPath) {
                return false
            }
            if (Object.keys(query.find).includes('message') && query.find.message !== error.message) {
                return false
            }
            return true
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
        message: 'Use the button to add an author.'
    }
}, {
    find: {
        instancePath: '/authors',
        schemaPath: '#/properties/authors/uniqueItems'
    },
    replace: {
        message: 'There are duplicate authors.'
    }
}]

export const orcidQueries = (index: number) => {
    return [{
        find: {
            instancePath: `/authors/${index}/orcid`,
            schemaPath: '#/definitions/orcid/pattern',
            message: 'must match pattern "https://orcid\\.org/[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{3}[0-9X]{1}"'
        },
        replace: {
            message: 'orcid has weird format'
        }
    }] as ErrorQuery[]
}
