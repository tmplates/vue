import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import TButton from '../src/button.vue'

describe('TButton', () => {
  it('component props', () => {
    const wrapper = mount(TButton, { props: { text: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})
