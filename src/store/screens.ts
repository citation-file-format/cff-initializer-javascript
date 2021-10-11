import { makeFieldValidator, makeOptionalFieldValidator } from 'src/validator'
import { useCff } from './cff'
import { computed, ComputedRef } from 'vue'

type validatorRequestType = {
    subschema: string
    required: boolean
    value: ComputedRef<unknown>
}

function screenValidator (request: validatorRequestType[]): boolean {
    const r = request.map(
        ({ subschema, value, required }) => {
            let validator
            if (required) {
                validator = makeFieldValidator(subschema)
            } else {
                validator = makeOptionalFieldValidator(subschema)
            }
            return validator(value.value)
        }
    ).every(
        (v) => v === true
    )
    return r
}

export function useValidScreens () {
    const {
        title, message, abstract, keywords, license, url,
        repository, repositoryArtifact, repositoryCode,
        commit, version, dateReleased
    } = useCff()
    return {
        start: computed(() => screenValidator([{
            subschema: '/properties/title',
            value: title,
            required: true
        }, {
            subschema: '/properties/message',
            value: message,
            required: true
        }])),
        abstract: computed(() => screenValidator([{
            subschema: '/properties/abstract',
            value: abstract,
            required: false
        }])),
        keywords: computed(() => screenValidator([{
            subschema: '/properties/keywords',
            value: keywords,
            required: false
        }])),
        license: computed(() => screenValidator([{
            subschema: '/properties/license',
            value: license,
            required: false
        }])),
        relatedResources: computed(() => screenValidator([{
            subschema: '/definitions/url',
            value: url,
            required: false
        }, {
            subschema: '/definitions/url',
            value: repository,
            required: false
        }, {
            subschema: '/definitions/url',
            value: repositoryArtifact,
            required: false
        }, {
            subschema: '/definitions/url',
            value: repositoryCode,
            required: false
        }])),
        versionSpecific: computed(() => screenValidator([{
            subschema: '/properties/commit',
            value: commit,
            required: false
        }, {
            subschema: '/properties/version',
            value: version,
            required: false
        }, {
            subschema: '/properties/date-released',
            value: dateReleased,
            required: false
        }]))
    }
}
