/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { computed } from 'vue'
import { useCff } from 'src/store/cff'
import yaml from 'js-yaml'
import { CffType } from 'src/types'
import kebabcaseKeys from 'kebabcase-keys'
import deepfilter from 'deep-filter'

export function useCffstr () {
    const {
        abstract,
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
        // based on https://www.npmjs.com/package/deep-filter example
        if (Array.isArray(value)) {
            return value.length > 0
        } else if (typeof value === 'object' && value !== null) {
            return Object.keys(value).length > 0
        } else if (typeof value === 'string') {
            return value.length > 0
        } else {
            return value != null
        }
    }
    const makeJavascriptObject = () => {
        const cff = {
            abstract: abstract.value,
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
        return kebabcaseKeys(filtered)
    }

    const makeCffstr = () => {
        const kebabed = makeJavascriptObject()
        return yaml.dump(kebabed, { indent: 2, sortKeys: true })
    }

    return computed(() => makeCffstr())
}
