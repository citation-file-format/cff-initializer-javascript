import { AuthorsType } from 'src/types'
import { messageErrorType, getMyErrorsArray } from 'src/store/validator'

export const authorHasErrors = (index:number): boolean => {
    const errors = getMyErrorsArray([
        { instancePath: `/authors/${index}/given-names` },
        { instancePath: `/authors/${index}/name-particle` },
        { instancePath: `/authors/${index}/family-names` },
        { instancePath: `/authors/${index}/name-suffix` },
        { instancePath: `/authors/${index}/email` },
        { instancePath: `/authors/${index}/affiliation` },
        { instancePath: `/authors/${index}/orcid` }
    ])

    return errors.length > 0
}

export const authorsErrors = (authors:AuthorsType) => {
    const allMessages = getMyErrorsArray([
        { params: { missingProperty: 'authors' } },
        { instancePath: '/authors' }
    ])
    let myChildrenErrors = false
    if (authors) {
        myChildrenErrors = authors.some((_, index) => authorHasErrors(index))
    }

    return {
        hasError: allMessages.length > 0 || myChildrenErrors,
        messages: allMessages
    } as messageErrorType
}
