import { Notify } from 'quasar'

import { AuthorType } from './types'
import { useCff } from './store/cff'

export async function importDoi (doi: string) {
    const { setTitle, setType, setAbstract, setAuthors, setKeywords, setUrl, setVersion, setDateReleased } = useCff()

    const url = `https://doi.org/${doi}`
    // TODO add progress bar
    const res = await fetch(
        url,
        {
            headers: new Headers([
                ['Accept', 'application/vnd.citationstyles.csl+json']
            ])
        }
    )
    type CslAuthor = {
            ORCID?: string,
            given: string,
            family: string,

        }
    type CslJson = {
        title: string,
        author: CslAuthor[],
        abstract?: string,
        subject: string[],
        categories: string[]
        type: 'software' | 'dataset' | 'article',
        URL?: string,
        'published-online'?: {
            'date-parts': number[][]
        },
        version?: string,
        publisher: 'Zenodo' | string
    }

    const body = await res.json() as CslJson
    // TODO when body.publisher === 'Zenodo' then
    // should fetch json from Zenodo API/export to get more info on it
    console.log(body)
    setTitle(body.title)
    if (body.type === 'software') {
        // TODO Zenodo software record has type=book
        setType(body.type)
    } else if (body.type === 'dataset') {
        setType(body.type)
    }
    const newAuthors: AuthorType[] = body.author.map((a) => {
        const newAuthor: AuthorType = {
            givenNames: a.given,
            familyNames: a.family
        }
        if (a.ORCID) {
            newAuthor.orcid = a.ORCID
        }
        return newAuthor
    })
    setAuthors(newAuthors)
    const newKeywords: string[] = []
    setKeywords(newKeywords.concat(body.subject, body.categories))
    if (body.URL) {
        setUrl(body.URL)
    }
    if (body.version) {
        setVersion(body.version)
    }
    if (body['published-online']) {
        setDateReleased(body['published-online']['date-parts'][0].join('-'))
    }
    if (body.abstract) {
        setAbstract(body.abstract)
    }
    Notify.create(`DOI ${doi} has been imported. ${newAuthors.length} authors found.`)
}
