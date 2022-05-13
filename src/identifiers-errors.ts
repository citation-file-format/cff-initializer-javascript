import { IdentifiersType } from 'src/types'
import { messageErrorType, getMyErrors } from 'src/store/validator'
import { identifierHasErrors } from 'src/identifier-errors'

export const identifiersErrors = (identifiers: IdentifiersType) => {
    const errors = [
        getMyErrors('', ['identifiers']),
        getMyErrors('/identifiers')
    ]
    const myChildrenHasErrors = identifiers?.some((_, index) => identifierHasErrors(index))
    let allMessages = [] as string[]
    errors.forEach(error => {
        allMessages = allMessages.concat(error.messages)
    })

    return {
        hasError: errors.some(error => error.hasError) || myChildrenHasErrors,
        messages: allMessages
    } as messageErrorType
}
