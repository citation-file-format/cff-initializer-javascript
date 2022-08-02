const minimumCff = '# This CITATION.cff file was generated with cffinit.\n# Visit https://bit.ly/cffinit to generate yours today!\n\ncff-version: 1.2.0\ntitle: My Title\nmessage: Some message\ntype: software\nauthors:\n  - {}\n'

const minimumSteps = ['start', 'authors', 'finish-minimum']
const stepperSteps = ['start', 'authors', 'finish-minimum', 'identifiers', 'related-resources', 'abstract', 'keywords', 'license', 'version-specific', 'finish-advanced']

const stepperActions = ['previous', 'next', 'finish']

const testStepperSteps = (warningArray : string[], notPresentArray : string[]) => {
    warningArray.forEach((step) => {
        cy.get(`[data-cy="stepper-${step}"]`)
            .find('i')
            .should('have.text', 'warning')
    })
    notPresentArray.forEach((step) => {
        cy.get(`[data-cy="stepper-${step}"]`)
            .should('not.exist')
    })
    stepperSteps.filter(step => !warningArray.includes(step) && !notPresentArray.includes(step))
        .forEach((step) => {
            cy.get(`[data-cy="stepper-${step}"]`)
                .find('i')
                .should('not.have.text', 'warning')
        })
}

const testStepperActions = (visibleActions : string[]) => {
    visibleActions.forEach((action) => {
        cy.get(`[data-cy="btn-${action}"]`)
            .should('be.visible')
    })
    stepperActions.filter(action => !visibleActions.includes(action))
        .forEach((action) => {
            cy.get(`[data-cy="btn-${action}"]`)
                .should('not.be.visible')
        })
}

const fillMinimumInformation = () => {
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
        .type('Some message')
        .should('have.value', 'Some message')
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
}

describe('Minimum usage', () => {
    it('Visit site, fill minimum information and download', () => {
        fillMinimumInformation()

        // Finish Minimum screen
        cy.url().should('include', '/finish-minimum')
        cy.get('[data-cy="btn-download"]')
            .click()
        const downloadsFolder = Cypress.config('downloadsFolder')
        const cfffile = `${downloadsFolder}/CITATION.cff`

        cy.readFile(cfffile, 'binary', { timeout: 400 })
            .should(buffer => expect(buffer).to.be.equal(minimumCff))
    })

    it('Fill minimum and go through each advanced page', () => {
        fillMinimumInformation()

        // Click Add More
        cy.get('[data-cy="btn-add-more"]')
            .click()

        ;['identifiers', 'related-resources', 'abstract', 'keywords', 'license', 'version-specific']
            .forEach((screen) => {
                cy.url().should('include', `/${screen}`)
                cy.get('[data-cy="btn-next"]')
                    .click()
            })
        cy.url().should('include', '/finish-advanced')
        cy.get('[data-cy="btn-download"]')
            .click()
        const downloadsFolder = Cypress.config('downloadsFolder')
        const cfffile = `${downloadsFolder}/CITATION.cff`

        cy.readFile(cfffile, 'binary', { timeout: 400 })
            .should(buffer => expect(buffer).to.be.equal(minimumCff))
    })
})

