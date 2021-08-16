import yaml from 'js-yaml'
import { CffType } from './types'

export function toYamlString (obj: CffType) {
    const j: CffType = obj
    // TODO camelCase to kebab
    // TODO omit empty strings
    return yaml.dump(j)
}
