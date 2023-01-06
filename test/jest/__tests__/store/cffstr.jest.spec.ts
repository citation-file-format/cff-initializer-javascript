import * as yaml from 'js-yaml'
import { beforeEach, describe, expect, it } from '@jest/globals'
import { useCff } from 'src/store/cff'
import { useCffstr } from 'src/store/cffstr'

describe('useCffstr', () => {
    const cff = useCff()
    const { cffstr } = useCffstr()
    const parsedCffStr = () => { return yaml.load(cffstr.value) }
    const cffMinimumFields = {
        'cff-version': '1.2.0',
        type: 'software',
        title: '',
        message: 'If you use this software, please cite it using the metadata from this file.',
        authors: []
    }
    const cffstrFields = [
        { field: 'abstract', value: 'Description', cffFunction: cff.setAbstract },
        { field: 'authors', value: [{ 'given-names': 'John', 'family-names': 'Doe', orcid: 'https://1234-1234-1234-123X' }], cffFunction: cff.setAuthors },
        { field: 'commit', value: '1234567890abcde', cffFunction: cff.setCommit },
        { field: 'date-released', value: '2022-01-01', cffFunction: cff.setDateReleased },
        { field: 'identifiers', value: [{ type: 'doi', value: '10.5281/zenodo.5171937' }], cffFunction: cff.setIdentifiers },
        { field: 'keywords', value: ['kw1', 'kw2'], cffFunction: cff.setKeywords },
        { field: 'license', value: 'Apache-2.0', cffFunction: cff.setLicense },
        { field: 'message', value: 'Cite me!', cffFunction: cff.setMessage },
        { field: 'repository-artifact', value: 'https://a', cffFunction: cff.setRepositoryArtifact },
        { field: 'repository-code', value: 'https://a', cffFunction: cff.setRepositoryCode },
        { field: 'repository', value: 'https://a', cffFunction: cff.setRepository },
        { field: 'title', value: 'Title', cffFunction: cff.setTitle },
        { field: 'type', value: 'dataset', cffFunction: cff.setType },
        { field: 'url', value: 'https://a', cffFunction: cff.setUrl },
        { field: 'version', value: '1.2.3', cffFunction: cff.setVersion }
    ]

    beforeEach(() => {
        cff.reset()
    })
    describe('initial content', () => {
        it('should only have fields with defaults', () => {
            const expected = cffMinimumFields
            expect(parsedCffStr()).toEqual(expected)
        })
    })

    describe('changing only a single field at a time', () => {
        for (const fieldData of cffstrFields) {
            const { field, value, cffFunction } = fieldData
            it(`should work for field '${field}'`, () => {
                cffFunction(value as never)
                const expected = { ...cffMinimumFields, [field]: value }
                expect(parsedCffStr()).toEqual(expected)
            })
        }
    })

    describe('adding every field', () => {
        it('should work', () => {
            let expected = { ...cffMinimumFields }
            for (const fieldData of cffstrFields) {
                const { field, value, cffFunction } = fieldData
                cffFunction(value as never)
                expected = { ...expected, [field]: value }
            }
            expect(parsedCffStr()).toEqual(expected)
        })
    })
})
