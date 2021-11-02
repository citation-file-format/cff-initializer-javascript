import { KeywordsType } from 'src/types'
import { messageErrorType, getMyErrors } from 'src/store/validator'

export const keywordsErrors = (keywords: KeywordsType) => {
    const myErrors = [
        getMyErrors('/keywords')
    ]
    const myChildrenErrors = keywords?.map((_, index) => getMyErrors(`/keywords/${index}`))
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
