const cffUrl = 'http://localhost:8080/cff-initializer-javascript/#/'

describe('Minimum usage', () => {
    it('Visit site, fill minimum information and download', () => {
        // Main screen
        cy.visit('/')
        cy.contains('Generate your citation metadata files with ease')
        cy.get('[data-cy="create"]')
            .click()

        // Start screen
        cy.url().should('include', '/start')
        cy.get('[data-cy="title"]')
            .type('My Title')
            .should('have.value', 'My Title')
        cy.get('[data-cy="message"]')
            .type('Some message')
            .should('have.value', 'Some message')
        cy.get('[data-cy="next"]')
            .click()

        // Author screen
        cy.url().should('include', '/authors')
        cy.get('[data-cy="add-author"]')
            .click()
        cy.get('[data-cy="done"]')
            .click()
        cy.get('[data-cy="next"]')
            .click()

        // Finish Minimum screen
        cy.url().should('include', '/finish-minimum')
        cy.get('[data-cy="download"')
            .click()
        const downloadsFolder = Cypress.config('downloadsFolder')
        const cfffile = `${downloadsFolder}/CITATION.cff`

        cy.readFile(cfffile, 'binary', { timeout: 400 })
            .should(buffer => expect(buffer).to.be.equal('# This CITATION.cff file was generated with cffinit.\n# Visit https://bit.ly/cffinit to generate yours today!\n\ncff-version: 1.2.0\ntitle: My Title\nmessage: Some message\ntype: software\nauthors:\n  - {}\n'))
    })
})
