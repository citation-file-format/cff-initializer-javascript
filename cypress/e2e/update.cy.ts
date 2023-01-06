const passingCffFiles = ['passing-basic.yml', 'passing-full.yml']
const badCffFiles = ['authors', 'cff-version', 'date-released', 'identifiers', 'type']

describe('On the update screen', () => {
    beforeEach(() => {
        cy.visit('/update')
    })
    describe('Should parse passing files correctly', () => {
        passingCffFiles.forEach((fileName) => {
            it(`file ${fileName}`, () => {
                cy.readFile(`cypress/e2e/yaml-examples/${fileName}`, 'binary', { timeout: 400 })
                    .then((str) => {
                        cy.dataCy('input-existing-cff')
                            .invoke('val', str)
                            .trigger('input')
                        cy.dataCy('btn-parse')
                            .click()
                        cy.dataCy('text-validation-msg')
                            .should('include.text', 'Parsed CFF successfully')
                        cy.dataCy('btn-start')
                            .click()
                        cy.url().should('include', '/start')
                        cy.dataCy('ta-cff-preview')
                            .should('include.value', str)
                    })
            })
        })
    })

    describe('Should sanitize salvageable files', () => {
        badCffFiles.forEach((fileName) => {
            it(`file bad-${fileName}.yml`, () => {
                cy.readFile(`cypress/e2e/yaml-examples/bad-${fileName}.yml`, 'binary', { timeout: 400 })
                    .then((str) => {
                        cy.dataCy('input-existing-cff')
                            .invoke('val', str)
                            .trigger('input')
                        cy.dataCy('btn-parse')
                            .click()
                        cy.dataCy('text-validation-msg')
                            .should('include.text', 'Parsed CFF successfully')
                    })
                cy.readFile(`cypress/e2e/yaml-examples/warning-${fileName}.txt`, 'binary', { timeout: 400 })
                    .then((str: string) => {
                        str.split('\n').forEach((line) => {
                            cy.dataCy('text-validation-msg')
                                .should('include.text', line)
                        })
                    })
                cy.readFile(`cypress/e2e/yaml-examples/clean-${fileName}.yml`, 'binary', { timeout: 400 })
                    .then((str) => {
                        cy.dataCy('btn-start')
                            .click()
                        cy.url().should('include', '/start')
                        cy.dataCy('ta-cff-preview')
                            .should('include.value', str)
                    })
            })
        })
    })

    describe('Catch the following errors', () => {
        it('should error for empty input', () => {
            ['', '# nothing'].forEach((str) => {
                cy.dataCy('input-existing-cff')
                    .invoke('val', str)
                    .trigger('input')
                cy.dataCy('btn-parse')
                    .click()
                cy.dataCy('text-validation-msg')
                    .should('include.text', 'Error: CFF is empty.')
            })
        })
        it('should error for list instead of map', () => {
            cy.dataCy('input-existing-cff')
                .invoke('val', '- a: 1')
                .trigger('input')
            cy.dataCy('btn-parse')
                .click()
            cy.dataCy('text-validation-msg')
                .should('include.text', 'Error: CFF is invalid. It should be a YAML map.')
        })
        it('should error for string instead of map', () => {
            cy.dataCy('input-existing-cff')
                .invoke('val', 'bad')
                .trigger('input')
            cy.dataCy('btn-parse')
                .click()
            cy.dataCy('text-validation-msg')
                .should('include.text', 'Error: CFF is invalid. It should be a YAML map.')
        })
        it('should error for general invalid YAML', () => {
            ['y : :', 'title: Software: the return'].forEach((str) => {
                cy.dataCy('input-existing-cff')
                    .invoke('val', str)
                    .trigger('input')
                cy.dataCy('btn-parse')
                    .click()
                cy.dataCy('text-validation-msg')
                    .should('include.text', 'Error: could not parse CFF because of the following YAML error:')
            })
        })
    })

    it('should warn when fields are passed to extra', () => {
        cy.dataCy('input-existing-cff')
            .invoke('val', 'extra: field')
            .trigger('input')
        cy.dataCy('btn-parse')
            .click()
        cy.dataCy('text-validation-msg')
            .should('include.text', "Property 'extra' was not identified as a basic field, so it was passed as an extra cff field")
    })
})
