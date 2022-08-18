const minimumCff = '# This CITATION.cff file was generated with cffinit.\n# Visit https://bit.ly/cffinit to generate yours today!\n\ncff-version: 1.2.0\ntitle: My Title\nmessage: >-\n  If you use this software, please cite it using the\n  metadata from this file.\ntype: software\nauthors:\n  - {}\n'

describe('Minimum usage', () => {
    it('Visit site, fill minimum information and download', () => {
        // Main screen
        cy.visit('/')
        cy.contains('Generate your citation metadata files with ease')
        cy.get('[data-cy="btn-create"]')
            .click()

        // Start screen
        cy.url().should('include', '/start')
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
            .should(buffer => expect(buffer).to.be.equal(minimumCff))
    })
})
