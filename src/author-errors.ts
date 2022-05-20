import { getMyErrorsArray } from 'src/store/validator'

export const authorHasErrors = (index:number): boolean => {
    const errors = getMyErrorsArray([
        { instancePath: `/authors/${index}/given-names` },
        { instancePath: `/authors/${index}/name-particle` },
        { instancePath: `/authors/${index}/family-names` },
        { instancePath: `/authors/${index}/name-suffix` },
        { instancePath: `/authors/${index}/email` },
        { instancePath: `/authors/${index}/affiliation` },
        { instancePath: `/authors/${index}/orcid` }
    ])

    return errors.length > 0
}
