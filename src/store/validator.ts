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
import { useCff } from './cff'
import { computed, ref, watch } from 'vue'
import { AuthorsType } from '../types'

export const ajv = new Ajv({ allErrors: true })
addFormats(ajv)
ajv.addSchema(schema)

const isValidFile = ref(true)
const errors = ref<ErrorObject<string, Record<string, unknown>, unknown>[]>([])

function getErrorsMessageByPath (myPath: string):string {
    console.log('ajvErrors: ', errors.value)

    return errors.value.map((error) => {
        return {
            instancePath: error.instancePath,
            message: error.message,
            keyword: error.keyword
        }
    }).filter((item) => {
        // console.log('item.instancePath: ', item.instancePath)
        // console.log('item.message: ', item.message)
        // console.log('item.keyword: ', item.keyword)
        return item.instancePath === myPath
    }).map((item) => {
        // const parts = item.instancePath.split('/')
        // console.log('item2: ', item)
        // console.log('parts: ', parts)
        // console.log('parts.length: ', parts.length)
        return item.message
    }).join(', ')
}

function authorsErrorMessages (authors: AuthorsType) {
    const authorErrors = authors.map((author, index) => {
        const instancePath = `/authors/${index}`
        const itemError = getErrorsMessageByPath(instancePath)
        const orcidError = getErrorsMessageByPath(instancePath + '/orcid')
        const emailError = getErrorsMessageByPath(instancePath + '/email')
        const affiliationError = getErrorsMessageByPath(instancePath + '/affiliation')
        const givenNamesError = getErrorsMessageByPath(instancePath + '/givenNames')
        const nameParticleError = getErrorsMessageByPath(instancePath + '/nameParticle')
        const nameSuffixError = getErrorsMessageByPath(instancePath + '/nameSuffix')
        const familyNamesError = getErrorsMessageByPath(instancePath + '/familyNames')
        return {
            item: itemError,
            orcid: orcidError,
            email: emailError,
            affiliation: affiliationError,
            givenNames: givenNamesError,
            nameParticle: nameParticleError,
            nameSuffix: nameSuffixError,
            familyNames: familyNamesError
        }
    })
    // console.log('authorErrors: ', authorErrors)
    return authorErrors
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
    const { authors } = useCff()
    validateFile(jsObject.value)
    watch(jsObject, (newObject) => validateFile(newObject))
    return {
        isValidFile: computed(() => isValidFile.value),
        errors: computed(() => errors.value),
        myRootErrors: computed(() => getErrorsMessageByPath('')),
        abstractScreenErrors: computed(() => {
            return {
                abstract: getErrorsMessageByPath('/abstract')
            }
        }),
        startScreenErrors: computed(() => {
            return {
                title: getErrorsMessageByPath('/title'),
                message: getErrorsMessageByPath('/message')
            }
        }),
        licenseScreenErrors: computed(() => {
            return {
                license: getErrorsMessageByPath('/license')
            }
        }),
        relatedResourcesScreenErrors: computed(() => {
            return {
                url: getErrorsMessageByPath('/url'),
                repository: getErrorsMessageByPath('/repository'),
                repositoryArtifact: getErrorsMessageByPath('/repository-artifact'),
                repositoryCode: getErrorsMessageByPath('/repository-code')
            }
        }),
        authorScreenErrors: computed(() => {
            return {
                otherErrors: getErrorsMessageByPath('/authors'),
                fields: authorsErrorMessages(authors.value)
            }
        })
    }
}
