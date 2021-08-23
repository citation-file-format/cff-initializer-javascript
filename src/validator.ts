import Ajv, { ErrorObject } from 'ajv'
import addFormats from 'ajv-formats'
import schema from './schemas/1.2.0/schema.json'
import { useCffstr } from './store/cffstr'
import { computed, ref, watch } from 'vue'

export const ajv = new Ajv({ allErrors: true })
addFormats(ajv)
ajv.addSchema(schema)

export const makeFieldValidator = (subschema: string) => {
    return (val: unknown) => {
        const isValid = ajv.validate(`${schema.$id}#${subschema}`, val)
        if (isValid) {
            return true
        } else {
            const messages = ajv.errors?.map(e => e.message) as unknown as string[]
            return messages.join(', ')
        }
    }
}

export const makeOptionalFieldValidator = (subschema: string) => {
    const fn = makeFieldValidator(subschema)
    return (val: unknown) => {
        if (val === '') {
            return true
        } else {
            return fn(val)
        }
    }
}

const isValid = ref(true)
const errors = ref<ErrorObject<string, Record<string, unknown>, unknown>[]>([])

function reshapeErrors (ajvErrors: ErrorObject<string, Record<string, unknown>, unknown>[]) {
    const cffErrors = {}
    ajvErrors.forEach(e => {
        if (e.instancePath === '' && e.keyword === 'required') {
            if (!cffErrors[e.params.missingProperty]) {
                cffErrors[e.params.missingProperty] = []
            }
            cffErrors[e.params.missingProperty].push(e.message)
            return
        }
        const parts = e.instancePath.split('/')
        if (parts.length === 2) {
            if (!cffErrors[parts[1]]) {
                cffErrors[parts[1]] = []
            }
            cffErrors[parts[1]].push(e.message)
            return
        }
        if (e.instancePath.startsWith('/authors')) {
            if (!cffErrors.authors) {
                cffErrors.authors = []
            }
            if (parts.length === 3) {
                // on author[parts[2]] object
                if (!cffErrors.authors[parts[2]]) {
                    cffErrors.authors[parts[2]] = { errors: [] }
                }
                cffErrors.authors[parts[2]].errors.push(e.message)
                return
            }
            if (parts.length === 4) {
                // on authors[parts[2]][parts[3]] object
                if (!cffErrors.authors[parts[2]]) {
                    cffErrors.authors[parts[2]] = { errors: [] }
                }
                if (!cffErrors.authors[parts[2]][parts[3]]) {
                    cffErrors.authors[parts[2]][parts[3]] = []
                }
                cffErrors.authors[parts[2]][parts[3]].push(e.message)
                return
            }
        }
        if (e.instancePath.startsWith('/identifiers')) {
            if (!cffErrors.identifiers) {
                cffErrors.identifiers = []
            }
            if (parts.length === 3) {
                // on author[parts[2]] object
                if (!cffErrors.identifiers[parts[2]]) {
                    cffErrors.identifiers[parts[2]] = { errors: [] }
                }
                cffErrors.identifiers[parts[2]].errors.push(e.message)
                return
            }
            if (parts.length === 4) {
                // on identifiers[parts[2]][parts[3]] object
                if (!cffErrors.identifiers[parts[2]]) {
                    cffErrors.identifiers[parts[2]] = { errors: [] }
                }
                if (!cffErrors.identifiers[parts[2]][parts[3]]) {
                    cffErrors.identifiers[parts[2]][parts[3]] = []
                }
                cffErrors.identifiers[parts[2]][parts[3]].push(e.message)
            }
        }
    })
    return cffErrors
}

function validScreens (cffErrors) {
    return {
        start: !(cffErrors.value.title?.length || cffErrors.value.message?.length || cffErrors.value.type?.length),
        authors: !(cffErrors.value.authors?.length),
        identifiers: !(cffErrors.value.identifiers?.length),
        'related-resources': !(cffErrors.value.url?.length || cffErrors.value.repository?.length || cffErrors.value['repository-artifact']?.length || cffErrors.value['repository-code']?.length),
        abstract: !(cffErrors.value.abstract?.length),
        keywords: !(cffErrors.value.keywords?.length),
        license: !(cffErrors.value.license?.length),
        'version-specific': !(cffErrors.value.commit?.length || cffErrors.value.version?.length || cffErrors.value['date-released']?.length)
    }
}

export function useFileValidator () {
    const { asObject } = useCffstr()
    watch(asObject, (newObject) => {
        console.log(newObject)
        isValid.value = ajv.validate(schema.$id, newObject)
        console.log(isValid.value)
        console.log(ajv.errors)
        if (ajv.errors) {
            console.log(ajv.errors.length)
            errors.value = ajv.errors
        } else {
            errors.value = []
        }
    })
    const cffErrors = computed(() => reshapeErrors(errors.value))
    return {
        isValid: computed(() => isValid.value),
        errors: computed(() => errors.value),
        cffErrors,
        validScreens: computed(() => validScreens(cffErrors))
    }
}
