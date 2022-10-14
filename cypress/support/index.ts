/* eslint-disable @typescript-eslint/no-namespace */

export {}

declare global {
    namespace Cypress {
        interface Chainable {
            /**
             * Custom command to select element using data-cy
             * @example cy.dataCy('btn-next')
             */
            dataCy(value: string): Chainable<Element>
        }
    }
}

Cypress.Commands.add('dataCy', (text) => {
    cy.get(`[data-cy="${text}"]`)
})
