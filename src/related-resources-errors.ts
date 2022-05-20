import { getMyErrorsArray } from 'src/store/validator'

export const relatedResourcesErrors = () => {
    const errors = getMyErrorsArray([
        { instancePath: '/repository' },
        { instancePath: '/repository-artifact' },
        { instancePath: '/repository-code' },
        { instancePath: '/url' }
    ])
    return {
        hasError: errors.length > 0,
        messages: errors
    }
}
