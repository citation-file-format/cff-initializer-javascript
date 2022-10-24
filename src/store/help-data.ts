export const helpData = {
    abstract: {
        title: 'abstract',
        url: [
            {
                text: 'Click here to see the documentation for abstract.',
                link: 'https://github.com/citation-file-format/citation-file-format/blob/1.2.0/schema-guide.md#abstract'
            }
        ],
        description: 'A description or summary of the work.'
    },
    authorAffiliation: {
        title: 'affiliation',
        url: [
            {
                text: 'Click here to see the documentation for affiliation.',
                link: 'https://github.com/citation-file-format/citation-file-format/blob/1.2.0/schema-guide.md#definitionspersonaffiliation'
            }
        ],
        description: 'The person\'s affiliation.',
        examples: [
            'Netherlands eScience Center',
            'German Aerospace Center (DLR)'
        ]
    },
    authorEmail: {
        title: 'email',
        url: [
            {
                text: 'Click here to see the documentation for email.',
                link: 'https://github.com/citation-file-format/citation-file-format/blob/1.2.0/schema-guide.md#definitionspersonemail'
            }
        ],
        description: 'The person\'s email address.',
        examples: [
            'mail@research-project.org'
        ]
    },
    authorNames: {
        title: 'given-names, name-particle, family-names, name-suffix',
        url: [
            {
                text: 'Click here to see the documentation for given-names.',
                link: 'https://github.com/citation-file-format/citation-file-format/blob/1.2.0/schema-guide.md#definitionspersongiven-names'
            },
            {
                text: 'Click here to see the documentation for name-particle.',
                link: 'https://github.com/citation-file-format/citation-file-format/blob/1.2.0/schema-guide.md#definitionspersonname-particle'
            },
            {
                text: 'Click here to see the documentation for family-name.',
                link: 'https://github.com/citation-file-format/citation-file-format/blob/1.2.0/schema-guide.md#definitionspersonfamily-names'
            },
            {
                text: 'Click here to see the documentation for name-suffix.',
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
                text: 'Click here to see the documentation for given-names.',
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
                text: 'Click here to see the documentation for name-particle.',
                link: 'https://github.com/citation-file-format/citation-file-format/blob/1.2.0/schema-guide.md#definitionspersonname-particle'
            },
            {
                text: 'Click here to see the documentation for family-name.',
                link: 'https://github.com/citation-file-format/citation-file-format/blob/1.2.0/schema-guide.md#definitionspersonfamily-names'
            },
            {
                text: 'Click here to see the documentation for name-suffix.',
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
    authorOrcid: {
        title: 'orcid',
        url: [
            {
                text: 'Click here to see the documentation for orcid.',
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
    authors: {
        title: 'authors',
        url: [
            {
                text: 'Click here to see the documentation for authors.',
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
                text: 'Click here to see the documentation for commit.',
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
                text: 'Click here to see the documentation for date-released.',
                link: 'https://github.com/citation-file-format/citation-file-format/blob/1.2.0/schema-guide.md#date-released'
            }
        ],
        description: 'The date the work has been released.'
    },
    identifierDescription: {
        title: 'description',
        url: [
            {
                text: 'Click here to see the documentation for description.',
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
                text: 'Click here to see the documentation for doi.',
                link: 'https://github.com/citation-file-format/citation-file-format/blob/1.2.0/schema-guide.md#definitionsdoi'
            }
        ],
        description: 'The DOI (https://en.wikipedia.org/wiki/Digital_object_identifier) of the work.',
        examples: [
            '10.5281/zenodo.1003150'
        ]
    },
    identifierOther: {
        title: 'other',
        url: [
            {
                text: 'Click here to see the documentation for other.',
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
                text: 'Click here to see the documentation for swh.',
                link: 'https://github.com/citation-file-format/citation-file-format/blob/1.2.0/schema-guide.md#definitionsswh-identifier'
            }
        ],
        description: 'The Software Heritage identifier (https://www.softwareheritage.org/).',
        examples: [
            'swh:1:rev:309cf2674ee7a0749978cf8265ab91a60aea0f7d'
        ]
    },
    identifierUrl: {
        title: 'url',
        url: [
            {
                text: 'Click here to see the documentation for url.',
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
                text: 'Click here to see the documentation for identifiers.',
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
                text: 'Click here to see the documentation for keywords.',
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
                text: 'Click here to see the documentation for license.',
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
                text: 'Click here to see the documentation for message.',
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
                text: 'Click here to see the documentation for repository.',
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
                text: 'Click here to see the documentation for repository-artifact.',
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
                text: 'Click here to see the documentation for repository-code.',
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
                text: 'Click here to see the documentation for title.',
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
                text: 'Click here to see the documentation for type.',
                link: 'https://github.com/citation-file-format/citation-file-format/blob/1.2.0/schema-guide.md#type'
            }
        ],
        description: 'The type of the work that is being described by this CITATION.cff file.'
    },
    url: {
        title: 'url',
        url: [
            {
                text: 'Click here to see the documentation for url.',
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
                text: 'Click here to see the documentation for version.',
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