describe('Start page interactions', () => {
    beforeEach(() => {
        cy.visit('/start')
        cy.get('[data-cy="input-title"]').as('title')
        cy.get('[data-cy="input-message"]').as('message')
        cy.get('[data-cy="radio-type"]').as('type')
    })

    it('Initial state', () => {
        testStepperSteps(
            ['start', 'authors'], // Have error
            stepperSteps.filter(step => !minimumSteps.includes(step)) // Are not present
        )
        testStepperActions(['next'])
        cy.get('@title')
            .parents()
            .should('have.class', 'has-error')
        cy.get('div[role=alert]')
            .first()
            .should('have.text', "'title' needs to be at least 1 character long.")
        cy.get('@message')
            .parents()
            .should('have.class', 'has-error')
        cy.get('div[role=alert]')
            .last()
            .should('have.text', "'message' needs to be at least 1 character long.")
    })
    it('Fix title', () => {
        cy.get('@title')
            .type('My title')

        testStepperSteps(
            ['start', 'authors'],
            stepperSteps.filter(step => !minimumSteps.includes(step))
        )
        testStepperActions(['next'])
        cy.get('@title')
            .parents()
            .should('not.have.class', 'has-error')
        cy.get('@message')
            .parents()
            .should('have.class', 'has-error')
    })

    it('Fix message', () => {
        cy.get('@message')
            .type('My message')

        testStepperSteps(
            ['start', 'authors'],
            stepperSteps.filter(step => !minimumSteps.includes(step))
        )
        testStepperActions(['next'])
        cy.get('@title')
            .parents()
            .should('have.class', 'has-error')
        cy.get('@message')
            .parents()
            .should('not.have.class', 'has-error')
    })

    it('Fix all', () => {
        cy.get('@title')
            .type('My title')
        cy.get('@message')
            .type('My message')

        testStepperSteps(
            ['authors'],
            stepperSteps.filter(step => !minimumSteps.includes(step))
        )
        testStepperActions(['next'])
        cy.get('@title')
            .parents()
            .should('not.have.class', 'has-error')
        cy.get('@message')
            .parents()
            .should('not.have.class', 'has-error')
    })
})

describe('Authors page interactions', () => {
    const fieldsWithoutValidation = ['given-names', 'name-particle', 'family-names', 'name-suffix', 'affiliation']
    beforeEach(() => {
        cy.visit('/authors')
        cy.get('[data-cy="btn-add-author"]').as('add-author')
    })

    it('Initial state', () => {
        testStepperSteps(
            ['start', 'authors'],
            stepperSteps.filter(step => !minimumSteps.includes(step))
        )
        testStepperActions(['previous', 'next'])
        cy.get('.q-card')
            .should('not.exist')
        cy.get('.q-banner')
            .should('have.text', 'Use the button to add an author.')
    })

    it('Adding authors', () => {
        cy.get('@add-author')
            .click()
        testStepperSteps(
            ['start'],
            stepperSteps.filter(step => !minimumSteps.includes(step))
        )
        cy.get('.q-banner')
            .should('not.exist')

        cy.get('.q-card').should(($div) => {
            expect($div).to.have.length(1)
        })
        fieldsWithoutValidation.forEach((field) => {
            cy.get(`[data-cy="input-${field}`)
                .type(field)
                .should('have.value', field)
        })

        cy.get('[data-cy="input-email"]')
            .type('bad')
            .parents()
            .should('have.class', 'has-error')
        cy.get('[data-cy="stepper-authors"]')
            .find('i')
            .should('have.text', 'warning')
        cy.get('[data-cy="input-email"]')
            .clear()
            .type('good@good.com')
            .parents()
            .should('not.have.class', 'has-error')

        cy.get('[data-cy="input-orcid"]')
            .type('0000-0000-0000-0000')
            .parents()
            .should('have.class', 'has-error')
        cy.get('[data-cy="stepper-authors"]')
            .find('i')
            .should('have.text', 'warning')
        cy.get('[data-cy="input-orcid"]')
            .clear()
            .type('https://orcid.org/0000-0000-0000-0000')
            .parents()
            .should('not.have.class', 'has-error')

        cy.get('[data-cy="btn-done"]')
            .click()

        cy.get('.q-card').should(($div) => {
            expect($div).to.have.length(1)
        })
        cy.get('[data-cy="stepper-authors"]')
            .find('i')
            .should('not.have.text', 'warning')

        cy.get('@add-author')
            .click()
        cy.get('.q-card').should(($div) => {
            expect($div).to.have.length(2)
        })
    })

    it('Add, remove and check duplication error', () => {
        cy.get('@add-author')
            .click()
        cy.get('@add-author')
            .click()
        cy.get('.q-banner')
            .should('have.text', 'There are duplicate authors.')
        cy.get('[data-cy="btn-remove"]')
            .click()
        cy.get('.q-card').should(($div) => {
            expect($div).to.have.length(1)
        })
        cy.get('.q-banner')
            .should('not.exist')
    })
})
