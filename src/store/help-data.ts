export const helpData = {
    abstract: {
        title: 'abstract',
        url: 'https://github.com/citation-file-format/citation-file-format/blob/1.2.0/schema-guide.md#abstract',
        description: 'A description or summary of the work.'
    },
    commit: {
        title: 'commit',
        url: 'https://github.com/citation-file-format/citation-file-format/blob/1.2.0/schema-guide.md#commit',
        description: 'The commit hash or revision number of the software version.',
        examples: [
            '1ff847d81f29c45a3a1a5ce73d38e45c2f319bba',
            'Revision: 8612'
        ]
    },
    dateReleased: {
        title: 'date-released',
        url: 'https://github.com/citation-file-format/citation-file-format/blob/1.2.0/schema-guide.md#date-released',
        description: 'The date the work has been released.'
    },
    keywords: {
        title: 'keywords',
        url: 'https://github.com/citation-file-format/citation-file-format/blob/1.2.0/schema-guide.md#keywords',
        description: 'Keywords that describe the work.',
        examples: [
            'keyword',
            'other-keyword',
            'Yet Another Keyword'
        ]
    },
    license: {
        title: 'license',
        url: 'https://github.com/citation-file-format/citation-file-format/blob/1.2.0/schema-guide.md#license',
        description: 'The SPDX license identifier for the license under which the work is available.',
        examples: [
            'Apache-2.0',
            'MIT',
            'GPL-3.0'
        ]
    },
    message: {
        title: 'message',
        url: 'https://github.com/citation-file-format/citation-file-format/blob/1.2.0/schema-guide.md#message',
        description: 'A message to the human reader of the CITATION.cff file to let them know what to do with the citation metadata.',
        examples: [
            'If you use this software, please cite it using the metadata from this file.',
            'Please cite this software using these metadata.',
            'Please cite this software using the metadata from "preferred-citation".'
        ]
    },
    repository: {
        title: 'repository',
        url: 'https://github.com/citation-file-format/citation-file-format/blob/1.2.0/schema-guide.md#repository',
        description: 'URL of the work in a repository/archive that is neither a source code repository nor a build artifact repository',
        examples: [
            'https://ascl.net/2105.013'
        ]
    },
    repositoryArtifact: {
        title: 'repository-artifact',
        url: 'https://github.com/citation-file-format/citation-file-format/blob/1.2.0/schema-guide.md#repository-artifact',
        description: 'URL of the work in a build artifact/binary repository',
        examples: [
            'https://search.maven.org/artifact/org.corpus-tools/cff-maven-plugin/0.4.0/maven-plugin'
        ]
    },
    repositoryCode: {
        title: 'repository-code',
        url: 'https://github.com/citation-file-format/citation-file-format/blob/1.2.0/schema-guide.md#repository-code',
        description: 'URL of the work in a source code repository',
        examples: [
            'https://github.com/citation-file-format/citation-file-format'
        ]
    },
    title: {
        title: 'title',
        url: 'https://github.com/citation-file-format/citation-file-format/blob/1.2.0/schema-guide.md#title',
        description: 'The name of the software or dataset.',
        examples: [
            'cffconvert',
            'Firefox',
            'LibreOffice'
        ]
    },
    type: {
        title: 'type',
        url: 'https://github.com/citation-file-format/citation-file-format/blob/1.2.0/schema-guide.md#type',
        description: 'The type of the work that is being described by this CITATION.cff file.'
    },
    url: {
        title: 'url',
        url: 'https://github.com/citation-file-format/citation-file-format/blob/1.2.0/schema-guide.md#url',
        description: 'URL of the landing page/website for the work',
        examples: [
            'https://citation-file-format.github.io/'
        ]
    },
    version: {
        title: 'version',
        url: 'https://github.com/citation-file-format/citation-file-format/blob/1.2.0/schema-guide.md#version',
        description: 'The version of the software or dataset.',
        examples: [
            '1.2.0',
            '1.2',
            '21.10 (Impish Indri)'
        ]
    }
}
