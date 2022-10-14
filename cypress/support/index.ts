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

            /**
             * Custom command to check whether the step has .q-stepper__tab.q-stepper__tab--error
             * @example cy.checkThatStepperValidityIs(true, 'start')
             */
            checkThatStepperValidityIs(passing: boolean, step: string): Chainable<Element>

            /**
             * Custom command to find the input's error message
             * @example cy.findInputError('title').should('exist')
             */
            findInputError(input: string): Chainable<Element>

            /**
             * Custom command to find the input's error message
             * @example cy.checkInputErrorState(true, 'title')
             */
             checkThatInputValidityIs(passing: boolean, input: string): Chainable<Element>

             /**
              * Custom command to check general errors in the app, like the preview
              * @example cy.checkThatAppValidityIs(true)
              */
             checkThatAppValidityIs(passing: boolean): Chainable<Element>
        }
    }
}

const prependIf = (passing: boolean, str: string) => {
    if (passing) {
        return 'not.' + str
    } else {
        return str
    }
}

Cypress.Commands.add('dataCy', (text) => {
    cy.get(`[data-cy="${text}"]`)
})

Cypress.Commands.add('checkThatStepperValidityIs', (passing, step) => {
    cy.dataCy(`step-${step}`)
        .find('.q-stepper__tab')
        .should(prependIf(passing, 'have.class'), 'q-stepper__tab--error')
})

Cypress.Commands.add('findInputError', (input) => {
    cy.dataCy(`input-${input}`)
        .parents('.q-field')
        .find('.q-field__messages > div')
})

Cypress.Commands.add('checkThatInputValidityIs', (passing, input) => {
    cy.dataCy(`input-${input}`)
        .parents('.q-field')
        .should(prependIf(passing, 'have.class'), 'has-error')
        .find('.q-field__messages > div')
        .should(prependIf(passing, 'exist'))
})

Cypress.Commands.add('checkThatAppValidityIs', (passing) => {
    cy.dataCy('ta-cff-preview')
        .should(prependIf(passing, 'have.class'), 'error')
    cy.dataCy('text-validation-msg')
        .should(prependIf(passing, 'have.class'), 'invalid')
        .should(prependIf(!passing, 'contain.text'), 'Your CITATION.cff is valid')
        .should(prependIf(passing, 'contain.text'), 'not')
})
