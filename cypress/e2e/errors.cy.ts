import { StepNameType } from 'src/store/app'

const stepNames = [
    'start',
    'authors',
    'identifiers',
    'related-resources',
    'abstract',
    'keywords',
    'license',
    'version-specific'
] as Array<StepNameType>

describe('On application start', () => {
    // Since the stepper is separate from the screen itself, it doesn't matter which screen we join
    const stepsWithExpectedErrors = ['start', 'authors']
    it('should have errors in start and authors, but not in any other steps', () => {
        cy.visit('/finish')
        stepsWithExpectedErrors.forEach((step) => {
            cy.checkThatStepperValidityIs(false, step)
        })
        // Future proofing, in case more steps add considered basic
        stepNames.filter(x => !stepsWithExpectedErrors.includes(x))
            .forEach((step) => {
                cy.checkThatStepperValidityIs(true, step)
            })
    })
    it('should have error on preview', () => {
        cy.dataCy('text-validation-msg')
            .should('contain.text', 'minimum')
    })
})

describe('From a fixed app', () => {
    beforeEach(() => {
        cy.visit('/start')
        cy.dataCy('input-title')
            .type('A')
        cy.visit('/authors')
        cy.dataCy('btn-add-author')
            .click()
        cy.visit('/finish')
    })
    it('should have no errors', () => {
        cy.checkThatAppValidityIs(true)
    })
    it('should validate screen Start', () => {
        cy.visit('/start')
        cy.checkThatInputValidityIs(true, 'message')
        cy.dataCy('input-title')
            .clear()
        cy.checkThatAppValidityIs(false)
        cy.checkThatInputValidityIs(false, 'title')
        cy.get('.q-field__messages > div')
            .should('have.length', 1)

        cy.dataCy('input-title')
            .type('A')
        cy.findInputError('title')
            .should('not.exist')

        cy.checkThatInputValidityIs(true, 'message')
        cy.checkThatAppValidityIs(true)
    })

    describe('On screen Authors', () => {
        beforeEach(() => {
            cy.visit('/authors')
        })

        it('should validate missing authors', () => {
            cy.dataCy('btn-remove')
                .click()
            cy.checkThatAppValidityIs(false)
            cy.dataCy('banner-error-messages')
                .should('contain.text', 'Add at least one author')
            cy.dataCy('btn-add-author')
                .click()
            cy.checkThatAppValidityIs(true)
        })
        it('should validate duplicate authors', () => {
            cy.dataCy('btn-remove')
                .click()
            cy.dataCy('btn-add-author')
                .click()
            cy.dataCy('input-given-names')
                .type('A')
            cy.dataCy('btn-done')
                .click()
            cy.dataCy('btn-add-author')
                .click()
            cy.dataCy('input-given-names')
                .type('A')
            cy.dataCy('btn-done')
                .click()

            cy.dataCy('card-author0')
                .should('have.class', 'red-border')
            cy.checkThatAppValidityIs(false)
            cy.dataCy('banner-error-messages')
                .should('contain.text', 'There are duplicate authors')

            cy.dataCy('btn-remove0')
                .click()
            cy.checkThatAppValidityIs(true)
        })
        it('should validate authors\' fields', () => {
            cy.dataCy('btn-remove')
                .click()
            cy.dataCy('btn-add-author')
                .click()
            cy.dataCy('input-email')
                .type('a')
            cy.checkThatInputValidityIs(false, 'email')
            cy.checkThatAppValidityIs(false)
            cy.dataCy('input-email')
                .type('@a.com')
            cy.checkThatInputValidityIs(true, 'email')
            cy.checkThatAppValidityIs(true)

            cy.dataCy('input-orcid')
                .type('1')
            cy.checkThatInputValidityIs(false, 'orcid')
            cy.checkThatAppValidityIs(false)
            cy.dataCy('input-orcid')
                .type('23412341234123X')
                .parents('.q-field')
                .should('not.have.class', 'q-field--error')
            cy.checkThatAppValidityIs(true)
        })
    })

    describe('On screen Identifiers', () => {
        beforeEach(() => {
            cy.visit('/identifiers')
        })
        it('should validate value', () => {
            cy.dataCy('btn-add-identifier')
                .click()
            cy.checkThatInputValidityIs(false, 'value')
            cy.checkThatAppValidityIs(false)
            cy.dataCy('input-value')
                .type('10.1234/x')
            cy.checkThatInputValidityIs(true, 'value')
            cy.checkThatAppValidityIs(true)
            cy.dataCy('input-value')
                .clear()
                .type('bad')
            cy.checkThatInputValidityIs(false, 'value')
            cy.checkThatAppValidityIs(false)

            cy.dataCy('radio-identifier-url')
                .click()
            cy.checkThatInputValidityIs(false, 'value')
            cy.checkThatAppValidityIs(false)
            cy.dataCy('input-value')
                .clear()
                .type('https://a')
            cy.checkThatInputValidityIs(true, 'value')
            cy.checkThatAppValidityIs(true)
            cy.dataCy('input-value')
                .clear()
            cy.checkThatInputValidityIs(false, 'value')
            cy.checkThatAppValidityIs(false)

            cy.dataCy('radio-identifier-swh')
                .click()
            cy.checkThatInputValidityIs(false, 'value')
            cy.checkThatAppValidityIs(false)
            cy.dataCy('input-value')
                .clear()
                .type('swh:1:rev:0123456789abcdef0123456789abcdef01234567')
            cy.checkThatInputValidityIs(true, 'value')
            cy.checkThatAppValidityIs(true)
        })

        it('should validate duplicate identifiers', () => {
            cy.dataCy('btn-add-identifier')
                .click()
            cy.dataCy('input-value')
                .type('10.1234/x')
            cy.dataCy('btn-done')
                .click()
            cy.dataCy('btn-add-identifier')
                .click()
            cy.dataCy('input-value')
                .type('10.1234/x')
            cy.dataCy('btn-done')
                .click()
            cy.dataCy('card-identifier0')
                .should('have.class', 'red-border')
            cy.dataCy('banner-error-messages')
                .should('contain.text', 'There are duplicate identifier')
            cy.checkThatAppValidityIs(false)
            cy.dataCy('btn-remove0')
                .click()
            cy.checkThatAppValidityIs(true)
        })
    })

    it('should validate screen Related Resources', () => {
        const fields = ['repository-code', 'url', 'repository', 'repository-artifact']
        cy.visit('/related-resources')
        fields.forEach((field) => {
            cy.dataCy(`input-${field}`)
                .type('bad')
            cy.checkThatInputValidityIs(false, field)
            cy.checkThatAppValidityIs(false)
            cy.dataCy(`input-${field}`)
                .clear()
                .type('https://a')
            cy.checkThatInputValidityIs(true, field)
            cy.checkThatAppValidityIs(true)
            cy.dataCy(`input-${field}`)
                .type(' ')
            cy.checkThatInputValidityIs(false, field)
            cy.checkThatAppValidityIs(false)
            cy.dataCy(`input-${field}`)
                .clear()
            cy.checkThatInputValidityIs(true, field)
            cy.checkThatAppValidityIs(true)
        })
    })

    describe('On screen keywords', () => {
        beforeEach(() => {
            cy.visit('/keywords')
        })
        it('should validate empty keywords', () => {
            cy.dataCy('btn-add-keyword')
                .click()
            cy.checkThatInputValidityIs(false, 'keyword0')
            cy.checkThatAppValidityIs(false)
            cy.dataCy('input-keyword0')
                .type('a')
            cy.checkThatInputValidityIs(true, 'keyword0')
            cy.checkThatAppValidityIs(true)
        })
        it('should validate duplicate keywords', () => {
            cy.dataCy('btn-add-keyword')
                .click()
                .click()
            cy.checkThatInputValidityIs(false, 'keyword0')
            cy.checkThatInputValidityIs(false, 'keyword1')
            cy.dataCy('banner-error-messages')
                .should('contain.text', 'There are duplicate keywords')
            cy.checkThatAppValidityIs(false)
            cy.dataCy('input-keyword0')
                .type('a')
            cy.dataCy('input-keyword1')
                .type('b')
            cy.checkThatInputValidityIs(true, 'keyword0')
            cy.checkThatInputValidityIs(true, 'keyword1')
            cy.checkThatAppValidityIs(true)
        })
    })

    it('should validate screen Version Specific', () => {
        cy.visit('/version-specific')
        cy.dataCy('input-date-released')
            .type('1')
        cy.checkThatInputValidityIs(false, 'date-released')
        cy.checkThatAppValidityIs(false)
        cy.dataCy('input-date-released')
            .type('1111111')
            .parents('.q-field')
            .should('not.have.class', 'q-field--error')
        cy.checkThatAppValidityIs(true)
    })
})
