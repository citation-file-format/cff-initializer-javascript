import { IdentifiersType } from 'src/types'
import { messageErrorType, getArrayOfMatchingError, getMatchingError } from 'src/store/validator'
import { useCff } from 'src/store/cff'

export const identifierHasErrors = (index:number): boolean => {
    const { identifiers } = useCff()
    if (identifiers.value) {
        const errors = getMatchingError({
            instancePath: `/identifiers/${index}/value`,
            schemaPath: `#/definitions/${identifiers.value[index].type}/pattern`
        })
        return errors != null
    }

    return true
}

export const identifiersErrors = (identifiers: IdentifiersType) => {
    const allMessages = getArrayOfMatchingError([
        { instancePath: '/identifiers' }
    ])
    let myChildrenErrors = false
    if (identifiers) {
        myChildrenErrors = identifiers.some((_, index) => identifierHasErrors(index))
    }

    return {
        hasError: allMessages.length > 0 || myChildrenErrors,
        messages: allMessages
    } as messageErrorType
}
