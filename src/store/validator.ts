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

const isValidFile = ref(true)
const errors = ref<ErrorObject<string, Record<string, unknown>, unknown>[]>([])

// quasar error type
type CffErrorType = {
    hasError: boolean,
    message: string
}

type fieldErrorType = Record<string, CffErrorType>

type fieldArrayErrorType = {
    fields: Record<string, CffErrorType>,
    errors: Array<CffErrorType>
}[]

type screenErrorType = {
    message: string,
    isValid: boolean,
    fields: fieldErrorType,
    items: fieldArrayErrorType
}

// const screenErrors = useScreenErrors ()
// for the field --> screenErrors.start.fields.title // field error
// for array with fields --> screenErrors.authors.items[0].fields.orcid
// for array with fields --> screenErrors.authors.items[0].errors

// for the stepper --> screenErrors.start.hasErrors // boolean if screen has an error
// for the screen --> screenErrors.start.errors  // not field related but general like duplicates

function groupErrors (ajvErrors: ErrorObject<string, Record<string, unknown>, unknown>[]) {
    const cffErrors: any = {}
    console.log('ajvErrors:', ajvErrors)
    ajvErrors.forEach(e => {
        // find all missing required fields
        if (e.instancePath === '' && e.keyword === 'required') {
            const missing = e.params.missingProperty as string
            if (!cffErrors[missing]) {
                cffErrors[missing] = []
            }
            cffErrors[missing].push(e.message)
            return
        }
        // split schema path
        const parts = e.instancePath.split('/')
        if (parts.length === 2) {
            console.log('parts.length === 2 parts:', parts)
            if (!cffErrors[parts[1]]) {
                cffErrors[parts[1]] = []
            }
            cffErrors[parts[1]].push(e.message)
            return
        }

        // authors data
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
                // return
            }
        }

        // // identifiers data
        // if (e.instancePath.startsWith('/identifiers')) {
        //     if (!cffErrors.identifiersList) {
        //         cffErrors.identifiersList = []
        //     }
        //     if (parts.length === 3) {
        //         // on author[parts[2]] object
        //         if (!cffErrors.identifiersList[parts[2]]) {
        //             cffErrors.identifiersList[parts[2]] = { errors: [] }
        //         }
        //         cffErrors.identifiersList[parts[2]].errors.push(e.message)
        //         return
        //     }
        //     if (parts.length === 4) {
        //         // on identifiers[parts[2]][parts[3]] prop
        //         if (!cffErrors.identifiersList[parts[2]]) {
        //             cffErrors.identifiersList[parts[2]] = { errors: [] }
        //         }
        //         if (!cffErrors.identifiersList[parts[2]][parts[3]]) {
        //             cffErrors.identifiersList[parts[2]][parts[3]] = []
        //         }
        //         cffErrors.identifiersList[parts[2]][parts[3]].push(e.message)
        //     }
        // }
    })
    console.log('cffErrors:', cffErrors)
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

export function getErrorAndMessage (result: string | true) {
    const hasError = result !== true
    const message = hasError ? result : ''
    return {
        hasError,
        message
    }
}

function initializeFields (fieldNames: string[]):fieldErrorType {
    const fields:fieldErrorType = {}
    const initField = (fieldName: string) => {
        fields[fieldName] = {
            hasError: false,
            message: ''
        }
    }
    fieldNames.forEach(initField)
    return fields
}

function setFieldErrorValues (fields: fieldErrorType, groupedErrors: Record<string, string[]>) {
    let screenHasError = false
    Object.entries(fields).forEach(([fieldName, error]) => {
        if (groupedErrors[fieldName]) {
            error.hasError = true
            error.message = groupedErrors[fieldName].join(', ')
            screenHasError = true
        }
    })
    return screenHasError
}

function getStartScreenErrors (groupedErrors: Record<string, string[]>):screenErrorType {
    const fieldNames = ['message', 'title', 'type']
    const fields = initializeFields(fieldNames)
    const screenHasError = setFieldErrorValues(fields, groupedErrors)
    return {
        message: '',
        isValid: screenHasError,
        fields,
        items: []
    }
}

export function useScreenErrors () {
    const groupedErrors = computed(() => groupErrors(errors.value))
    return {
        start: computed(() => getStartScreenErrors(groupedErrors.value))
        // authors: !(groupedErrors.value.authors?.length || groupedErrors.value.identifiersList?.length),
        // identifiers: !(groupedErrors.value.identifiers?.length || groupedErrors.value.authorsList?.length),
        // 'related-resources': !(groupedErrors.value.url?.length || groupedErrors.value.repository?.length || groupedErrors.value['repository-artifact']?.length || groupedErrors.value['repository-code']?.length),
        // abstract: !(groupedErrors.value.abstract?.length),
        // keywords: !(groupedErrors.value.keywords?.length),
        // license: !(groupedErrors.value.license?.length),
        // 'version-specific': !(groupedErrors.value.commit?.length || groupedErrors.value.version?.length || groupedErrors.value['date-released']?.length)
    }
}

function validateFile (jsObject: any) {
    isValidFile.value = ajv.validate(schema.$id, jsObject)
    if (ajv.errors) {
        errors.value = ajv.errors
    } else {
        errors.value = []
    }
}

export function useFileValidator () {
    const { jsObject } = useCffstr()
    validateFile(jsObject.value)
    watch(jsObject, (newObject) => validateFile(newObject))
    const groupedErrors = computed(() => groupErrors(errors.value))
    return {
        isValidFile: computed(() => isValidFile.value),
        errors: computed(() => errors.value),
        groupedErrors,
        validScreens: computed(() => validScreens(groupedErrors))
    }
}
