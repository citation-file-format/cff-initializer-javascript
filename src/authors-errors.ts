/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { AuthorsType } from 'src/types'
import { messageErrorType, getMyErrors } from 'src/store/validator'
import { authorErrors } from 'src/author-errors'

export const authorsErrors = (authors:AuthorsType) => {
    const myErrors = [
        getMyErrors('', ['authors']),
        getMyErrors('/authors')
    ]
    const myChildrenErrors = authors?.map((_, index) => authorErrors(index))
    const errors = myChildrenErrors === undefined ? myErrors : [...myErrors, ...myChildrenErrors]
    return {
        hasError: errors.some(error => error.hasError),
        messages: errors.map(error => error.messages).flat(1)
    } as messageErrorType
}
