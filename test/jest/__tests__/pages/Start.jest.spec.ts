import { VueWrapper, shallowMount } from '@vue/test-utils'
import { beforeEach, describe, expect, it } from '@jest/globals'
import LayoutLanding from 'src/components/LayoutLanding.vue'
import { installQuasarPlugin } from '@quasar/quasar-app-extension-testing-unit-jest'

// Specify here Quasar config you'll need to test your component
installQuasarPlugin()

describe('LayoutLanding', () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let wrapper: VueWrapper<any>

    beforeEach(() => {
        wrapper = shallowMount(LayoutLanding)
    })

    it('should mount without errors', () => {
        expect(wrapper).toBeTruthy()
    })
})
