import { shallowMount } from '@vue/test-utils'
import RegisterPage from '@/views/RegisterPage'

describe('RegisterPage', () => {
  it('should render correct contents', () => {
    const wrapper = shallowMount(RegisterPage)
    expect(wrapper.vm.$el.querySelector('.logo').getAttribute('src'))
      .toEqual('/static/images/logo.png')
    expect(wrapper.vm.$el.querySelector('.tagline').textContent)
      .toEqual('Open source task management tool')
    expect(wrapper.vm.$el.querySelector('#username').value).toEqual('')
    expect(wrapper.vm.$el.querySelector('#emailAddress').value).toEqual('')
    expect(wrapper.vm.$el.querySelector('#password').value).toEqual('')
    expect(wrapper.vm.$el.querySelector('form button[type="submit"]').textContent)
      .toEqual('Create account')
  })
})
