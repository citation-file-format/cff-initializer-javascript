/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
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
    return {
        hasError: errors.some(error => error.hasError),
        messages: errors.map(error => error.messages).flat(1)
    } as messageErrorType
}
