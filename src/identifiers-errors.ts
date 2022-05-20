import { IdentifiersType } from 'src/types'
import { messageErrorType, getMyErrorsArray } from 'src/store/validator'
import { identifierHasErrors } from 'src/identifier-errors'

export const identifiersErrors = (identifiers: IdentifiersType) => {
    const allMessages = getMyErrorsArray([
        { instancePath: '/identifiers' }
    ])
    let myChildrenErrors = false
    if (identifiers) {
        myChildrenErrors = identifiers.some((_, index) => identifierHasErrors(index))
    }

    return {
        hasError: allMessages.length > 0 || myChildrenErrors,
        messages: allMessages
    } as messageErrorType
}
