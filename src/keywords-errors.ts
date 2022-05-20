import { KeywordsType } from 'src/types'
import { messageErrorType, getMyErrors, getMyErrorsArray } from 'src/store/validator'

export const keywordsErrors = (keywords: KeywordsType) => {
    const allMessages = getMyErrorsArray([
        { instancePath: '/keywords' }
    ])

    const myChildrenHasErrors = keywords?.some((_, index) => getMyErrors({ instancePath: `/keywords/${index}` }) !== null)

    return {
        hasError: allMessages.length > 0 || myChildrenHasErrors,
        messages: allMessages
    } as messageErrorType
}
