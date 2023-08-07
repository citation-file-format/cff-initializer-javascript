import * as yaml from 'js-yaml'
import { AuthorKind, AuthorsType, CffType, EntityType, IdentifierType, IdentifierTypeType, IdentifiersType, KeywordsType, PersonType, TypeType } from 'src/types'
import { computed, ref } from 'vue'
import camelCase from 'camelcase'

const getInitialData = () => {
    return {
        abstract: undefined,
        authors: [],
        authorsKind: [],
        cffVersion: '1.2.0',
        commit: undefined,
        dateReleased: undefined,
        identifiers: undefined,
        keywords: undefined,
        license: undefined,
        message: 'If you use this software, please cite it using the metadata from this file.',
        repository: undefined,
        repositoryArtifact: undefined,
        repositoryCode: undefined,
        title: '',
        type: 'software',
        url: undefined,
        version: undefined
    } as CffType
}

const cff = ref(getInitialData())
const extraCffFields = ref('')
export const personProperties = [
    'affiliation',
    'email',
    'familyNames',
    'givenNames',
    'nameParticle',
    'nameSuffix',
    'orcid'
]
export const entityProperties = [
    'address',
    'alias',
    'city',
    'country',
    'dateEnd',
    'dateStart',
    'email',
    'fax',
    'location',
    'name',
    'orcid',
    'postCode',
    'region',
    'tel',
    'website'
]
const identifierProperties = ['type', 'value', 'description']

export const updateCff = (newCffstr: string) => {
    let msg = [] as string[]
    let success = false
    try {
        const existingCff = yaml.load(newCffstr)
        extraCffFields.value = ''

        if (!existingCff) {
            throw new Error('Error: CFF is empty.')
        } else if (Array.isArray(existingCff) || typeof existingCff === 'string') {
            throw new Error('Error: CFF is invalid. It should be a YAML map.')
        }

        const existingCffProperties = Object.getOwnPropertyNames(existingCff) as Array<keyof typeof existingCff>
        if (existingCffProperties.length === 0) {
            throw new Error('Error: CFF is empty.')
        } else if (existingCffProperties.filter(x => x === '[object Object]').length > 0) {
            throw new Error('Error: invalid object in keys (did you use {} as key?).')
        } else if (existingCffProperties.filter(x => !x).length > 0) {
            throw new Error('Error: invalid null property.')
        }

        cff.value = getInitialData()
        const cffProperties = Object.getOwnPropertyNames(cff.value) as Array<keyof CffType>
        existingCffProperties.forEach((property) => {
            const camelCaseProperty = camelCase(property) as keyof CffType
            const value = existingCff[property]

            if (cffProperties.includes(camelCaseProperty)) {
                // Treating all special cases
                if (property === 'type') {
                    if (value !== 'software' && value !== 'dataset') {
                        msg.push(`Invalid type '${value as string}'. Using 'software' instead.`)
                        cff.value.type = 'software'
                    } else {
                        cff.value.type = value
                    }
                } else if (property === 'cff-version') {
                    cff.value.cffVersion = '1.2.0'
                    if (value !== '1.2.0') {
                        msg.push('cff-version was updated to 1.2.0. This might led to some issues, so verify before downloading.')
                    }
                } else if (property === 'authors') {
                    cff.value.authors = [] as AuthorsType

                    const existingCffAuthors = value as Array<Record<string, string>>
                    existingCffAuthors.forEach((existingAuthor) => {
                        const notAnAuthorReason = [[], []] as Array<Array<string>>
                        const isPerson = Object.getOwnPropertyNames(existingAuthor).reduce(
                            (curValue, authorProperty) => {
                                if (personProperties.includes(camelCase(authorProperty))) {
                                    return curValue
                                }
                                notAnAuthorReason[0].push(authorProperty)
                                return false
                            },
                            true
                        )
                        const isEntity = Object.getOwnPropertyNames(existingAuthor).reduce(
                            (curValue, authorProperty) => {
                                if (entityProperties.includes(camelCase(authorProperty))) {
                                    return curValue
                                }
                                notAnAuthorReason[1].push(authorProperty)
                                return false
                            },
                            true
                        )
                        if (isPerson) {
                            const newPerson: PersonType = {}
                            Object.getOwnPropertyNames(existingAuthor)
                                .forEach((personProperty) => {
                                    const camelCasePersonProperty = camelCase(personProperty) as keyof typeof newPerson
                                    const value = existingAuthor[personProperty]
                                    newPerson[camelCasePersonProperty] = value
                                })
                            cff.value.authors.push(newPerson)
                            cff.value.authorsKind.push('person')
                        } else if (isEntity) {
                            const newEntity: EntityType = {}
                            Object.getOwnPropertyNames(existingAuthor)
                                .forEach((entityProperty) => {
                                    const camelCaseEntityProperty = camelCase(entityProperty) as keyof typeof newEntity
                                    const value = existingAuthor[entityProperty]
                                    newEntity[camelCaseEntityProperty] = value
                                })
                            cff.value.authors.push(newEntity)
                            cff.value.authorsKind.push('entity')
                        } else {
                            msg.push(`Could not add author. It is not a Person due to fields ${notAnAuthorReason[0].join(', ')} and not an Entity due to fields ${notAnAuthorReason[1].join(', ')}. Skipping.`)
                        }
                    })
                } else if (property === 'identifiers') {
                    cff.value.identifiers = [] as IdentifiersType

                    const existingCffIdentifiers = value as Array<Record<string, string>>
                    existingCffIdentifiers.forEach((existingIdentifier) => {
                        const newIdentifier: IdentifierType = { type: 'other', value: '' }
                        Object.getOwnPropertyNames(existingIdentifier)
                            .forEach((identifierProperty) => {
                                const camelCaseIdentifierProperty = camelCase(identifierProperty) as keyof typeof newIdentifier
                                const value = existingIdentifier[identifierProperty]
                                if (identifierProperties.includes(camelCaseIdentifierProperty)) {
                                    if (camelCaseIdentifierProperty !== 'type' ||
                                        ['doi', 'url', 'swh', 'other'].includes(value)) {
                                        newIdentifier[camelCaseIdentifierProperty] = existingIdentifier[identifierProperty] as IdentifierTypeType
                                    } else if (camelCaseIdentifierProperty === 'type') {
                                        msg.push(`Invalid value '${value}' for identifier type. Using 'other' instead.`)
                                        newIdentifier.type = 'other'
                                    }
                                } else {
                                    msg.push(`Property '${identifierProperty}: ${value}' inside 'identifiers' was ignored. Check if the key is correct.`)
                                }
                            })
                        cff.value.identifiers?.push(newIdentifier)
                    })
                } else if (property === 'date-released') {
                    const value = existingCff[property]
                    if (typeof value === 'string') {
                        cff.value.dateReleased = value
                    } else {
                        cff.value.dateReleased = (value as Date).toISOString().slice(0, 10)
                    }
                } else {
                    // No special treatment, just add to cff
                    cff.value[camelCaseProperty] = existingCff[property]
                }
            } else {
                // Existing CFF property is not part of cff, so add it to extra
                const thisYamlElement = {}
                thisYamlElement[property] = existingCff[property]
                extraCffFields.value += yaml.dump(thisYamlElement)
                msg.push(`Property '${property as string}' was not identified as a basic field, so it was passed as an extra cff field.`)
            }
        })

        success = true
    } catch (error) {
        if (error instanceof yaml.YAMLException) {
            msg = ['Error: could not parse CFF because of the following YAML error: ' + error.message]
        } else if (error instanceof Error) {
            msg = [error.message]
        } else {
            msg = ['Uncaught error. Please report this issue.']
        }
    }

    return {
        success,
        msg
    }
}

