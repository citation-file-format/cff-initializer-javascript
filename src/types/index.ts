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

export type IdentifiersType = Array<{
    type: 'doi' | 'url' | 'swh' | 'other',
    value: string,
    description?: string
}>

export type KeywordsType = Array<string>

export type TypeType = 'software' | 'dataset'

export type CffType = {
    abstract?: string,
    authors: AuthorsType,
    cffVersion?: string,
    commit?: string,
    dateReleased?: string,
    identifiers?: IdentifiersType,
    keywords: KeywordsType,
    license?: string,
    message?: string,
    repository?: string,
    repositoryArtifact?: string,
    repositoryCode?: string,
    title?: string,
    type?: TypeType,
    url?: string,
    version?: string
}
