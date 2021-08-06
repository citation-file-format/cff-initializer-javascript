import { mountFactory } from '@quasar/quasar-app-extension-testing-unit-jest';

import Start from './Start.vue'

const factory = mountFactory(Start);

describe('Start', () => {
  it('should mount without errors', () => {
    const wrapper = factory();
    expect(wrapper).toBeTruthy();
  })
})
