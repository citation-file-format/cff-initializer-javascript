import { describe, expect, it } from '@jest/globals'
import { AuthorKind } from 'src/types'
import { useCff } from 'src/store/cff'
import { useValidation } from 'src/store/validation'

describe('useValidation', () => {
    const cff = useCff()
    const { errors } = useValidation()

    const anyErrorMatches = (instancePath: string, schemaPath: string) => {
        return errors.value.reduce((acc, err) => {
            return acc || (err.instancePath === instancePath && err.schemaPath === schemaPath)
        }, false)
    }

    cff.reset()
    it('should start with errors in title and authors', () => {
        expect(errors.value.length).toEqual(2)
        expect(anyErrorMatches('/authors', '#/properties/authors/minItems')).toBe(true)
        expect(anyErrorMatches('/title', '#/properties/title/minLength')).toBe(true)
    })

    it('should have no more errors after title and authors are fixed', () => {
        cff.setTitle('Title')
        cff.setAuthors([{}], ['person'])
        expect(errors.value.length).toEqual(0)
    })

    it('should complain about missing message', () => {
        cff.setMessage('')
        expect(errors.value.length).toEqual(1)
        expect(anyErrorMatches('/message', '#/properties/message/minLength')).toBe(true)
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
            cff.setAuthors([{}], ['person'])
        })

        test('missing author', () => {
            cff.setAuthors([], [])
            expect(anyErrorMatches('/authors', '#/properties/authors/minItems')).toBe(true)
        })
        test('bad release date', () => {
            cff.setDateReleased('bad')
            expect(anyErrorMatches('/date-released', '#/definitions/date/pattern')).toBe(true)
        })
        test('duplicate author', () => {
            cff.setAuthors([{}, {}], ['person', 'person'])
            expect(anyErrorMatches('/authors', '#/properties/authors/uniqueItems')).toBe(true)
        })
        test('duplicate identifier', () => {
            cff.setIdentifiers([{ type: 'other', value: '1' }, { type: 'other', value: '1' }])
            expect(anyErrorMatches('/identifiers', '#/properties/identifiers/uniqueItems')).toBe(true)
        })
        test('duplicate keyword', () => {
            cff.setKeywords(['a', 'a'])
            expect(anyErrorMatches('/keywords', '#/properties/keywords/uniqueItems')).toBe(true)
        })
        for (const authorKind of ['person', 'entity']) {
            test('bad e-mail on author', () => {
                cff.setAuthors([{ email: 'bad' }], [authorKind as AuthorKind])
                expect(anyErrorMatches('/authors/0/email', '#/definitions/email/pattern')).toBe(true)
            })
            test('bad ORCID', () => {
                cff.setAuthors([{ orcid: 'bad' }], [authorKind as AuthorKind])
                expect(anyErrorMatches('/authors/0/orcid', '#/definitions/orcid/pattern')).toBe(true)
            })
        }
        test('bad start date on entity', () => {
            cff.setAuthors([{ dateStart: 'bad' }], ['entity'])
            expect(anyErrorMatches('/authors/0/date-start', '#/definitions/date/pattern')).toBe(true)
        })
        test('bad end date on entity', () => {
            cff.setAuthors([{ dateEnd: 'bad' }], ['entity'])
            expect(anyErrorMatches('/authors/0/date-end', '#/definitions/date/pattern')).toBe(true)
        })
        test('bad website on entity', () => {
            cff.setAuthors([{ website: 'bad' }], ['entity'])
            expect(anyErrorMatches('/authors/0/website', '#/definitions/url/pattern')).toBe(true)
        })
        test('bad DOI identifier', () => {
            cff.setIdentifiers([{ type: 'doi', value: 'bad' }])
            expect(anyErrorMatches('/identifiers/0/value', '#/definitions/doi/pattern')).toBe(true)
        })
        test('bad URL identifier', () => {
            cff.setIdentifiers([{ type: 'url', value: 'bad' }])
            expect(anyErrorMatches('/identifiers/0/value', '#/definitions/url/pattern')).toBe(true)
            // Trailing white spaces on URLs are a different kind of error. See #605
            cff.setIdentifiers([{ type: 'url', value: 'https:// ' }])
            expect(anyErrorMatches('/identifiers/0/value', '#/definitions/url/format')).toBe(true)
        })
        test('bad SWH identifier', () => {
            cff.setIdentifiers([{ type: 'swh', value: 'bad' }])
            expect(anyErrorMatches('/identifiers/0/value', '#/definitions/swh-identifier/pattern')).toBe(true)
        })
        test('bad other identifier', () => {
            cff.setIdentifiers([{ type: 'other', value: '' }])
            expect(anyErrorMatches('/identifiers/0/value', '#/anyOf/3/properties/value/minLength')).toBe(true)
        })
        test('bad keyword', () => {
            cff.setKeywords([''])
            expect(anyErrorMatches('/keywords/0', '#/properties/keywords/items/minLength')).toBe(true)
        })
        for (const relatedResource of relatedResources) {
            const { key, foo } = relatedResource
            test(`bad ${key}`, () => {
                foo('bad')
                expect(anyErrorMatches(`/${key}`, '#/definitions/url/pattern')).toBe(true)
                // Trailing white spaces on URLs are a different kind of error. See #605
                foo('https:// ')
                expect(anyErrorMatches(`/${key}`, '#/definitions/url/format')).toBe(true)
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
