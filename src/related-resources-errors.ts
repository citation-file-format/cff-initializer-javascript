import { getMyErrors } from 'src/store/validator'

export const relatedResourcesErrors = () => {
    const errors = [
        getMyErrors('/repository'),
        getMyErrors('/repository-artifact'),
        getMyErrors('/repository-code'),
        getMyErrors('/url')
    ]
    return {
        hasError: errors.some(result => result.hasError),
        messages: errors.map(result => result.messages.join(', '))
    }
}
