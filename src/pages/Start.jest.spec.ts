import { beforeEach, describe, expect, it } from '@jest/globals'
import { installQuasarPlugin } from '@quasar/quasar-app-extension-testing-unit-jest'
import { shallowMount, VueWrapper } from '@vue/test-utils'

import Start from './Start.vue'

// Specify here Quasar config you'll need to test your component
installQuasarPlugin()

describe('Start', () => {
  let wrapper: VueWrapper<any>

  beforeEach(() => {
    wrapper = shallowMount(Start)
  })

  it('should mount without errors', () => {
    expect(wrapper).toBeTruthy()
  })
})
