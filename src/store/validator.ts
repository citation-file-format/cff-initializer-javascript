/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import Ajv, { ErrorObject } from 'ajv'
import addFormats from 'ajv-formats'
import schema from '../schemas/1.2.0/schema.json'
import { useCffstr } from './cffstr'
import { computed, ref, watch } from 'vue'

export const ajv = new Ajv({ allErrors: true })
addFormats(ajv)
ajv.addSchema(schema)

const isValid = ref(true)
const errors = ref<ErrorObject<string, Record<string, unknown>, unknown>[]>([])

function groupErrors (ajvErrors: ErrorObject<string, Record<string, unknown>, unknown>[]) {
    const cffErrors: any = {}
    ajvErrors.forEach(e => {
        if (e.instancePath === '' && e.keyword === 'required') {
            const missing = e.params.missingProperty as string
            if (!cffErrors[missing]) {
                cffErrors[missing] = []
            }
            cffErrors[missing].push(e.message)
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
            if (!cffErrors.authorsList) {
                cffErrors.authorsList = []
            }
            if (parts.length === 3) {
                // on author[parts[2]] object
                if (!cffErrors.authorsList[parts[2]]) {
                    cffErrors.authorsList[parts[2]] = { errors: [] }
                }
                cffErrors.authorsList[parts[2]].errors.push(e.message)
                return
            }
            if (parts.length === 4) {
                // on authors[parts[2]][parts[3]] prop
                if (!cffErrors.authorsList[parts[2]]) {
                    cffErrors.authorsList[parts[2]] = { errors: [] }
                }
                if (!cffErrors.authorsList[parts[2]][parts[3]]) {
                    cffErrors.authorsList[parts[2]][parts[3]] = []
                }
                cffErrors.authorsList[parts[2]][parts[3]].push(e.message)
                return
            }
        }
        if (e.instancePath.startsWith('/identifiers')) {
            if (!cffErrors.identifiersList) {
                cffErrors.identifiersList = []
            }
            if (parts.length === 3) {
                // on author[parts[2]] object
                if (!cffErrors.identifiersList[parts[2]]) {
                    cffErrors.identifiersList[parts[2]] = { errors: [] }
                }
                cffErrors.identifiersList[parts[2]].errors.push(e.message)
                return
            }
            if (parts.length === 4) {
                // on identifiers[parts[2]][parts[3]] prop
                if (!cffErrors.identifiersList[parts[2]]) {
                    cffErrors.identifiersList[parts[2]] = { errors: [] }
                }
                if (!cffErrors.identifiersList[parts[2]][parts[3]]) {
                    cffErrors.identifiersList[parts[2]][parts[3]] = []
                }
                cffErrors.identifiersList[parts[2]][parts[3]].push(e.message)
            }
        }
    })
    console.log(cffErrors)
    return cffErrors
}

function validScreens (groupedErrors: any) {
    return {
        start: !(groupedErrors.value.title?.length || groupedErrors.value.message?.length || groupedErrors.value.type?.length),
        authors: !(groupedErrors.value.authors?.length || groupedErrors.value.identifiersList?.length),
        identifiers: !(groupedErrors.value.identifiers?.length || groupedErrors.value.authorsList?.length),
        'related-resources': !(groupedErrors.value.url?.length || groupedErrors.value.repository?.length || groupedErrors.value['repository-artifact']?.length || groupedErrors.value['repository-code']?.length),
        abstract: !(groupedErrors.value.abstract?.length),
        keywords: !(groupedErrors.value.keywords?.length),
        license: !(groupedErrors.value.license?.length),
        'version-specific': !(groupedErrors.value.commit?.length || groupedErrors.value.version?.length || groupedErrors.value['date-released']?.length)
    }
}

function validateFile (cffAsObject: any) {
    isValid.value = ajv.validate(schema.$id, cffAsObject)
    if (ajv.errors) {
        errors.value = ajv.errors
    } else {
        errors.value = []
    }
}

export function useFileValidator () {
    const { asObject } = useCffstr()
    validateFile(asObject.value)
    watch(asObject, (newObject) => validateFile(newObject))
    const groupedErrors = computed(() => groupErrors(errors.value))
    return {
        isValid: computed(() => isValid.value),
        errors: computed(() => errors.value),
        groupedErrors,
        validScreens: computed(() => validScreens(groupedErrors))
    }
}
