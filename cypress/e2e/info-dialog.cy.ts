const infoDialogs = [
    {
        screen: 'start',
        values: ['type', 'title', 'message']
    },
    {
        screen: 'authors',
        values: ['authors', 'given-names, name-particle, family-names, name-suffix', 'email', 'affiliation', 'orcid'],
        before: () => { cy.dataCy('btn-add-person').click() }
    },
    {
        screen: 'authors',
        values: ['authors', 'name', 'address', 'city', 'country', 'post-code', 'location', 'region', 'alias', 'email', 'date-start', 'date-end', 'tel', 'fax', 'website', 'orcid'],
        before: () => { cy.dataCy('btn-add-entity').click() }
    },
    {
        screen: 'identifiers',
        values: ['identifiers', 'doi', 'description'],
        before: () => { cy.dataCy('btn-add-identifier').click() }
    },
    {
        screen: 'identifiers',
        values: ['url', 'description'],
        before: () => {
            cy.dataCy('btn-add-identifier').click()
            cy.dataCy('radio-identifier-url').click()
        }
    },
    {
        screen: 'identifiers',
        values: ['swh', 'description'],
        before: () => {
            cy.dataCy('btn-add-identifier').click()
            cy.dataCy('radio-identifier-swh').click()
        }
    },
    {
        screen: 'identifiers',
        values: ['other', 'description'],
        before: () => {
            cy.dataCy('btn-add-identifier').click()
            cy.dataCy('radio-identifier-other').click()
        }
    },
    {
        screen: 'related-resources',
        values: ['repository-code', 'url', 'repository', 'repository-artifact']
    },
    {
        screen: 'abstract',
        values: ['abstract']
    },
    {
        screen: 'keywords',
        values: ['keywords']
    },
    {
        screen: 'license',
        values: ['license']
    },
    {
        screen: 'version-specific',
        values: ['commit', 'version', 'date-released']
    }
]

describe('InfoDialog', () => {
    it('exists for all we need', () => {
        for (const infoDialog of infoDialogs) {
            cy.visit(`/${infoDialog.screen}`)
            if (infoDialog.before) {
                infoDialog.before()
            }
            for (const value of infoDialog.values) {
                cy.dataCy(`info-icon-${value}`)
                    .click()
                cy.dataCy(`info-dialog-${value}`)
                    .find('button')
                    .contains('close')
                    .click()
            }
        }
    })
})
