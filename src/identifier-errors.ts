import { getMyErrors } from 'src/store/validator'

export const identifierHasErrors = (index:number) => {
    const errors = [
        getMyErrors(`/identifiers/${index}/type`),
        getMyErrors(`/identifiers/${index}/value`),
        getMyErrors(`/identifiers/${index}/description`)
    ]
    return errors.some(result => result.hasError)
}
