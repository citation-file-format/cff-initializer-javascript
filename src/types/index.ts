/* eslint-disable camelcase */

export type IdentifierType = {
    type: 'doi' | 'url' | 'swh' | 'other',
    value: string,
    description?: string
}

export type KeywordsType = Array<string>

export type TypeType = 'software' | 'dataset'

export type CffType = {
    abstract?: string,
    'cff-version': string,
    commit?: string,
    date_released?: string,
    identifiers?: Array<IdentifierType>,
    keywords?: KeywordsType,
    license?: string,
    message?: string,
    repository?: string,
    repository_artifact?: string,
    repository_code?: string,
    title?: string,
    type: TypeType,
    url?: string,
    version?: string
}
