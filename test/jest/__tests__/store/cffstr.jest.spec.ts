import { beforeEach, describe, expect, it } from '@jest/globals'
import { useCff } from 'src/store/cff'
import { useCffstr } from 'src/store/cffstr'

describe('useCffstr', () => {
    const cff = useCff()
    const generatedBy = '# This CITATION.cff file was generated with cffinit.\n# Visit https://bit.ly/cffinit to generate yours today!\n\n'
    const { cffstr } = useCffstr()

    beforeEach(() => {
        cff.reset()
    })
    describe('initial content', () => {
        it('should only have fields with defaults', () => {
            const expected = generatedBy + 'cff-version: 1.2.0\ntype: software\nauthors: []\n'
            expect(cffstr.value).toEqual(expected)
        })
    })

    describe('with title', () => {
        beforeEach(() => {
            cff.setTitle('sometitle')
        })

        it('should have title', () => {
            const expected = generatedBy + 'cff-version: 1.2.0\ntitle: sometitle\ntype: software\nauthors: []\n'
            expect(cffstr.value).toEqual(expected)
        })
    })

    describe('with keyword', () => {
        beforeEach(() => {
            cff.setKeywords(['keyword1'])
        })

        it('should have a keyword', () => {
            const expected = generatedBy + 'cff-version: 1.2.0\ntype: software\nauthors: []\nkeywords:\n  - keyword1\n'
            expect(cffstr.value).toEqual(expected)
        })
    })

    describe('with identifier', () => {
        beforeEach(() => {
            cff.setIdentifiers([{ type: 'doi', value: '10.5281/zenodo.5171937' }])
        })

        it('should have a identifier', () => {
            const expected = generatedBy + 'cff-version: 1.2.0\ntype: software\nauthors: []\nidentifiers:\n  - type: doi\n    value: 10.5281/zenodo.5171937\n'
            expect(cffstr.value).toEqual(expected)
        })
    })
})
