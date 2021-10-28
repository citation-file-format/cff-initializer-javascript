import { KeywordsType } from 'src/types'
import { getMyErrors } from 'src/store/validator'

export const keywordsErrors = (keywords: KeywordsType) => {
    const myErrors = [
        getMyErrors('/keywords')
    ]
    const myChildrenErrors = keywords?.map((_, index) => getMyErrors(`/keywords/${index}`))
    const errors = myChildrenErrors === undefined ? myErrors : [...myErrors, ...myChildrenErrors]
    return {
        hasError: errors.some(result => result.hasError),
        messages: errors.map(result => result.messages.join(', '))
    }
}
