import { messageErrorType, getMyErrors } from 'src/store/validator'

export const identifierErrors = (index:number) => {
    const myErrors = [
        getMyErrors(`/identifiers/${index}`)
    ]
    const myChildrenErrors = [
        getMyErrors(`/identifiers/${index}/type`),
        getMyErrors(`/identifiers/${index}/value`),
        getMyErrors(`/identifiers/${index}/description`)
    ]
    const errors = [...myErrors, ...myChildrenErrors]
    return {
        hasError: errors.some(result => result.hasError),
        messages: []
    } as messageErrorType
}
