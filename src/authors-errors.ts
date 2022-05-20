import { AuthorsType } from 'src/types'
import { messageErrorType, getArrayOfMatchingError } from 'src/store/validator'

export const authorHasErrors = (index:number): boolean => {
    const errors = getArrayOfMatchingError([
        { instancePath: `/authors/${index}/email` },
        { instancePath: `/authors/${index}/orcid` }
    ])

    return errors.length > 0
}

export const authorsErrors = (authors:AuthorsType) => {
    const allMessages = getArrayOfMatchingError([
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
