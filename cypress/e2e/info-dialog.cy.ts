const infoDialogs = [
    {
        screen: 'start',
        values: ['type', 'title', 'message']
    },
    {
        screen: 'authors',
        values: ['authors', 'given-names', 'name-particle, family-names, name-suffix', 'email', 'affiliation', 'orcid'],
        before: () => { cy.get('[data-cy="btn-add-author"]').click() }
    },
    {
        screen: 'identifiers',
        values: ['identifiers', 'doi', 'description'],
        before: () => { cy.get('[data-cy="btn-add-identifier"]').click() }
    },
    {
        screen: 'identifiers',
        values: ['url', 'description'],
        before: () => {
            cy.get('[data-cy="btn-add-identifier"]').click()
            cy.get('[data-cy="radio-identifier"]').children().eq(1).click()
        }
    },
    {
        screen: 'identifiers',
        values: ['swh', 'description'],
        before: () => {
            cy.get('[data-cy="btn-add-identifier"]').click()
            cy.get('[data-cy="radio-identifier"]').children().eq(2).click()
        }
    },
    {
        screen: 'identifiers',
        values: ['other', 'description'],
        before: () => {
            cy.get('[data-cy="btn-add-identifier"]').click()
            cy.get('[data-cy="radio-identifier"]').children().eq(3).click()
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
                cy.get(`[data-cy="info-icon-${value}"]`)
                    .click()
                cy.get(`[data-cy="info-dialog-${value}"]`)
                    .find('button')
                    .contains('close')
                    .click()
            }
        }
    })
})
