import { AuthorsType } from 'src/types'
import { getMyErrors } from 'src/store/validator'
import { authorErrors } from 'src/author-errors'

export const authorsErrors = (authors:AuthorsType) => {
    const myErrors = [
        getMyErrors('', ['authors']),
        getMyErrors('/authors')
    ]
    const myChildrenErrors = authors?.map((_, index) => authorErrors(index))
    const errors = myChildrenErrors === undefined ? myErrors : [...myErrors, ...myChildrenErrors]
    return {
        hasError: errors.some(result => result.hasError),
        messages: errors.map(result => result.messages.join(', '))
    }
}
