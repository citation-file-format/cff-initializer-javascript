import * as yaml from 'js-yaml'

const minimumValidCff = {
    'cff-version': '1.2.0',
    type: 'software',
    title: 'My Title',
    message: 'If you use this software, please cite it using the metadata from this file.',
    authors: [{}]
}
const fullValidCff = {
    'cff-version': '1.2.0',
    type: 'software',
    title: 'My Title',
    message: 'New message',
    authors: [{
        'given-names': 'John',
        'name-particle': 'von',
        'family-names': 'Doe',
        'name-suffix': 'Sr.',
        email: 'john@doe.com',
        affiliation: 'UU',
        orcid: 'https://orcid.org/1234-1234-1234-123X'
    }],
    identifiers: [
        { type: 'doi', value: '10.1234/x', description: 'Some DOI' },
        { type: 'url', value: 'https://id', description: 'Some URL' },
        { type: 'swh', value: 'swh:1:rev:0123456789abcdef0123456789abcdef01234567', description: 'Some SWH' },
        { type: 'other', value: 'Other', description: 'Some other thing' }
    ],
    'repository-code': 'https://rc',
    url: 'https://url',
    repository: 'https://r',
    'repository-artifact': 'https://ra',
    abstract: 'Lorem ipsum',
    keywords: ['kw0', 'kw1', 'kw2'],
    license: 'Apache-2.0',
    commit: '123',
    version: 'v1.2.3',
    'date-released': '2022-01-01'
}

describe('Basic usage', () => {
    it('is working for the minimum information', () => {
        // Main screen
        cy.visit('/')
        cy.contains('Generate your citation metadata files with ease')
        cy.dataCy('btn-create')
            .click()

        // Start screen
        cy.url().should('include', '/start')
        cy.dataCy('radio-type')
            .children()
            .eq(0)
            .should('have.text', 'Software')
        cy.dataCy('radio-type')
            .children()
            .eq(1)
            .should('have.text', 'Dataset')
        cy.dataCy('input-title')
            .type('My Title')
            .should('have.value', 'My Title')
        cy.dataCy('input-message')
            .should('have.value', 'If you use this software, please cite it using the metadata from this file.')
        cy.dataCy('btn-next')
            .click()

        // Author screen
        cy.url().should('include', '/authors')
        cy.dataCy('btn-add-author')
            .click()
        cy.dataCy('btn-done')
            .click()
        cy.dataCy('btn-next')
            .click()

        // Finish Minimum screen
        cy.url().should('include', '/finish-minimum')
        cy.dataCy('btn-download')
            .click()
        const downloadsFolder = Cypress.config('downloadsFolder')
        const cfffile = `${downloadsFolder}/CITATION.cff`

        cy.readFile(cfffile, 'binary', { timeout: 400 })
            .then((str) => {
                expect(yaml.load(str)).to.deep.equal(minimumValidCff)
            })
    })

    it('can fill or change all fields', () => {
        // Main screen
        cy.visit('/')
        cy.dataCy('btn-create')
            .click()

        // Start screen
        cy.url().should('include', '/start')
        cy.dataCy('radio-type')
            .children()
            .eq(1)
            .click()
        cy.dataCy('input-title')
            .type('My Title')
        cy.dataCy('input-message')
            .clear()
            .type('New message')
        cy.dataCy('btn-next')
            .click()

        // Author screen
        cy.url().should('include', '/authors')
        cy.dataCy('btn-add-author')
            .click()
        cy.dataCy('input-given-names')
            .type('John')
        cy.dataCy('input-name-particle')
            .type('von')
        cy.dataCy('input-family-names')
            .type('Doe')
        cy.dataCy('input-name-suffix')
            .type('Sr.')
        cy.dataCy('input-email')
            .type('john@doe.com')
        cy.dataCy('input-affiliation')
            .type('UU')
        cy.dataCy('input-orcid')
            .type('123412341234123X')
        cy.dataCy('btn-done')
            .click()
        cy.dataCy('btn-next')
            .click()

        // Finish Minimum screen
        cy.url().should('include', '/finish-minimum')
        cy.dataCy('btn-add-more')
            .click()

        // Identifiers screen
        cy.url().should('include', '/identifiers')
        cy.dataCy('btn-add-identifier')
            .click()
        cy.dataCy('input-value')
            .type('10.1234/x')
        cy.dataCy('input-description')
            .type('Some DOI')
        cy.dataCy('btn-add-identifier')
            .click()
        cy.dataCy('radio-identifier')
            .children()
            .eq(1)
            .click()
        cy.dataCy('input-value')
            .type('https://id')
        cy.dataCy('input-description')
            .type('Some URL')
        cy.dataCy('btn-add-identifier')
            .click()
        cy.dataCy('radio-identifier')
            .children()
            .eq(2)
            .click()
        cy.dataCy('input-value')
            .type('swh:1:rev:0123456789abcdef0123456789abcdef01234567')
        cy.dataCy('input-description')
            .type('Some SWH')
        cy.dataCy('btn-add-identifier')
            .click()
        cy.dataCy('radio-identifier')
            .children()
            .eq(3)
            .click()
        cy.dataCy('input-value')
            .type('Other')
        cy.dataCy('input-description')
            .type('Some other thing')
        cy.dataCy('btn-done')
            .click()
        cy.dataCy('btn-next')
            .click()

        // Related resources screen
        cy.url().should('include', '/related-resources')
        cy.dataCy('input-repository-code')
            .type('https://rc')
        cy.dataCy('input-url')
            .type('https://url')
        cy.dataCy('input-repository')
            .type('https://r')
        cy.dataCy('input-repository-artifact')
            .type('https://ra')
        cy.dataCy('btn-next')
            .click()

        // Abstract screen
        cy.url().should('include', '/abstract')
        cy.dataCy('input-abstract')
            .type('Lorem ipsum')
        cy.dataCy('btn-next')
            .click()

        // Keywords screen
        cy.url().should('include', '/keywords')
        cy.dataCy('btn-add-keyword')
            .click()
        cy.dataCy('input-keyword0')
            .type('kw0')
        cy.dataCy('btn-add-keyword')
            .click()
        cy.dataCy('input-keyword1')
            .type('kw1')
        cy.dataCy('btn-add-keyword')
            .click()
        cy.dataCy('input-keyword2')
            .type('kw2')
        cy.dataCy('btn-next')
            .click()

        // License screen
        cy.url().should('include', '/license')
        cy.dataCy('select-license')
            .first()
            .type('Apa')
        cy.get('.q-item__label')
            .eq(2)
            .click()
        cy.dataCy('select-license')
            .last()
            .should('have.value', 'Apache-2.0')
        cy.dataCy('btn-next')
            .click()

        // Version specific screen
        cy.url().should('include', '/version-specific')
        cy.dataCy('input-commit')
            .type('123')
        cy.dataCy('input-version')
            .type('v1.2.3')
        cy.dataCy('input-date-released')
            .type('2022-01-01')
        cy.dataCy('btn-next')
            .click()

        // Finish Advanced screen
        cy.url().should('include', '/finish-advanced')
        cy.dataCy('btn-download')
            .click()

        const downloadsFolder = Cypress.config('downloadsFolder')
        const cfffile = `${downloadsFolder}/CITATION.cff`

        cy.readFile(cfffile, 'binary', { timeout: 400 })
            .then((str) => {
                expect(yaml.load(str)).to.deep.equal(fullValidCff)
            })
    })
})
