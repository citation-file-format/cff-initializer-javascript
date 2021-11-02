import { IdentifiersType } from 'src/types'
import { messageErrorType, getMyErrors } from 'src/store/validator'
import { identifierErrors } from 'src/identifier-errors'

export const identifiersErrors = (identifiers: IdentifiersType) => {
    const myErrors = [
        getMyErrors('', ['identifiers']),
        getMyErrors('/identifiers')
    ]
    const myChildrenErrors = identifiers?.map((_, index) => identifierErrors(index))
    const errors = myChildrenErrors === undefined ? myErrors : [...myErrors, ...myChildrenErrors]
    let allMessages = [] as string[]
    errors.forEach(error => {
        allMessages = allMessages.concat(error.messages)
    })

    return {
        hasError: errors.some(error => error.hasError),
        messages: allMessages
    } as messageErrorType
}