export const useCff = () => {
    return {
        abstract: computed(() => cff.value.abstract),
        authors: computed(() => cff.value.authors),
        authorsKind: computed(() => cff.value.authorsKind),
        commit: computed(() => cff.value.commit),
        cffVersion: computed(() => cff.value.cffVersion),
        dateReleased: computed(() => cff.value.dateReleased),
        extraCffFields: computed(() => extraCffFields.value),
        identifiers: computed(() => cff.value.identifiers),
        keywords: computed(() => cff.value.keywords),
        license: computed(() => cff.value.license),
        message: computed(() => cff.value.message),
        repository: computed(() => cff.value.repository),
        repositoryArtifact: computed(() => cff.value.repositoryArtifact),
        repositoryCode: computed(() => cff.value.repositoryCode),
        title: computed(() => cff.value.title),
        type: computed(() => cff.value.type),
        url: computed(() => cff.value.url),
        version: computed(() => cff.value.version),
        setAbstract: (newAbstract: string) => { cff.value.abstract = newAbstract === '' ? undefined : newAbstract },
        setAuthors: (newAuthors: AuthorsType, newAuthorsKind: Array<AuthorKind>) => {
            cff.value.authors = newAuthors
            cff.value.authorsKind = newAuthorsKind
        },
        setCommit: (newCommit: string) => { cff.value.commit = newCommit === '' ? undefined : newCommit },
        setDateReleased: (newDateReleased: string) => { cff.value.dateReleased = newDateReleased === '' ? undefined : newDateReleased },
        setExtraCffFields: (newExtraCffFields: string) => { extraCffFields.value = newExtraCffFields },
        setIdentifiers: (newIdentifiers: IdentifiersType) => { cff.value.identifiers = newIdentifiers === [] ? undefined : newIdentifiers },
        setKeywords: (newKeywords: KeywordsType) => { cff.value.keywords = newKeywords === [] ? undefined : newKeywords },
        setLicense: (newLicense: string) => { cff.value.license = newLicense === '' ? undefined : newLicense },
        setMessage: (newMessage: string) => { cff.value.message = newMessage },
        setRepository: (newRepository: string) => { cff.value.repository = newRepository === '' ? undefined : newRepository },
        setRepositoryArtifact: (newRepositoryArtifact: string) => { cff.value.repositoryArtifact = newRepositoryArtifact === '' ? undefined : newRepositoryArtifact },
        setRepositoryCode: (newRepositoryCode: string) => { cff.value.repositoryCode = newRepositoryCode === '' ? undefined : newRepositoryCode },
        setTitle: (newTitle: string) => { cff.value.title = newTitle },
        setType: (newType: TypeType) => { cff.value.type = newType },
        setUrl: (newUrl: string) => { cff.value.url = newUrl === '' ? undefined : newUrl },
        setVersion: (newVersion: string) => { cff.value.version = newVersion === '' ? undefined : newVersion },
        reset: () => {
            cff.value = getInitialData()
            extraCffFields.value = ''
        }
    }
}
