/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unused-vars */

import * as yaml from 'js-yaml'
import { CffType } from 'src/types'
import { computed } from 'vue'
import deepfilter from 'deep-filter'
import kebabcaseKeys from 'kebabcase-keys'
import { useCff } from 'src/store/cff'

export const useCffstr = () => {
    const {
        abstract,
        authors,
        commit,
        cffVersion,
        dateReleased,
        identifiers,
        keywords,
        license,
        message,
        repository,
        repositoryArtifact,
        repositoryCode,
        title,
        type,
        url,
        version,
        extraCffFields
    } = useCff()

    const notEmpty = (value: unknown, prop: unknown, subject: unknown) => {
        return value !== undefined && value !== null
    }

    const makeJavascriptObject = () => {
        const cff = {
            cffVersion: cffVersion.value,
            title: title.value,
            message: message.value,
            type: type.value,
            authors: authors.value,
            identifiers: identifiers.value,
            repositoryCode: repositoryCode.value,
            url: url.value,
            repository: repository.value,
            repositoryArtifact: repositoryArtifact.value,
            abstract: abstract.value,
            keywords: keywords.value,
            license: license.value,
            commit: commit.value,
            version: version.value,
            dateReleased: dateReleased.value
        } as CffType
        const filtered = deepfilter(cff, notEmpty)
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return kebabcaseKeys(filtered, { deep: true })
    }

    const makeCffstr = () => {
        const kebabed = makeJavascriptObject()
        const yamlString = yaml.dump(kebabed, { indent: 2, lineWidth: 60 })
        const generatedBy = '# This CITATION.cff file was generated with cffinit.\n# Visit https://bit.ly/cffinit to generate yours today!\n\n'
        return generatedBy + yamlString + extraCffFields.value
    }
    return {
        jsObject: computed(makeJavascriptObject),
        cffstr: computed(makeCffstr)
    }
}
