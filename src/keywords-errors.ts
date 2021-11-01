/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { KeywordsType } from 'src/types'
import { messageErrorType, getMyErrors } from 'src/store/validator'

export const keywordsErrors = (keywords: KeywordsType) => {
    const myErrors = [
        getMyErrors('/keywords')
    ]
    const myChildrenErrors = keywords?.map((_, index) => getMyErrors(`/keywords/${index}`))
    const errors = myChildrenErrors === undefined ? myErrors : [...myErrors, ...myChildrenErrors]
    return {
        hasError: errors.some(error => error.hasError),
        messages: errors.map(error => error.messages).flat(1)
    } as messageErrorType
}
