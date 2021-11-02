import { messageErrorType, getMyErrors } from 'src/store/validator'

export const authorErrors = (index:number) => {
    const myErrors = [
        getMyErrors(`/authors/${index}`)
    ]
    const myChildrenErrors = [
        getMyErrors(`/authors/${index}/given-names`),
        getMyErrors(`/authors/${index}/name-particle`),
        getMyErrors(`/authors/${index}/family-names`),
        getMyErrors(`/authors/${index}/name-suffix`),
        getMyErrors(`/authors/${index}/email`),
        getMyErrors(`/authors/${index}/affiliation`),
        getMyErrors(`/authors/${index}/orcid`)
    ]
    const errors = [...myErrors, ...myChildrenErrors]
    return {
        hasError: errors.some(result => result.hasError),
        messages: errors[0].hasError ? errors[0].messages : []
    } as messageErrorType
}
