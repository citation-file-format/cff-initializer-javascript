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

function getMyErrorsMessageByPath (myPath: string):string {
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
        })
    }
}
