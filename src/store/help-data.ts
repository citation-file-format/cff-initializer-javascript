export const helpData = {
    abstract: {
        title: 'abstract',
        url: [
            {
                text: 'Documentation for abstract.',
                link: 'https://github.com/citation-file-format/citation-file-format/blob/1.2.0/schema-guide.md#abstract'
            }
        ],
        description: 'A description or summary of the work.'
    },
    authorAddress: {
        title: 'address',
        url: [
            {
                text: 'Documentation for address.',
                link: 'https://github.com/citation-file-format/citation-file-format/blob/1.2.0/schema-guide.md#definitionspersonaddress'
            }
        ],
        description: 'The entity\'s address.',
        examples: [
            '742 Evergreen Terrace'
        ]
    },
    authorAffiliation: {
        title: 'affiliation',
        url: [
            {
                text: 'Documentation for affiliation.',
                link: 'https://github.com/citation-file-format/citation-file-format/blob/1.2.0/schema-guide.md#definitionspersonaffiliation'
            }
        ],
        description: 'The person\'s affiliation.',
        examples: [
            'Netherlands eScience Center',
            'German Aerospace Center (DLR)'
        ]
    },
    authorAlias: {
        title: 'alias',
        url: [
            {
                text: 'Documentation for alias.',
                link: 'https://github.com/citation-file-format/citation-file-format/blob/1.2.0/schema-guide.md#definitionspersonalias'
            }
        ],
        description: 'The entity\'s alias.',
        examples: [
            'NASA'
        ]
    },
    authorCity: {
        title: 'city',
        url: [
            {
                text: 'Documentation for city.',
                link: 'https://github.com/citation-file-format/citation-file-format/blob/1.2.0/schema-guide.md#definitionspersoncity'
            }
        ],
        description: 'The entity\'s city.',
        examples: [
            'Berlin'
        ]
    },
    authorCountry: {
        title: 'country',
        url: [
            {
                text: 'Documentation for country.',
                link: 'https://github.com/citation-file-format/citation-file-format/blob/1.2.0/schema-guide.md#definitionspersoncountry'
            }
        ],
        description: 'The entity\'s country.',
        examples: [
            'DE'
        ]
    },
    authorDateEnd: {
        title: 'date-end',
        url: [
            {
                text: 'Documentation for date-end.',
                link: 'https://github.com/citation-file-format/citation-file-format/blob/1.2.0/schema-guide.md#definitionspersondate-end'
            }
        ],
        description: 'The entity\'s ending date, e.g. when the entity is a conference.',
        examples: [
            '2021-07-27'
        ]
    },
    authorDateStart: {
        title: 'date-start',
        url: [
            {
                text: 'Documentation for date-start.',
                link: 'https://github.com/citation-file-format/citation-file-format/blob/1.2.0/schema-guide.md#definitionspersondate-start'
            }
        ],
        description: 'The entity\'s starting date, e.g. when the entity is a conference.',
        examples: [
            '2021-07-27'
        ]
    },
    authorEmail: {
        title: 'email',
        url: [
            {
                text: 'Documentation for email.',
                link: 'https://github.com/citation-file-format/citation-file-format/blob/1.2.0/schema-guide.md#definitionspersonemail'
            }
        ],
        description: 'The person\'s email address.',
        examples: [
            'mail@research-project.org'
        ]
    },
    authorFax: {
        title: 'fax',
        url: [
            {
                text: 'Documentation for fax.',
                link: 'https://github.com/citation-file-format/citation-file-format/blob/1.2.0/schema-guide.md#definitionspersonfax'
            }
        ],
        description: 'The entity\'s fax number.',
        examples: [
            '+12-3456-7890'
        ]
    },
    authorName: {
        title: 'name',
        url: [
            {
                text: 'Documentation for name.',
                link: 'https://github.com/citation-file-format/citation-file-format/blob/1.2.0/schema-guide.md#definitionspersonname'
            }
        ],
        description: 'The entity\'s name.',
        examples: [
            'The Research Software Project'
        ]
    },
    authorNames: {
        title: 'given-names, name-particle, family-names, name-suffix',
        url: [
            {
                text: 'Documentation for given-names.',
                link: 'https://github.com/citation-file-format/citation-file-format/blob/1.2.0/schema-guide.md#definitionspersongiven-names'
            },
            {
                text: 'Documentation for name-particle.',
                link: 'https://github.com/citation-file-format/citation-file-format/blob/1.2.0/schema-guide.md#definitionspersonname-particle'
            },
            {
                text: 'Documentation for family-name.',
                link: 'https://github.com/citation-file-format/citation-file-format/blob/1.2.0/schema-guide.md#definitionspersonfamily-names'
            },
            {
                text: 'Documentation for name-suffix.',
                link: 'https://github.com/citation-file-format/citation-file-format/blob/1.2.0/schema-guide.md#definitionspersonname-suffix'
            }
        ],
        description: 'The person\'s full name, split into fours parts: The given names, a possible name particle, the family names, and a possible name suffix',
        examples: [
            'given-name: John',
            'name-particle: von',
            'family-name: Doe',
            'name-suffix: Jr.'
        ]
    },
    authorGivenNames: {
        title: 'given-names',
        url: [
            {
                text: 'Documentation for given-names.',
                link: 'https://github.com/citation-file-format/citation-file-format/blob/1.2.0/schema-guide.md#definitionspersongiven-names'
            }
        ],
        description: 'The person\'s given names.',
        examples: [
            'Jane',
            'John'
        ]
    },
    authorLastNames: {
        title: 'name-particle, family-names, name-suffix',
        url: [
            {
                text: 'Documentation for name-particle.',
                link: 'https://github.com/citation-file-format/citation-file-format/blob/1.2.0/schema-guide.md#definitionspersonname-particle'
            },
            {
                text: 'Documentation for family-name.',
                link: 'https://github.com/citation-file-format/citation-file-format/blob/1.2.0/schema-guide.md#definitionspersonfamily-names'
            },
            {
                text: 'Documentation for name-suffix.',
                link: 'https://github.com/citation-file-format/citation-file-format/blob/1.2.0/schema-guide.md#definitionspersonname-suffix'
            }
        ],
        description: 'The person\'s last names, split into parts.',
        examples: [
            'name-particle: von',
            'family-name: Doe',
            'name-suffix: Jr.'
        ]
    },
    authorLocation: {
        title: 'location',
        url: [
            {
                text: 'Documentation for location.',
                link: 'https://github.com/citation-file-format/citation-file-format/blob/1.2.0/schema-guide.md#definitionspersonlocation'
            }
        ],
        description: 'The entity\'s location.',
        examples: [
            'Lovelace Building, room 0.42'
        ]
    },
    authorOrcid: {
        title: 'orcid',
        url: [
            {
                text: 'Documentation for orcid.',
                link: 'https://github.com/citation-file-format/citation-file-format/blob/1.2.0/schema-guide.md#definitionspersonorcid'
            },
            {
                text: 'https://orcid.org',
                link: 'https://orcid.org'
            }
        ],
        description: 'The person\'s ORCID identifier.',
        examples: [
            'https://orcid.org/0000-0003-4925-7248'
        ]
    },
    authorPostCode: {
        title: 'post-code',
        url: [
            {
                text: 'Documentation for post-code.',
                link: 'https://github.com/citation-file-format/citation-file-format/blob/1.2.0/schema-guide.md#definitionspersonpost-code'
            }
        ],
        description: 'The entity\'s post code.',
        examples: [
            '90210'
        ]
    },
    authorRegion: {
        title: 'region',
        url: [
            {
                text: 'Documentation for region.',
                link: 'https://github.com/citation-file-format/citation-file-format/blob/1.2.0/schema-guide.md#definitionspersonregion'
            }
        ],
        description: 'The entity\'s region.',
        examples: [
            'Renfrewshire'
        ]
    },
    authorTel: {
        title: 'tel',
        url: [
            {
                text: 'Documentation for tel.',
                link: 'https://github.com/citation-file-format/citation-file-format/blob/1.2.0/schema-guide.md#definitionspersontel'
            }
        ],
        description: 'The entity\'s telephone number.',
        examples: [
            '+12-345-6789098'
        ]
    },
    authorWebsite: {
        title: 'website',
        url: [
            {
                text: 'Documentation for website.',
                link: 'https://github.com/citation-file-format/citation-file-format/blob/1.2.0/schema-guide.md#definitionspersonwebsite'
            }
        ],
        description: 'The entity\'s website.',
        examples: [
            'https://research-software-project.org'
        ]
    },
    authors: {
        title: 'authors',
        url: [
            {
                text: 'Documentation for authors.',
                link: 'https://github.com/citation-file-format/citation-file-format/blob/1.2.0/schema-guide.md#authors'
            },
            {
                text: 'How to deal with unknown individual authors?',
                link: 'https://github.com/citation-file-format/citation-file-format/blob/1.2.0/schema-guide.md#how-to-deal-with-unknown-individual-authors'
            }
        ],
        description: 'The authors of a software or dataset.',
        examples: [
            ' given-names: Jane\n family-names: Doe',
            ' name: "The Research Software project"',
            ' given-names: John\n family-names: Doe\n name: "The Research Software project"'
        ]
    },
    commit: {
        title: 'commit',
        url: [
            {
                text: 'Documentation for commit.',
                link: 'https://github.com/citation-file-format/citation-file-format/blob/1.2.0/schema-guide.md#commit'
            }
        ],
        description: 'The commit hash or revision number of the software version.',
        examples: [
            '1ff847d81f29c45a3a1a5ce73d38e45c2f319bba',
            'Revision: 8612'
        ]
    },
    dateReleased: {
        title: 'date-released',
        url: [
            {
                text: 'Documentation for date-released.',
                link: 'https://github.com/citation-file-format/citation-file-format/blob/1.2.0/schema-guide.md#date-released'
            }
        ],
        description: 'The date the work has been released.'
    },
    identifierDescription: {
        title: 'description',
        url: [
            {
                text: 'Documentation for description.',
                link: 'https://github.com/citation-file-format/citation-file-format/blob/1.2.0/schema-guide.md#definitionsidentifier-description'
            }
        ],
        description: 'A description of the identifier.',
        examples: [
            'The concept DOI of the work.',
            'The URL of version 1.1.0 of the software',
            'The Software Heritage link for version 1.1.0.',
            'The ArXiv deposit of the encompassing paper.'
        ]
    },
    identifierDoi: {
        title: 'doi',
        url: [
            {
                text: 'Documentation for doi.',
                link: 'https://github.com/citation-file-format/citation-file-format/blob/1.2.0/schema-guide.md#definitionsdoi'
            },
            {
                text: 'Wikipedia page for DOI',
                link: 'https://en.wikipedia.org/wiki/Digital_object_identifier'
            }
        ],
        description: 'The DOI of the work. Do not include the resolver URL.',
        examples: [
            '10.5281/zenodo.1003150',
            '10.7717/peerj-cs.86'
        ]
    },
    identifierOther: {
        title: 'other',
        url: [
            {
                text: 'Documentation for other.',
                link: 'https://github.com/citation-file-format/citation-file-format/blob/1.2.0/schema-guide.md#definitionsidentifier'
            }
        ],
        description: 'An identifier that does not fit in the other categories.',
        examples: [
            'arXiv:2103.06681'
        ]
    },
    identifierSwh: {
        title: 'swh',
        url: [
            {
                text: 'Documentation for swh.',
                link: 'https://github.com/citation-file-format/citation-file-format/blob/1.2.0/schema-guide.md#definitionsswh-identifier'
            },
            {
                text: 'Software Heritage site.',
                link: 'https://www.softwareheritage.org/'
            }
        ],
        description: 'The Software Heritage identifier. Besides \'rev\', other allowed values are: \'snp\', \'rel\', \'dir\', and \'cnt\'.',
        examples: [
            'swh:1:rev:309cf2674ee7a0749978cf8265ab91a60aea0f7d'
        ]
    },
    identifierUrl: {
        title: 'url',
        url: [
            {
                text: 'Documentation for url.',
                link: 'https://github.com/citation-file-format/citation-file-format/blob/1.2.0/schema-guide.md#definitionsurl'
            }
        ],
        description: 'A URL.',
        examples: [
            'https://research-software-project.org',
            'http://research-software-project.org',
            'sftp://files.research-software-project.org',
            'ftp://files.research-software-project.org'
        ]
    },
    identifiers: {
        title: 'identifiers',
        url: [
            {
                text: 'Documentation for identifiers.',
                link: 'https://github.com/citation-file-format/citation-file-format/blob/1.2.0/schema-guide.md#identifiers'
            }
        ],
        description: 'The identifiers of the work, such as DOIs, Software Heritage deposits, and URLs for relevant objects.',
        examples: [
            'DOI: 10.5281/zenodo.1003149 - The concept DOI of the work',
            'SWH: swh:1:dir:bc286860f423ea7ced246ba7458eef4b4541cf2d - The Software Heritage for version 1.1.0',
            'URL: https://github.com/citation-file-format/citation-file-format/releases/tag/1.1.0 - The GitHub release URL of tag 1.1.0',
            'OTHER: arXiv:2103.06681 - The ArXiv preprint of the paper'
        ]
    },
    keywords: {
        title: 'keywords',
        url: [
            {
                text: 'Documentation for keywords.',
                link: 'https://github.com/citation-file-format/citation-file-format/blob/1.2.0/schema-guide.md#keywords'
            }
        ],
        description: 'Keywords that describe the work.',
        examples: [
            'keyword',
            'other-keyword',
            'Yet Another Keyword'
        ]
    },
    license: {
        title: 'license',
        url: [
            {
                text: 'Documentation for license.',
                link: 'https://github.com/citation-file-format/citation-file-format/blob/1.2.0/schema-guide.md#license'
            }
        ],
        description: 'The SPDX license identifier for the license under which the work is available.',
        examples: [
            'Apache-2.0',
            'MIT',
            'GPL-3.0'
        ]
    },
    message: {
        title: 'message',
        url: [
            {
                text: 'Documentation for message.',
                link: 'https://github.com/citation-file-format/citation-file-format/blob/1.2.0/schema-guide.md#message'
            }
        ],
        description: 'A message to the human reader of the CITATION.cff file to let them know what to do with the citation metadata.',
        examples: [
            'If you use this software, please cite it using the metadata from this file.',
            'Please cite this software using these metadata.',
            'Please cite this software using the metadata from "preferred-citation".'
        ]
    },
    repository: {
        title: 'repository',
        url: [
            {
                text: 'Documentation for repository.',
                link: 'https://github.com/citation-file-format/citation-file-format/blob/1.2.0/schema-guide.md#repository'
            }
        ],
        description: 'URL of the work in a repository/archive that is neither a source code repository nor a build artifact repository',
        examples: [
            'https://ascl.net/2105.013'
        ]
    },
    repositoryArtifact: {
        title: 'repository-artifact',
        url: [
            {
                text: 'Documentation for repository-artifact.',
                link: 'https://github.com/citation-file-format/citation-file-format/blob/1.2.0/schema-guide.md#repository-artifact'
            }
        ],
        description: 'URL of the work in a build artifact/binary repository',
        examples: [
            'https://search.maven.org/artifact/org.corpus-tools/cff-maven-plugin/0.4.0/maven-plugin'
        ]
    },
    repositoryCode: {
        title: 'repository-code',
        url: [
            {
                text: 'Documentation for repository-code.',
                link: 'https://github.com/citation-file-format/citation-file-format/blob/1.2.0/schema-guide.md#repository-code'
            }
        ],
        description: 'URL of the work in a source code repository',
        examples: [
            'https://github.com/citation-file-format/citation-file-format'
        ]
    },
    title: {
        title: 'title',
        url: [
            {
                text: 'Documentation for title.',
                link: 'https://github.com/citation-file-format/citation-file-format/blob/1.2.0/schema-guide.md#title'
            }
        ],
        description: 'The name of the software or dataset.',
        examples: [
            'cffconvert',
            'Firefox',
            'LibreOffice'
        ]
    },
    type: {
        title: 'type',
        url: [
            {
                text: 'Documentation for type.',
                link: 'https://github.com/citation-file-format/citation-file-format/blob/1.2.0/schema-guide.md#type'
            }
        ],
        description: 'The type of the work that is being described by this CITATION.cff file.'
    },
    url: {
        title: 'url',
        url: [
            {
                text: 'Documentation for url.',
                link: 'https://github.com/citation-file-format/citation-file-format/blob/1.2.0/schema-guide.md#url'
            }
        ],
        description: 'URL of the landing page/website for the work',
        examples: [
            'https://citation-file-format.github.io/'
        ]
    },
    version: {
        title: 'version',
        url: [
            {
                text: 'Documentation for version.',
                link: 'https://github.com/citation-file-format/citation-file-format/blob/1.2.0/schema-guide.md#version'
            }
        ],
        description: 'The version of the software or dataset.',
        examples: [
            '1.2.0',
            '1.2',
            '21.10 (Impish Indri)'
        ]
    }
}
