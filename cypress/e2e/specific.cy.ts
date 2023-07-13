describe('Issue 637 - ORCID freeze', () => {
    it('should work when writing a full ORCID with dashes', () => {
        cy.visit('/authors')
        cy.dataCy('btn-add-person')
            .click()
        cy.dataCy('input-orcid')
            .type('1234-1234-1234-1234')
    })
})
