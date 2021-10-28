/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { computed } from 'vue'
import { useCff } from 'src/store/cff'
import * as yaml from 'js-yaml'
import { CffType } from 'src/types'
import kebabcaseKeys from 'kebabcase-keys'
import deepfilter from 'deep-filter'

export function useCffstr () {
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
        version
    } = useCff()

    const notEmpty = (value: unknown, prop: unknown, subject: unknown) => {
        return value !== undefined && value !== null
    }

    const makeJavascriptObject = () => {
        const cff = {
            abstract: abstract.value,
            authors: authors.value,
            commit: commit.value,
            cffVersion: cffVersion.value,
            dateReleased: dateReleased.value,
            identifiers: identifiers.value,
            keywords: keywords.value,
            license: license.value,
            message: message.value,
            repository: repository.value,
            repositoryArtifact: repositoryArtifact.value,
            repositoryCode: repositoryCode.value,
            title: title.value,
            type: type.value,
            url: url.value,
            version: version.value
        } as CffType
        const filtered = deepfilter(cff, notEmpty)
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return kebabcaseKeys(filtered, { deep: true })
    }

    const makeCffstr = () => {
        const kebabed = makeJavascriptObject()
        const yamlString = yaml.dump(kebabed, { indent: 2, sortKeys: true, lineWidth: 53 })
        const generatedBy = '# This CITATION.cff file was generated with cffinit.\n# Visit https://bit.ly/cffinit to generate yours today!\n\n'
        return generatedBy + yamlString
    }
    return {
        jsObject: computed(makeJavascriptObject),
        cffstr: computed(makeCffstr)
    }
}
