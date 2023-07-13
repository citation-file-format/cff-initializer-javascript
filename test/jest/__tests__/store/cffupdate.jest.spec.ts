import * as yaml from 'js-yaml'
import { beforeEach, describe, expect, it } from '@jest/globals'
import { updateCff, useCff } from 'src/store/cff'
import { useCffstr } from 'src/store/cffstr'

describe('Update of existing CFF', () => {
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
        { field: 'abstract', value: 'Description' },
        {
            field: 'authors',
            value: [
                {
                    'given-names': 'John',
                    'family-names': 'Doe',
                    orcid: 'https://1234-1234-1234-123X',
                    email: 'john@doe.com'
                },
                {
                    name: 'Netherlands eScience Center',
                    alias: 'NLeSC',
                    country: 'NL'
                }
            ]
        },
        { field: 'commit', value: '1234567890abcde' },
        { field: 'date-released', value: '2022-01-01' },
        { field: 'identifiers', value: [{ type: 'doi', value: '10.5281/zenodo.5171937' }] },
        { field: 'keywords', value: ['kw1', 'kw2'] },
        { field: 'license', value: 'Apache-2.0' },
        { field: 'message', value: 'Cite me!' },
        { field: 'repository-artifact', value: 'https://a' },
        { field: 'repository-code', value: 'https://a' },
        { field: 'repository', value: 'https://a' },
        { field: 'title', value: 'Title' },
        { field: 'type', value: 'dataset' },
        { field: 'url', value: 'https://a' },
        { field: 'version', value: '1.2.3' },
        {
            field: 'preferred-citation',
            value: {
                authors: [{ 'given-names': 'John', 'family-names': 'Doe' }],
                title: 'The paper',
                type: 'article'
            }
        }
    ]

    beforeEach(() => {
        cff.reset()
    })
    describe('Should returns errors for', () => {
        test('empty field', () => {
            expect(updateCff('')).toEqual({ msg: ['Error: CFF is empty.'], success: false })
        })
        test('array instead of list', () => {
            expect(updateCff('- a\n- b\n- c')).toEqual({
                msg: ['Error: CFF is invalid. It should be a YAML map.'],
                success: false
            })
        })
        test('string instead of list', () => {
            expect(updateCff('bad')).toEqual({
                msg: ['Error: CFF is invalid. It should be a YAML map.'],
                success: false
            })
        })
        test('catch YAML errors', () => {
            const { msg, success } = updateCff('a: -')
            expect(msg[0]).toContain('Error: could not parse CFF because of the following YAML error:')
            expect(success).toBe(false)
        })
    })
    it('should work for the minimum information', () => {
        expect(updateCff('cff-version: 1.2.0')).toEqual({ msg: [], success: true })
        expect(parsedCffStr()).toEqual(cffMinimumFields)
    })
    it('should work for full cff', () => {
        let expected = { ...cffMinimumFields }
        for (const fieldData of cffstrFields) {
            const { field, value } = fieldData
            expected = { ...expected, [field]: value }
        }
        const updateStr = yaml.dump(cffstrFields.reduce((acc, { field, value }) => {
            return { ...acc, [field]: value }
        }, {}))
        const { msg, success } = updateCff(updateStr)
        expect(msg).toHaveLength(1)
        expect(msg[0]).toBe("Property 'preferred-citation' was not identified as a basic field, so it was passed as an extra cff field.")
        expect(success).toBe(true)
        expect(parsedCffStr()).toEqual(expected)
    })
    describe('should work for each field of a full cff', () => {
        for (const fieldData of cffstrFields) {
            const { field, value } = fieldData
            test(`field ${field}`, () => {
                const expected = { ...cffMinimumFields, [field]: value }
                const { msg, success } = updateCff(yaml.dump({ [field]: value }))
                expect(msg).toHaveLength(field === 'preferred-citation' ? 1 : 0)
                expect(success).toBe(true)
                expect(parsedCffStr()).toEqual(expected)
            })
        }
    })
    test('keys at root level that are not part of the part of cff are kept as extra', () => {
        const { msg, success } = updateCff('bad: value')
        expect(msg).toHaveLength(1)
        expect(msg[0]).toBe("Property 'bad' was not identified as a basic field, so it was passed as an extra cff field.")
        expect(success).toBe(true)
        const expected = { ...cffMinimumFields, bad: 'value' }
        expect(parsedCffStr()).toEqual(expected)
    })
    test('If it is not an Author, print infringing keys', () => {
        const { msg, success } = updateCff('authors:\n- bad: value')
        expect(msg).toHaveLength(1)
        expect(msg[0]).toBe('Could not add author. It is not a Person due to fields bad and not an Entity due to fields bad. Skipping.')
        expect(success).toBe(true)
        const expected = { ...cffMinimumFields, authors: [] }
        expect(parsedCffStr()).toEqual(expected)
    })
    test('Cannot mix Person and Entity', () => {
        const { msg, success } = updateCff('authors:\n- given-names: a\n  name: b')
        expect(msg).toHaveLength(1)
        expect(msg[0]).toBe('Could not add author. It is not a Person due to fields name and not an Entity due to fields given-names. Skipping.')
        expect(success).toBe(true)
        const expected = { ...cffMinimumFields, authors: [] }
        expect(parsedCffStr()).toEqual(expected)
    })
    test('keys at identifiers level that are not part of the part of cff are ignored', () => {
        const { msg, success } = updateCff('identifiers:\n- bad: value')
        expect(msg).toHaveLength(1)
        expect(msg[0]).toBe("Property 'bad: value' inside 'identifiers' was ignored. Check if the key is correct.")
        expect(success).toBe(true)
        const expected = { ...cffMinimumFields, identifiers: [{ type: 'other', value: '' }] }
        expect(parsedCffStr()).toEqual(expected)
    })
    test('type should be software or dataset', () => {
        const { msg, success } = updateCff('type: potato')
        expect(msg).toHaveLength(1)
        expect(msg[0]).toBe("Invalid type 'potato'. Using 'software' instead.")
        expect(success).toBe(true)
        expect(parsedCffStr()).toEqual(cffMinimumFields)
    })
    test('identifier type should be valid', () => {
        const { msg, success } = updateCff('identifiers:\n- type: potato\n  value: fried')
        expect(msg).toHaveLength(1)
        expect(msg[0]).toBe("Invalid value 'potato' for identifier type. Using 'other' instead.")
        expect(success).toBe(true)
        const expected = { ...cffMinimumFields, identifiers: [{ type: 'other', value: 'fried' }] }
        expect(parsedCffStr()).toEqual(expected)
    })
    test('fix old cff-version', () => {
        const { msg, success } = updateCff('cff-version: 0.0.1')
        expect(msg).toHaveLength(1)
        expect(msg[0]).toBe('cff-version was updated to 1.2.0. This might led to some issues, so verify before downloading.')
        expect(success).toBe(true)
        expect(parsedCffStr()).toEqual(cffMinimumFields)
    })
    test('date-released should work for non-string', () => {
        const { msg, success } = updateCff('date-released: 2023-01-01')
        expect(msg).toHaveLength(0)
        expect(success).toBe(true)
        const expected = { ...cffMinimumFields, 'date-released': '2023-01-01' }
        expect(parsedCffStr()).toEqual(expected)
    })
    test('ignore bad values validated a posteriori', () => {
        const { msg, success } = updateCff("title: ''\nmessage: ''\nauthors: [{ orcid: bad }, { orcid: bad }]\nidentifiers:\n- type: doi\n  value: bad")
        expect(msg).toHaveLength(0)
        expect(success).toBe(true)
    })
    test('catches {}', () => {
        const { msg, success } = updateCff('{}')
        expect(msg).toHaveLength(1)
        expect(msg[0]).toBe('Error: CFF is empty.')
        expect(success).toBe(false)
    })
    test('catches {{}}', () => {
        const { msg, success } = updateCff('{{}}')
        expect(msg).toHaveLength(1)
        expect(msg[0]).toBe('Error: invalid object in keys (did you use {} as key?).')
        expect(success).toBe(false)
    })
    test('catches {[]}', () => {
        const { msg, success } = updateCff('{[]}')
        expect(msg).toHaveLength(1)
        expect(msg[0]).toBe('Error: invalid null property.')
        expect(success).toBe(false)
    })
    test('allow {title: Title, message: CITE ME}', () => {
        const { msg, success } = updateCff('{title: Title, message: CITE ME}')
        expect(msg).toHaveLength(0)
        expect(success).toBe(true)
    })
    test('catches {}: 1', () => {
        const { msg, success } = updateCff('{}: 1\nb: 2')
        expect(msg).toHaveLength(1)
        expect(msg[0]).toBe('Error: invalid object in keys (did you use {} as key?).')
        expect(success).toBe(false)
    })
    test('catches []: 1', () => {
        const { msg, success } = updateCff('[]: 1\nb: 2')
        expect(msg).toHaveLength(1)
        expect(msg[0]).toBe('Error: invalid null property.')
        expect(success).toBe(false)
    })
    test("catches '': 1", () => {
        const { msg, success } = updateCff("'': 1\nb: 2")
        expect(msg).toHaveLength(1)
        expect(msg[0]).toBe('Error: invalid null property.')
        expect(success).toBe(false)
    })
})
