import { StepNameType } from 'src/store/app'

const stepNames = [
    'start',
    'authors',
    'identifiers',
    'related-resources',
    'abstract',
    'keywords',
    'license',
    'version-specific',
    'extra-cff-fields'
] as Array<StepNameType>

describe('App navigation', () => {
    it('should be able to go back through the logo button', () => {
        cy.visit('/start')
        cy.dataCy('btn-logo')
            .click()
        cy.url().then((e) => expect(e.endsWith('#/')).to.be.true)
    })

    it('should not allow navigation until errors are fixed', () => {
        cy.visit('/start')
        cy.dataCy('btn-next')
            .should('be.disabled')
        cy.dataCy('btn-finish')
            .should('be.disabled')
        cy.dataCy('input-title')
            .type('My Title')
        cy.dataCy('btn-finish')
            .should('be.disabled')
        cy.dataCy('btn-next')
            .should('not.be.disabled')
            .click()
        cy.url()
            .should('include', '/authors')
        cy.dataCy('btn-next')
            .should('be.disabled')
        cy.dataCy('btn-finish')
            .should('be.disabled')
        cy.dataCy('step-identifiers')
            .click()
        cy.url()
            .should('include', '/authors')
        cy.dataCy('step-start')
            .click()
        cy.url()
            .should('include', '/start')
        cy.dataCy('input-title')
            .clear()
        cy.dataCy('btn-next')
            .should('be.disabled')
        cy.dataCy('step-authors')
            .click()
        cy.url()
            .should('include', '/start')
        cy.dataCy('input-title')
            .type('My Title')
        cy.dataCy('step-authors')
            .click()
        cy.url()
            .should('include', '/authors')
        cy.dataCy('btn-add-author')
            .click()
        cy.dataCy('btn-next')
            .should('not.be.disabled')
        cy.dataCy('step-identifiers')
            .click()
        cy.url()
            .should('include', '/authors')
        cy.dataCy('btn-finish')
            .should('not.be.disabled')
    })

    it('should not allow download if there are errors', () => {
        cy.visit('/start')
        cy.dataCy('btn-download')
            .should('not.be.enabled')
        cy.dataCy('input-title')
            .type('A')
        cy.visit('/authors')
        cy.dataCy('btn-add-author')
            .click()
        cy.dataCy('btn-download')
            .should('not.be.disabled')
    })

    it('should only allow clicking on advanced screens on stepper if no intermediary screen has errors', () => {
        cy.visit('/start')
        cy.dataCy('input-title')
            .type('A')
        cy.visit('/authors')
        cy.dataCy('btn-add-author')
            .click()
        cy.dataCy('btn-next')
            .click()
            .click()
            .click()
        cy.dataCy('btn-previous')
            .click()
        cy.dataCy('input-repository')
            .type('bad')
        cy.dataCy('btn-previous')
            .click()
        cy.dataCy('step-abstract')
            .click()
        cy.url().should('include', '/identifiers')
        cy.get('.q-notification__message')
            .should('contain.text', 'Fix error in "Related Resources"')
    })

    describe('basic checks', () => {
        beforeEach(() => {
            cy.visit('/start')
            cy.dataCy('input-title')
                .type('A')
            cy.visit('/authors')
            cy.dataCy('btn-add-author')
                .click()
        })
        it(`should have ${stepNames.length + 1} steps on stepper`, () => {
            cy.visit('/start')
            cy.get('.q-stepper__tab')
                .should('have.length', stepNames.length + 1)
        })
        it('should allow navigation using next/previous ', () => {
            cy.visit('/start')
            cy.dataCy('btn-previous')
                .should('not.be.visible')
            stepNames.forEach((step) => {
                cy.url().should('include', `/${step}`)
                cy.dataCy('btn-next')
                    .click()
                cy.dataCy('btn-previous')
                    .should('be.visible')
            })
            cy.url().should('include', '/finish')
            cy.dataCy('btn-next')
                .should('not.be.visible')
            Array.from(stepNames).reverse().forEach((step) => {
                cy.dataCy('btn-previous')
                    .click()
                cy.url().should('include', `/${step}`)
                cy.dataCy('btn-next')
                    .should('be.visible')
            })
            cy.url().should('include', '/start')
            cy.dataCy('btn-previous')
                .should('not.be.visible')
        })
        it('should be navigable through the stepper', () => {
            ['finish', ...stepNames, ...[...stepNames].reverse()].forEach((step) => {
                cy.visit(step === 'start' ? '/authors' : `/${step}`)
                cy.dataCy(`step-${step}`)
                    .click()
                cy.url()
                    .should('contain', `/${step}`)
            })
        })
        describe('if there are no errors', () => {
            it('should jump from step to finish when finish is clicked', () => {
                stepNames.forEach((step) => {
                    cy.visit(`/${step}`)
                    // The next test is just to make sure the page loaded without using cy.wait
                    cy.get('#form-title').should('not.contain', 'Congratulations')
                    cy.dataCy('btn-finish')
                        .should('be.visible')
                        .click()
                    cy.url()
                        .should('contain', '/finish')
                })
            })
        })
    })

    describe('while navigating directly to a page', () => {
        it(`should have ${stepNames.length + 1} steps and visible finish/next/previous`, () => {
            stepNames.forEach((step) => {
                cy.visit(`/${step}`)
                cy.get('.q-stepper__tab')
                    .should('have.length', stepNames.length + 1)
                cy.dataCy('btn-finish')
                    .should('be.visible')
                cy.dataCy('btn-next')
                    .should('be.visible')
                cy.dataCy('btn-previous')
                    .should((step === 'start' ? 'not.' : '') + 'be.visible')
            })
        })
    })

    describe('On the screen Authors', () => {
        it('should be possible to move authors around', () => {
            cy.visit('/authors')
            ;['A', 'B', 'C'].forEach((givenName) => {
                cy.dataCy('btn-add-author')
                    .click()
                cy.dataCy('input-given-names')
                    .type('John')
                cy.dataCy('input-family-names')
                    .type(`${givenName}. Doe`)
            })
            cy.dataCy('btn-done')
                .click()
            cy.dataCy('card-info0')
                .should('contain.text', 'John  A. Doe')
            cy.dataCy('card-info1')
                .should('contain.text', 'John  B. Doe')
            cy.dataCy('card-info2')
                .should('contain.text', 'John  C. Doe')

            // Enabled and disabled
            const disabledButtons = ['btn-move-up0', 'btn-move-down2']
            ;['up', 'down'].forEach((movement) => {
                [0, 1, 2].forEach((authorIndex) => {
                    const buttonName = `btn-move-${movement}${authorIndex}`
                    cy.dataCy(buttonName)
                        .should(
                            disabledButtons.includes(buttonName)
                                ? 'be.disabled'
                                : 'be.enabled'
                        )
                })
            })

            const movementsAndResults = [
                [['down0'], ['B', 'A', 'C']],
                [['down1'], ['B', 'C', 'A']],
                [['up1'], ['C', 'B', 'A']],
                [['up2'], ['C', 'A', 'B']],
                [['down0', 'down0'], ['C', 'A', 'B']],
                [['down0', 'up2'], ['A', 'B', 'C']]
            ]
            movementsAndResults.forEach((value) => {
                const [movements, result] = value
                movements.forEach((movement) => {
                    cy.dataCy(`btn-move-${movement}`)
                        .click()
                })
                result.forEach((middle, index) => {
                    cy.dataCy(`card-info${index}`)
                        .should('contain.text', `John  ${middle}. Doe`)
                })
            })

            cy.dataCy('btn-edit1')
                .click()
            cy.dataCy('input-name-particle')
                .type('von')
            cy.dataCy('btn-done')
                .click()
            cy.dataCy('card-info1')
                .should('contain.text', 'John von B. Doe')

            cy.dataCy('btn-remove0')
                .click()
            cy.dataCy('card-info0')
                .should('contain.text', 'John von B. Doe')
            cy.dataCy('card-author0')
                .should('exist')
            cy.dataCy('card-author1')
                .should('exist')
            cy.dataCy('card-author2')
                .should('not.exist')
            cy.dataCy('btn-remove0')
                .click()
            cy.dataCy('card-info0')
                .should('contain.text', 'John  C. Doe')
            cy.dataCy('card-author0')
                .should('exist')
            cy.dataCy('card-author1')
                .should('not.exist')
        })
    })

    describe('On the screen Identifiers', () => {
        it('should be possible to move identifiers around', () => {
            cy.visit('/identifiers')
            ;['A', 'B', 'C'].forEach((identifier) => {
                cy.dataCy('btn-add-identifier')
                    .click()
                cy.dataCy('input-value')
                    .type(`10.1234/${identifier}`)
            })
            cy.dataCy('btn-done')
                .click()
            cy.dataCy('card-info0')
                .should('contain.text', '10.1234/A')
            cy.dataCy('card-info1')
                .should('contain.text', '10.1234/B')
            cy.dataCy('card-info2')
                .should('contain.text', '10.1234/C')

            // Enabled and disabled
            const disabledButtons = ['btn-move-up0', 'btn-move-down2']
            ;['up', 'down'].forEach((movement) => {
                [0, 1, 2].forEach((identifierIndex) => {
                    const buttonName = `btn-move-${movement}${identifierIndex}`
                    cy.dataCy(buttonName)
                        .should(
                            disabledButtons.includes(buttonName)
                                ? 'be.disabled'
                                : 'be.enabled'
                        )
                })
            })

            const movementsAndResults = [
                [['down0'], ['B', 'A', 'C']],
                [['down1'], ['B', 'C', 'A']],
                [['up1'], ['C', 'B', 'A']],
                [['up2'], ['C', 'A', 'B']],
                [['down0', 'down0'], ['C', 'A', 'B']],
                [['down0', 'up2'], ['A', 'B', 'C']]
            ]
            movementsAndResults.forEach((value) => {
                const [movements, result] = value
                movements.forEach((movement) => {
                    cy.dataCy(`btn-move-${movement}`)
                        .click()
                })
                result.forEach((identifier, index) => {
                    cy.dataCy(`card-info${index}`)
                        .should('contain.text', `10.1234/${identifier}`)
                })
            })

            cy.dataCy('btn-edit1')
                .click()
            cy.dataCy('input-value')
                .clear()
                .type('10.4321/B')
            cy.dataCy('btn-done')
                .click()
            cy.dataCy('card-info1')
                .should('contain.text', '10.4321/B')

            cy.dataCy('btn-remove0')
                .click()
            cy.dataCy('card-info0')
                .should('contain.text', '10.4321/B')
            cy.dataCy('card-identifier0')
                .should('exist')
            cy.dataCy('card-identifier1')
                .should('exist')
            cy.dataCy('card-identifier2')
                .should('not.exist')
            cy.dataCy('btn-remove0')
                .click()
            cy.dataCy('card-info0')
                .should('contain.text', '10.1234/C')
            cy.dataCy('card-identifier0')
                .should('exist')
            cy.dataCy('card-identifier1')
                .should('not.exist')
        })
    })

    describe('On the screen Keywords', () => {
        it('should be possible to move keywords around', () => {
            cy.visit('/keywords')
            ;['A', 'B', 'C'].forEach((keyword, index) => {
                cy.dataCy('btn-add-keyword')
                    .click()
                cy.dataCy(`input-keyword${index}`)
                    .type(`key${keyword}`)
            })

            // Enabled and disabled
            const disabledButtons = ['btn-move-up0', 'btn-move-down2']
            ;['up', 'down'].forEach((movement) => {
                [0, 1, 2].forEach((keywordIndex) => {
                    const buttonName = `btn-move-${movement}${keywordIndex}`
                    cy.dataCy(buttonName)
                        .should(
                            disabledButtons.includes(buttonName)
                                ? 'be.disabled'
                                : 'be.enabled'
                        )
                })
            })

            const movementsAndResults = [
                [['down0'], ['B', 'A', 'C']],
                [['down1'], ['B', 'C', 'A']],
                [['up1'], ['C', 'B', 'A']],
                [['up2'], ['C', 'A', 'B']],
                [['down0', 'down0'], ['C', 'A', 'B']],
                [['down0', 'up2'], ['A', 'B', 'C']]
            ]
            movementsAndResults.forEach((value) => {
                const [movements, result] = value
                movements.forEach((movement) => {
                    cy.dataCy(`btn-move-${movement}`)
                        .click()
                })
                result.forEach((keyword, index) => {
                    cy.dataCy(`input-keyword${index}`)
                        .should('contain.value', `key${keyword}`)
                })
            })

            cy.dataCy('btn-remove0')
                .click()
            cy.dataCy('input-keyword0')
                .should('contain.value', 'keyB')
            cy.dataCy('input-keyword1')
                .should('contain.value', 'keyC')
            cy.dataCy('input-keyword2')
                .should('not.exist')
            cy.dataCy('btn-remove0')
                .click()
            cy.dataCy('input-keyword0')
                .should('contain.value', 'keyC')
            cy.dataCy('input-keyword1')
                .should('not.exist')
        })
    })
})
