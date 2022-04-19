import { shallowMount } from '@vue/test-utils'
import LoginPage from '@/views/LoginPage'

describe('LoginPage', () => {
  it('should render correct contents', () => {
    const wrapper = shallowMount(LoginPage)
    expect(wrapper.vm.$el.querySelector('h1').textContent)
      .toEqual('TaskAgile')
  })
})
