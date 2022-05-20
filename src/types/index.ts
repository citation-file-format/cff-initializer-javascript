export type AuthorType = {
    givenNames?: string;
    nameParticle?: string;
    nameSuffix?: string;
    orcid?: string;
    familyNames?: string;
    affiliation?: string;
    email?: string;
}

export type AuthorsType = Array<AuthorType>

export type IdentifierTypeType = 'doi' | 'url' | 'swh' | 'other'
export type IdentifierType = {
    type: IdentifierTypeType,
    value: string,
    description?: string
}

export type IdentifiersType = Array<IdentifierType> | undefined

export type KeywordsType = Array<string> | undefined

export type TypeType = 'software' | 'dataset'

export type CffType = {
    abstract?: string,
    authors: AuthorsType,
    cffVersion: string,
    commit?: string,
    dateReleased?: string,
    keywords?: KeywordsType,
    identifiers?: IdentifiersType,
    license?: string,
    message?: string,
    repository?: string,
    repositoryArtifact?: string,
    repositoryCode?: string,
    title?: string,
    type: TypeType,
    url?: string,
    version?: string
}
