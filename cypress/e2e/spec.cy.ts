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
        cy.get('[data-cy="btn-create"]')
            .click()

        // Start screen
        cy.url().should('include', '/start')
        cy.get('[data-cy="radio-type"]')
            .children()
            .eq(0)
            .should('have.text', 'Software')
        cy.get('[data-cy="radio-type"]')
            .children()
            .eq(1)
            .should('have.text', 'Dataset')
        cy.get('[data-cy="input-title"]')
            .type('My Title')
            .should('have.value', 'My Title')
        cy.get('[data-cy="input-message"]')
            .should('have.value', 'If you use this software, please cite it using the metadata from this file.')
        cy.get('[data-cy="btn-next"]')
            .click()

        // Author screen
        cy.url().should('include', '/authors')
        cy.get('[data-cy="btn-add-author"]')
            .click()
        cy.get('[data-cy="btn-done"]')
            .click()
        cy.get('[data-cy="btn-next"]')
            .click()

        // Finish Minimum screen
        cy.url().should('include', '/finish-minimum')
        cy.get('[data-cy="btn-download"]')
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
        cy.get('[data-cy="btn-create"]')
            .click()

        // Start screen
        cy.url().should('include', '/start')
        cy.get('[data-cy="radio-type"]')
            .children()
            .eq(1)
            .click()
        cy.get('[data-cy="input-title"]')
            .type('My Title')
        cy.get('[data-cy="input-message"]')
            .clear()
            .type('New message')
        cy.get('[data-cy="btn-next"]')
            .click()

        // Author screen
        cy.url().should('include', '/authors')
        cy.get('[data-cy="btn-add-author"]')
            .click()
        cy.get('[data-cy="input-given-names"')
            .type('John')
        cy.get('[data-cy="input-name-particle"')
            .type('von')
        cy.get('[data-cy="input-family-names"')
            .type('Doe')
        cy.get('[data-cy="input-name-suffix"')
            .type('Sr.')
        cy.get('[data-cy="input-email"')
            .type('john@doe.com')
        cy.get('[data-cy="input-affiliation"')
            .type('UU')
        cy.get('[data-cy="input-orcid"')
            .type('123412341234123X')
        cy.get('[data-cy="btn-done"]')
            .click()
        cy.get('[data-cy="btn-next"]')
            .click()

        // Finish Minimum screen
        cy.url().should('include', '/finish-minimum')
        cy.get('[data-cy="btn-add-more"]')
            .click()

        // Identifiers screen
        cy.url().should('include', '/identifiers')
        cy.get('[data-cy="btn-add-identifier"]')
            .click()
        cy.get('[data-cy="input-identifier-value"]')
            .type('10.1234/x')
        cy.get('[data-cy="input-identifier-description"]')
            .type('Some DOI')
        cy.get('[data-cy="btn-add-identifier"]')
            .click()
        cy.get('[data-cy="radio-identifier"')
            .children()
            .eq(1)
            .click()
        cy.get('[data-cy="input-identifier-value"]')
            .type('https://id')
        cy.get('[data-cy="input-identifier-description"]')
            .type('Some URL')
        cy.get('[data-cy="btn-add-identifier"]')
            .click()
        cy.get('[data-cy="radio-identifier"')
            .children()
            .eq(2)
            .click()
        cy.get('[data-cy="input-identifier-value"]')
            .type('swh:1:rev:0123456789abcdef0123456789abcdef01234567')
        cy.get('[data-cy="input-identifier-description"]')
            .type('Some SWH')
        cy.get('[data-cy="btn-add-identifier"]')
            .click()
        cy.get('[data-cy="radio-identifier"')
            .children()
            .eq(3)
            .click()
        cy.get('[data-cy="input-identifier-value"]')
            .type('Other')
        cy.get('[data-cy="input-identifier-description"]')
            .type('Some other thing')
        cy.get('[data-cy="btn-identifier-done"]')
            .click()
        cy.get('[data-cy="btn-next"]')
            .click()

        // Related resources screen
        cy.url().should('include', '/related-resources')
        cy.get('[data-cy="input-repository-code"]')
            .type('https://rc')
        cy.get('[data-cy="input-url"]')
            .type('https://url')
        cy.get('[data-cy="input-repository"]')
            .type('https://r')
        cy.get('[data-cy="input-repository-artifact"]')
            .type('https://ra')
        cy.get('[data-cy="btn-next"]')
            .click()

        // Abstract screen
        cy.url().should('include', '/abstract')
        cy.get('[data-cy="input-abstract"]')
            .type('Lorem ipsum')
        cy.get('[data-cy="btn-next"]')
            .click()

        // Keywords screen
        cy.url().should('include', '/keywords')
        cy.get('[data-cy="btn-add-keyword"]')
            .click()
        cy.get('[data-cy="input-keyword0"]')
            .type('kw0')
        cy.get('[data-cy="btn-add-keyword"]')
            .click()
        cy.get('[data-cy="input-keyword1"]')
            .type('kw1')
        cy.get('[data-cy="btn-add-keyword"]')
            .click()
        cy.get('[data-cy="input-keyword2"]')
            .type('kw2')
        cy.get('[data-cy="btn-next"]')
            .click()

        // License screen
        cy.url().should('include', '/license')
        cy.get('[data-cy="select-license"]')
            .first()
            .type('Apa')
        cy.get('.q-item__label')
            .eq(2)
            .click()
        cy.get('[data-cy="select-license"]')
            .last()
            .should('have.value', 'Apache-2.0')
        cy.get('[data-cy="btn-next"]')
            .click()

        // Version specific screen
        cy.url().should('include', '/version-specific')
        cy.get('[data-cy="input-commit"]')
            .type('123')
        cy.get('[data-cy="input-version"]')
            .type('v1.2.3')
        cy.get('[data-cy="input-date-released"]')
            .type('2022-01-01')
        cy.get('[data-cy="btn-next"]')
            .click()

        // Finish Advanced screen
        cy.url().should('include', '/finish-advanced')
        cy.get('[data-cy="btn-download"]')
            .click()

        const downloadsFolder = Cypress.config('downloadsFolder')
        const cfffile = `${downloadsFolder}/CITATION.cff`

        cy.readFile(cfffile, 'binary', { timeout: 400 })
            .then((str) => {
                expect(yaml.load(str)).to.deep.equal(fullValidCff)
            })
    })
})
