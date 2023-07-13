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
    type: 'dataset',
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
    }, {
        address: 'Some street',
        alias: 'NLeSC',
        city: 'Amsterdam',
        country: 'NL',
        'date-end': '2022-01-01',
        'date-start': '2021-01-01',
        email: 'nl@esc.com',
        fax: '+31 02 1234 1234',
        location: 'Science Park',
        name: 'Netherlands eScience Center',
        orcid: 'https://orcid.org/1234-1234-1234-1234',
        'post-code': '1234AM',
        region: 'Oost',
        tel: '+31 02 1234 5678',
        website: 'https://nlesc.org'
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
    'date-released': '2022-01-01',
    'preferred-citation': {
        authors: [{ 'given-names': 'Some', 'family-names': 'Body' }],
        title: 'The Paper',
        type: 'article'
    }
}
const downloadsFolder = Cypress.config('downloadsFolder')
const cfffile = `${downloadsFolder}/CITATION.cff`

describe('Basic usage', () => {
    it('is working for the minimum information', () => {
        // Main screen
        cy.visit('/')
        cy.contains('Generate your citation metadata files with ease')
        cy.dataCy('btn-create')
            .click()

        // Start screen
        cy.url().should('include', '/start')
        cy.dataCy('radio-type-software')
            .should('have.text', 'Software')
        cy.dataCy('radio-type-dataset')
            .should('have.text', 'Dataset')
        cy.dataCy('input-title')
            .type('My Title')
            .should('have.value', 'My Title')
        cy.dataCy('input-message')
            .should('have.value', '')
        cy.dataCy('btn-next')
            .click()

        // Author screen
        cy.url().should('include', '/authors')
        cy.dataCy('btn-add-person')
            .click()
        cy.dataCy('btn-done')
            .click()
        cy.dataCy('btn-next')
            .click()

        // Finish screen
        cy.dataCy('btn-finish')
            .click()
        cy.url().should('include', '/finish')
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
        cy.dataCy('radio-type-dataset')
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
        cy.dataCy('btn-add-person')
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
        cy.dataCy('btn-add-entity')
            .click()
        cy.dataCy('input-name')
            .type('Netherlands eScience Center')
        cy.dataCy('input-address')
            .type('Some street')
        cy.dataCy('input-city')
            .type('Amsterdam')

        cy.dataCy('select-country')
            .first()
            .type('NL')
            .click()
            .get('.q-item__label')
            .eq(0)
            .click()
        cy.dataCy('input-post-code')
            .type('1234AM')
        cy.dataCy('input-location')
            .type('Science Park')
        cy.dataCy('input-region')
            .type('Oost')
        cy.dataCy('input-alias')
            .type('NLeSC')
        cy.dataCy('input-email')
            .type('nl@esc.com')
        cy.dataCy('input-date-start')
            .type('2021-01-01')
        cy.dataCy('input-date-end')
            .type('2022-01-01')
        cy.dataCy('input-tel')
            .type('+31 02 1234 5678')
        cy.dataCy('input-fax')
            .type('+31 02 1234 1234')
        cy.dataCy('input-website')
            .type('https://nlesc.org')
        cy.dataCy('input-orcid')
            .type('1234123412341234')
        cy.dataCy('btn-next')
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
        cy.dataCy('radio-identifier-url')
            .click()
        cy.dataCy('input-value')
            .type('https://id')
        cy.dataCy('input-description')
            .type('Some URL')
        cy.dataCy('btn-add-identifier')
            .click()
        cy.dataCy('radio-identifier-swh')
            .click()
        cy.dataCy('input-value')
            .type('swh:1:rev:0123456789abcdef0123456789abcdef01234567')
        cy.dataCy('input-description')
            .type('Some SWH')
        cy.dataCy('btn-add-identifier')
            .click()
        cy.dataCy('radio-identifier-other')
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

        // Extra CFF fields screen
        cy.url().should('include', '/extra-cff-fields')
        cy.dataCy('input-extra-cff-fields')
            .type('preferred-citation:\n  authors:\n  - given-names: Some\n    family-names: Body\n  title: The Paper\n  type: article')
        cy.dataCy('btn-next')
            .click()

        // Finish screen
        cy.url().should('include', '/finish')
        cy.dataCy('btn-download')
            .click()

        cy.readFile(cfffile, 'binary', { timeout: 400 })
            .then((str) => {
                expect(yaml.load(str)).to.deep.equal(fullValidCff)
            })
    })
})
