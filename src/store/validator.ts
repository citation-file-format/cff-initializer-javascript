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

function getMyErrorsMessageByPath (myPath: string):string {
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

function myAuthorsErrorMessages (authors: AuthorsType) {
    const authorErrors = authors.map((author, index) => {
        console.log(index, author)
        const instancePath = `/authors/${index}`
        const itemError = getMyErrorsMessageByPath(instancePath)
        const orcidError = getMyErrorsMessageByPath(instancePath + '/orcid')
        const emailError = getMyErrorsMessageByPath(instancePath + '/email')
        const affiliationError = getMyErrorsMessageByPath(instancePath + '/affiliation')
        const givenNamesError = getMyErrorsMessageByPath(instancePath + '/givenNames')
        const nameParticleError = getMyErrorsMessageByPath(instancePath + '/nameParticle')
        const nameSuffixError = getMyErrorsMessageByPath(instancePath + '/nameSuffix')
        const familyNamesError = getMyErrorsMessageByPath(instancePath + '/familyNames')
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
    console.log('authorErrors: ', authorErrors)
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
        myRootErrors: computed(() => getMyErrorsMessageByPath('')),
        myLicenseScreenErrors: computed(() => {
            return {
                license: getMyErrorsMessageByPath('/license')
            }
        }),
        myRelatedResourcesScreenErrors: computed(() => {
            return {
                url: getMyErrorsMessageByPath('/url'),
                repository: getMyErrorsMessageByPath('/repository'),
                repositoryArtifact: getMyErrorsMessageByPath('/repository-artifact'),
                repositoryCode: getMyErrorsMessageByPath('/repository-code')
            }
        }),
        myAuthorScreenErrors: computed(() => {
            return {
                otherErrors: getMyErrorsMessageByPath('/authors'),
                fields: myAuthorsErrorMessages(authors.value)
            }
        })
    }
}
