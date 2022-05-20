import { AuthorsType } from 'src/types'
import { messageErrorType, getMyErrorsArray } from 'src/store/validator'
import { authorHasErrors } from 'src/author-errors'

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
