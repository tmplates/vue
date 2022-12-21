import Button from '@/button.vue'
import { shallowMount } from '@vue/test-utils'
import { describe, it, expect } from '@jest/globals'

describe('Button.vue', () => {
  it('renders props.text when passed', () => {
    const text = 'new message'
    const wrapper = shallowMount(Button, {
      propsData: { text },
    })
    expect(wrapper.text()).toMatch(text)
  })
})
