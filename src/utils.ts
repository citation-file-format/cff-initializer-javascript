import yaml from 'js-yaml'
import { CffType } from './types'

export function toYamlString (obj: CffType) {
    const j: CffType = obj
    // TODO de-duplicate yaml.dump() in ../components/Preview.vue
    return yaml.dump(j)
}
