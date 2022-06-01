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
            schemaPath: '#/definitions/orcid/pattern'
        },
        replace: {
            message: 'Expected format is: https://orcid.org/0000-0000-0000-0000'
        }
    }] as ErrorQuery[]
}

export const emailQueries = (index: number) => {
    return [{
        find: {
            instancePath: `/authors/${index}/email`,
            schemaPath: '#/definitions/email/pattern'
        },
        replace: {
            message: 'Something like bob@gmail.com, akira@yahoo.co.jp, or t.achebe@live.org.za'
        }
    }] as ErrorQuery[]
}

export const repositoryCodeQueries: ErrorQuery[] = [{
    find: {
        instancePath: '/repository-code',
        schemaPath: '#/definitions/url/pattern'
    },
    replace: {
        message: 'Format: https://www.example.com (http, ftp, sftp hyperlinks are also supported)'
    }
}]

export const urlQueries: ErrorQuery[] = [{
    find: {
        instancePath: '/url',
        schemaPath: '#/definitions/url/pattern'
    },
    replace: {
        message: 'Format: https://www.example.com (http, ftp, sftp hyperlinks are also supported)'
    }
}]

export const repositoryQueries: ErrorQuery[] = [{
    find: {
        instancePath: '/repository',
        schemaPath: '#/definitions/url/pattern'
    },
    replace: {
        message: 'Format: https://www.example.com (http, ftp, sftp hyperlinks are also supported)'
    }
}]

export const repositoryArtifactQueries: ErrorQuery[] = [{
    find: {
        instancePath: '/repository-artifact',
        schemaPath: '#/definitions/url/pattern'
    },
    replace: {
        message: 'Format: https://www.example.com (http, ftp, sftp hyperlinks are also supported)'
    }
}]

export const keywordQueries = (index: number) => {
    return [{
        find: {
            instancePath: `/keywords/${index}`,
            schemaPath: '#/properties/keywords/items/minLength'
        },
        replace: {
            message: 'Zero-length keywords are not allowed. Please type a keyword or remove the field entirely.'
        }
    }] as ErrorQuery[]
}

export const dateReleasedQueries: ErrorQuery[] = [{
    find: {
        instancePath: '/date-released',
        schemaPath: '#/definitions/date/pattern'
    },
    replace: {
        message: 'Use the YYYY-MM-DD format.'
    }
}]
