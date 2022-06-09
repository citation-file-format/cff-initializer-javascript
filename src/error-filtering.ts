import { ErrorObject } from 'ajv'

type ErrorQueryFind = {
    [key: string]: string | undefined
    instancePath?: string | undefined
    message?: string | undefined
    schemaPath?: string | undefined
}
type ErrorQueryReplace = {
    message: string
}
export type ErrorQuery = {
    find: ErrorQueryFind
    replace: ErrorQueryReplace
}

export interface Comparator { (error: ErrorObject, query: ErrorQuery): boolean }

const defaultMatcher: Comparator = (error, query) => {
    const keys = Object.keys(query.find)
    if (keys.includes('instancePath') && query.find.instancePath !== error.instancePath) {
        return false
    }
    if (keys.includes('schemaPath') && query.find.schemaPath !== error.schemaPath) {
        return false
    }
    if (keys.includes('message') && query.find.message !== error.message) {
        return false
    }
    return true
}

export const duplicateMatcher = (index: number) => {
    return (error: ErrorObject) => error.params.i === index || error.params.j === index
}

export const byError = (errors: ErrorObject[], matcher: Comparator = defaultMatcher) => {
    return (query: ErrorQuery) => {
        return errors.some((error: ErrorObject) => matcher(error, query))
    }
}

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

export const dateReleasedQueries: ErrorQuery[] = [{
    find: {
        instancePath: '/date-released',
        schemaPath: '#/definitions/date/pattern'
    },
    replace: {
        message: 'Use the YYYY-MM-DD format.'
    }
}]

export const duplicateAuthorQueries: ErrorQuery[] = [{
    find: {
        instancePath: '/authors',
        schemaPath: '#/properties/authors/uniqueItems'
    },
    replace: {
        message: 'This author is a duplicate.'
    }
}]

export const duplicateIdentifierQueries: ErrorQuery[] = [{
    find: {
        instancePath: '/identifiers',
        schemaPath: '#/properties/identifiers/uniqueItems'
    },
    replace: {
        message: 'This identifier is a duplicate.'
    }
}]

export const duplicateKeywordQueries: ErrorQuery[] = [{
    find: {
        instancePath: '/keywords',
        schemaPath: '#/properties/keywords/uniqueItems'
    },
    replace: {
        message: 'This keyword is a duplicate.'
    }
}]

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

export const identifierValueQueries = (index: number, typeIndex: number) => {
    return [[
        {
            find: {
                instancePath: `/identifiers/${index}/value`,
                schemaPath: '#/definitions/doi/pattern'
            },
            replace: {
                message: 'e.g. \'10.5281/zenodo.1003149\' or \'10.7717/peerj-cs.86\'. Does not include the resolver URL.'
            }
        },
        {
            find: {
                instancePath: `/identifiers/${index}/value`,
                schemaPath: '#/definitions/url/pattern'
            },
            replace: {
                message: 'e.g. \'https://www.example.com\' (http, ftp, sftp hyperlinks are also supported)'
            }
        },
        {
            find: {
                instancePath: `/identifiers/${index}/value`,
                schemaPath: '#/definitions/swh-identifier/pattern'
            },
            replace: {
                message: 'e.g. \'swh:1:rev:309cf2674ee7a0749978cf8265ab91a60aea0f7d\'. Besides \'rev\', other allowed values are: \'snp\', \'rel\', \'dir\', and \'cnt\'.'
            }
        },
        {
            find: {
                instancePath: `/identifiers/${index}/value`,
                schemaPath: '#/anyOf/3/properties/value/minLength'
            },
            replace: {
                message: 'Zero-length identifier values are not allowed. Please type an identifier value or remove the identifier entirely.'
            }
        }
    ][typeIndex]] as ErrorQuery[]
}

export const identifiersQueries: ErrorQuery[] = [{
    find: {
        instancePath: '/identifiers',
        schemaPath: '#/properties/identifiers/uniqueItems'
    },
    replace: {
        message: 'There are duplicate identifiers.'
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

export const keywordsQueries: ErrorQuery[] = [{
    find: {
        instancePath: '/keywords',
        schemaPath: '#/properties/keywords/uniqueItems'
    },
    replace: {
        message: 'There are duplicate keywords.'
    }
}]

export const messageQueries: ErrorQuery[] = [{
    find: {
        instancePath: '',
        message: 'must have required property \'message\'',
        schemaPath: '#/required'
    },
    replace: {
        message: '\'message\' is a required property'
    }
}, {
    find: {
        message: 'must NOT have fewer than 1 characters',
        schemaPath: '#/properties/message/minLength'
    },
    replace: {
        message: '\'message\' needs to be at least 1 character long.'
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

export const repositoryArtifactQueries: ErrorQuery[] = [{
    find: {
        instancePath: '/repository-artifact',
        schemaPath: '#/definitions/url/pattern'
    },
    replace: {
        message: 'Format: https://www.example.com (http, ftp, sftp hyperlinks are also supported)'
    }
}]

export const repositoryCodeQueries: ErrorQuery[] = [{
    find: {
        instancePath: '/repository-code',
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

export const titleQueries: ErrorQuery[] = [{
    find: {
        instancePath: '',
        message: 'must have required property \'title\'',
        schemaPath: '#/required'
    },
    replace: {
        message: '\'title\' is a required property'
    }
}, {
    find: {
        message: 'must NOT have fewer than 1 characters',
        schemaPath: '#/properties/title/minLength'
    },
    replace: {
        message: '\'title\' needs to be at least 1 character long.'
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
