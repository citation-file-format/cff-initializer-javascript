import { StepNameType } from 'src/store/app'

const basicStepNames = ['start', 'authors'] as Array<StepNameType>
const advancedStepNames = [
    'identifiers',
    'related-resources',
    'abstract',
    'keywords',
    'license',
    'version-specific'
] as Array<StepNameType>
const allStepNames = [...basicStepNames, ...advancedStepNames]

describe('App navigation', () => {
    describe('during basic mode', () => {
        it(`should have ${basicStepNames.length + 1} steps on stepper`, () => {
            cy.visit('/start')
            cy.get('.q-stepper__tab')
                .should('have.length', basicStepNames.length + 1)
        })
        it('should allow navigation using next/previous', () => {
            cy.visit('/start')
            cy.get('[data-cy="btn-previous"]')
                .should('not.be.visible')
            basicStepNames.forEach((step) => {
                cy.url().should('include', `/${step}`)
                cy.get('[data-cy="btn-next"]')
                    .click()
                cy.get('[data-cy="btn-previous"]')
                    .should('be.visible')
            })
            cy.url().should('include', '/finish-minimum')
            cy.get('[data-cy="btn-next"]')
                .should('not.be.visible')
            Array.from(basicStepNames).reverse().forEach((step) => {
                cy.get('[data-cy="btn-previous"]')
                    .click()
                cy.url().should('include', `/${step}`)
                cy.get('[data-cy="btn-next"]')
                    .should('be.visible')
            })
            cy.url().should('include', '/start')
            cy.get('[data-cy="btn-previous"]')
                .should('not.be.visible')
        })
        it('should be navigable through the stepper', () => {
            ['finish-minimum', ...basicStepNames, ...[...basicStepNames].reverse()].forEach((step) => {
                cy.visit(step === 'start' ? '/authors' : `/${step}`)
                cy.get(`[data-cy="step-${step}"]`)
                    .click()
                cy.url()
                    .should('contain', `/${step}`)
            })
        })
    })

    describe('during advanced mode', () => {
        beforeEach(() => {
            cy.visit('/start')
            cy.get('[data-cy="input-title"]')
                .type('A')
            cy.visit('/authors')
            cy.get('[data-cy="btn-add-author"]')
                .click()
            cy.visit('/finish-minimum')
            cy.get('[data-cy="btn-add-more"]')
                .click()
        })
        it(`should have ${allStepNames.length + 1} steps on stepper`, () => {
            cy.visit('/start')
            cy.get('.q-stepper__tab')
                .should('have.length', allStepNames.length + 1)
        })
        it('should allow navigation using next/previous ', () => {
            cy.visit('/start')
            cy.get('[data-cy="btn-previous"]')
                .should('not.be.visible')
            allStepNames.forEach((step) => {
                cy.url().should('include', `/${step}`)
                cy.get('[data-cy="btn-next"]')
                    .click()
                cy.get('[data-cy="btn-previous"]')
                    .should('be.visible')
            })
            cy.url().should('include', '/finish-advanced')
            cy.get('[data-cy="btn-next"]')
                .should('not.be.visible')
            Array.from(allStepNames).reverse().forEach((step) => {
                cy.get('[data-cy="btn-previous"]')
                    .click()
                cy.url().should('include', `/${step}`)
                cy.get('[data-cy="btn-next"]')
                    .should('be.visible')
            })
            cy.url().should('include', '/start')
            cy.get('[data-cy="btn-previous"]')
                .should('not.be.visible')
        })
        it('should be navigable through the stepper', () => {
            ['finish-advanced', ...allStepNames, ...[...allStepNames].reverse()].forEach((step) => {
                cy.visit(step === 'start' ? '/authors' : `/${step}`)
                cy.get(`[data-cy="step-${step}"]`)
                    .click()
                cy.url()
                    .should('contain', `/${step}`)
            })
        })
        describe('if there are no errors', () => {
            it('should jump from step to finish-advanced when finish is clicked', () => {
                allStepNames.forEach((step) => {
                    cy.visit(`/${step}`)
                    // The next test is just to make sure the page loaded without using cy.wait
                    cy.get('#form-title').should('not.contain', 'Congratulations')
                    cy.get('[data-cy="btn-finish"]')
                        .should('be.visible')
                        .click()
                    cy.url()
                        .should('contain', '/finish-advanced')
                })
            })
        })
    })

    describe('while navigating directly to a page', () => {
        it(`should have ${allStepNames.length + 1} steps and visible finish/next/previous`, () => {
            advancedStepNames.forEach((step) => {
                cy.visit(`/${step}`)
                cy.get('.q-stepper__tab')
                    .should('have.length', allStepNames.length + 1)
                cy.get('[data-cy="btn-finish"]')
                    .should('be.visible')
                cy.get('[data-cy="btn-next"]')
                    .should('be.visible')
                cy.get('[data-cy="btn-previous"]')
                    .should('be.visible')
            })
        })
        it(`should have ${basicStepNames.length + 1} steps, visible next/previous, and hidden finish`, () => {
            basicStepNames.forEach((step) => {
                cy.visit(`/${step}`)
                cy.get('.q-stepper__tab')
                    .should('have.length', basicStepNames.length + 1)
                cy.get('[data-cy="btn-finish"]')
                    .should('not.be.visible')
                cy.get('[data-cy="btn-next"]')
                    .should('be.visible')
                if (step === 'start') {
                    cy.get('[data-cy="btn-previous"]')
                        .should('not.be.visible')
                } else {
                    cy.get('[data-cy="btn-previous"]')
                        .should('be.visible')
                }
            })
        })
        it(`should have ${basicStepNames.length + 1} steps, visible previous, hidden next/finish for step finish-minimum`, () => {
            cy.visit('/finish-minimum')
            cy.get('.q-stepper__tab')
                .should('have.length', basicStepNames.length + 1)
            cy.get('[data-cy="btn-finish"]')
                .should('not.be.visible')
            cy.get('[data-cy="btn-next"]')
                .should('not.be.visible')
            cy.get('[data-cy="btn-previous"]')
                .should('be.visible')
        })
        it(`should have ${advancedStepNames.length + 1} steps, visible previous, hidden next/finish for step finish-advanced`, () => {
            cy.visit('/finish-advanced')
            cy.get('.q-stepper__tab')
                .should('have.length', allStepNames.length + 1)
            cy.get('[data-cy="btn-finish"]')
                .should('not.be.visible')
            cy.get('[data-cy="btn-next"]')
                .should('not.be.visible')
            cy.get('[data-cy="btn-previous"]')
                .should('be.visible')
        })
    })
})
