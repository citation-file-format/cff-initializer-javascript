import { getMyErrorsArray } from 'src/store/validator'
import { useCff } from 'src/store/cff'

export const identifierHasErrors = (index:number): boolean => {
    const { identifiers } = useCff()
    console.log(index)
    if (identifiers.value) {
        const errors = getMyErrorsArray([
            { instancePath: `/identifiers/${index}/type` },
            { schemaPath: `#/definitions/${identifiers.value[index].type}/pattern` }
        ])
        return errors.length > 0
    } else {
        return true
    }
}
