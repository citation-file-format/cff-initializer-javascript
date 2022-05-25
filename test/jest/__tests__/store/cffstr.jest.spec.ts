import { beforeEach, describe, expect, it } from '@jest/globals'
import { useCff } from 'src/composables/cff'

describe('useCffObject', () => {
    const { reset, cffstr, setTitle, setKeywords, setIdentifiers } = useCff()

    const generatedBy = '# This CITATION.cff file was generated with cffinit.\n# Visit https://bit.ly/cffinit to generate yours today!\n\n'

    beforeEach(() => {
        reset()
    })

    describe('initial content', () => {
        it('should only have fields with defaults', () => {
            const expected = generatedBy + 'cff-version: 1.2.0\ntype: software\nauthors: []\n'
            expect(cffstr.value).toEqual(expected)
        })
    })

    describe('with title', () => {
        beforeEach(() => {
            setTitle('sometitle')
        })

        it('should have title', () => {
            const expected = generatedBy + 'cff-version: 1.2.0\ntitle: sometitle\ntype: software\nauthors: []\n'
            expect(cffstr.value).toEqual(expected)
        })
    })

    describe('with keyword', () => {
        beforeEach(() => {
            setKeywords(['keyword1'])
        })

        it('should have a keyword', () => {
            const expected = generatedBy + 'cff-version: 1.2.0\ntype: software\nauthors: []\nkeywords:\n  - keyword1\n'
            expect(cffstr.value).toEqual(expected)
        })
    })

    describe('with identifier', () => {
        beforeEach(() => {
            setIdentifiers([{ type: 'doi', value: '10.5281/zenodo.5171937' }])
        })

        it('should have a identifier', () => {
            const expected = generatedBy + 'cff-version: 1.2.0\ntype: software\nauthors: []\nidentifiers:\n  - type: doi\n    value: 10.5281/zenodo.5171937\n'
            expect(cffstr.value).toEqual(expected)
        })
    })
})
