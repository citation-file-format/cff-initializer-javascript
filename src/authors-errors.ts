import { AuthorsType } from 'src/types'
import { messageErrorType, getMyErrors } from 'src/store/validator'
import { authorErrors } from 'src/author-errors'
import { ErrorObject } from 'ajv'

export const authorsErrors = (authors:AuthorsType) => {
    const myErrors = [
        getMyErrors('', ['authors']),
        getMyErrors('/authors')
    ]
    const myChildrenErrors = authors?.map((_, index) => authorErrors(index))
    const errors = myChildrenErrors === undefined ? myErrors : [...myErrors, ...myChildrenErrors]
    let allMessages = [] as ErrorObject[]
    errors.forEach(error => {
        allMessages = allMessages.concat(error.messages)
    })
    return {
        hasError: errors.some(error => error.hasError),
        messages: allMessages
    } as messageErrorType
}
