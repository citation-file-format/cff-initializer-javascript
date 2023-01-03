import { describe, expect, it } from '@jest/globals'
import { useCff } from 'src/store/cff'
import { useValidation } from 'src/store/validation'

describe('useValidation', () => {
    const cff = useCff()
    const { errors } = useValidation()
    const mappedErrors = () => { return errors.value.map(error => [error.instancePath, error.schemaPath]) }

    cff.reset()
    it('should start with errors in title and authors', () => {
        expect(errors.value.length).toEqual(2)
        expect(errors.value[0].instancePath).toEqual('/authors')
        expect(errors.value[0].schemaPath).toEqual('#/properties/authors/minItems')
        expect(errors.value[1].instancePath).toEqual('/title')
        expect(errors.value[1].schemaPath).toEqual('#/properties/title/minLength')
    })

    it('should have no more errors after title and authors are fixed', () => {
        cff.setTitle('Title')
        cff.setAuthors([{}])
        expect(errors.value.length).toEqual(0)
    })

    it('should complain about missing message', () => {
        cff.setMessage('')
        expect(errors.value.length).toEqual(1)
        expect(errors.value[0].instancePath).toEqual('/message')
        expect(errors.value[0].schemaPath).toEqual('#/properties/message/minLength')
    })

    describe('catches', () => {
        const relatedResources = [
            { key: 'repository', foo: cff.setRepository },
            { key: 'repository-artifact', foo: cff.setRepositoryArtifact },
            { key: 'repository-code', foo: cff.setRepositoryCode },
            { key: 'url', foo: cff.setUrl }
        ]

        beforeEach(() => {
            cff.reset()
            cff.setTitle('Title')
            cff.setAuthors([{}])
        })

        test('missing author', () => {
            cff.setAuthors([])
            expect(errors.value[0].instancePath).toEqual('/authors')
            expect(errors.value[0].schemaPath).toEqual('#/properties/authors/minItems')
        })
        test('bad release date', () => {
            cff.setDateReleased('bad')
            expect(errors.value[0].instancePath).toEqual('/date-released')
            expect(errors.value[0].schemaPath).toEqual('#/definitions/date/pattern')
        })
        test('duplicate author', () => {
            cff.setAuthors([{}, {}])
            expect(errors.value[0].instancePath).toEqual('/authors')
            expect(errors.value[0].schemaPath).toEqual('#/properties/authors/uniqueItems')
        })
        test('duplicate identifier', () => {
            cff.setIdentifiers([{ type: 'other', value: '1' }, { type: 'other', value: '1' }])
            expect(mappedErrors()).toContainEqual(['/identifiers', '#/properties/identifiers/uniqueItems'])
        })
        test('duplicate keyword', () => {
            cff.setKeywords(['a', 'a'])
            expect(errors.value[0].instancePath).toEqual('/keywords')
            expect(errors.value[0].schemaPath).toEqual('#/properties/keywords/uniqueItems')
        })
        test('bad e-mail on author', () => {
            cff.setAuthors([{ email: 'bad' }])
            expect(errors.value[0].instancePath).toEqual('/authors/0/email')
            expect(errors.value[0].schemaPath).toEqual('#/definitions/email/pattern')
        })
        test('bad DOI identifier', () => {
            cff.setIdentifiers([{ type: 'doi', value: 'bad' }])
            expect(mappedErrors()).toContainEqual([
                '/identifiers/0/value',
                '#/definitions/doi/pattern'
            ])
        })
        test('bad URL identifier', () => {
            cff.setIdentifiers([{ type: 'url', value: 'bad' }])
            expect(mappedErrors()).toContainEqual([
                '/identifiers/0/value',
                '#/definitions/url/pattern'
            ])
            // Trailing white spaces on URLs are a different kind of error. See #605
            cff.setIdentifiers([{ type: 'url', value: 'https:// ' }])
            expect(mappedErrors()).toContainEqual([
                '/identifiers/0/value',
                '#/definitions/url/format'
            ])
        })
        test('bad SWH identifier', () => {
            cff.setIdentifiers([{ type: 'swh', value: 'bad' }])
            expect(mappedErrors()).toContainEqual([
                '/identifiers/0/value',
                '#/definitions/swh-identifier/pattern'
            ])
        })
        test('bad other identifier', () => {
            cff.setIdentifiers([{ type: 'other', value: '' }])
            expect(mappedErrors()).toContainEqual([
                '/identifiers/0/value',
                '#/anyOf/3/properties/value/minLength'
            ])
        })
        test('bad keyword', () => {
            cff.setKeywords([''])
            expect(errors.value[0].instancePath).toEqual('/keywords/0')
            expect(errors.value[0].schemaPath).toEqual('#/properties/keywords/items/minLength')
        })
        test('bad ORCID', () => {
            cff.setAuthors([{ orcid: 'bad' }])
            expect(errors.value[0].instancePath).toEqual('/authors/0/orcid')
            expect(errors.value[0].schemaPath).toEqual('#/definitions/orcid/pattern')
        })
        for (const relatedResource of relatedResources) {
            const { key, foo } = relatedResource
            test(`bad ${key}`, () => {
                foo('bad')
                expect(errors.value[0].instancePath).toEqual(`/${key}`)
                expect(errors.value[0].schemaPath).toEqual('#/definitions/url/pattern')
                // Trailing white spaces on URLs are a different kind of error. See #605
                foo('https:// ')
                expect(errors.value[0].instancePath).toEqual(`/${key}`)
                expect(errors.value[0].schemaPath).toEqual('#/definitions/url/format')
            })
        }
        test('bad YAML in extra CFF', () => {
            cff.setExtraCffFields('a: -')
            expect(errors.value[0].keyword).toEqual('Extra CFF Fields error')
            expect(errors.value[0].message).toContain('end of the stream')
        })
        test('wrong extra field in extra CFF', () => {
            cff.setExtraCffFields('extra: field')
            expect(errors.value[0].keyword).toEqual('additionalProperties')
        })
        test('preferred-citation missing title', () => {
            cff.setExtraCffFields('preferred-citation:\n  authors: [{}]\n  type: article')
            expect(errors.value.length).toBe(1)
            expect(errors.value[0].instancePath).toEqual('/preferred-citation')
            expect(errors.value[0].message).toEqual("must have required property 'title'")
        })
    })
})
