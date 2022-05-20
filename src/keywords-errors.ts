import { KeywordsType } from 'src/types'
import { messageErrorType, getMatchingError, getArrayOfMatchingError } from 'src/store/validator'

export const keywordsErrors = (keywords: KeywordsType) => {
    const allMessages = getArrayOfMatchingError([
        { instancePath: '/keywords' }
    ])

    const myChildrenHasErrors = keywords?.some((_, index) => getMatchingError({ instancePath: `/keywords/${index}` }) !== null)

    return {
        hasError: allMessages.length > 0 || myChildrenHasErrors,
        messages: allMessages
    } as messageErrorType
}
