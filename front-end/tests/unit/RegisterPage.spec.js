import { mount, flushPromises } from '@vue/test-utils'
import RegisterPage from '@/views/RegisterPage'
import registrationService from '@/services/registration'

jest.mock('@/services/registration')

describe('RegisterPage', () => {
  let wrapper
  let fieldUsername
  let fieldEmailAddress
  let fieldPassword
  let buttonSubmit
  let mockRouter
  let registerSpy

  beforeEach(() => {
    mockRouter = {
      push: jest.fn()
    }
    wrapper = mount(RegisterPage, {
      global: {
        mocks: {
          $router: mockRouter
        }
      }
    })
    fieldUsername = wrapper.find('#username')
    fieldEmailAddress = wrapper.find('#emailAddress')
    fieldPassword = wrapper.find('#password')
    buttonSubmit = wrapper.find('form button[type="submit"]')
    registerSpy = jest.spyOn(registrationService, 'register')
  })

  afterEach(() => {
    registerSpy.mockReset()
    registerSpy.mockRestore()
  })

  afterAll(() => {
    jest.restoreAllMocks()
  })

  it('회원가입 페이지 렌더링 검증', () => {
    expect(wrapper.find('.logo').attributes().src)
      .toEqual('/static/images/logo.png')
    expect(wrapper.find('.tagline').text())
      .toEqual('Open source task management tool')
    expect(fieldUsername.element.value).toEqual('')
    expect(fieldEmailAddress.element.value).toEqual('')
    expect(fieldPassword.element.value).toEqual('')
    expect(buttonSubmit.text()).toEqual('Create account')
  })

  it('회원가입 페이지 데이터 빈 문자열 초기화 검증', () => {
    expect(wrapper.vm.form.username).toEqual('')
    expect(wrapper.vm.form.emailAddress).toEqual('')
    expect(wrapper.vm.form.password).toEqual('')
  })

  it('폼의 입력 데이터 바인딩 검증', async () => {
    const username = 'sunny'
    const emailAddress = 'sunny@taskagile.com'
    const password = 'VueJsRocks!'

    wrapper.vm.form.username = username
    wrapper.vm.form.emailAddress = emailAddress
    wrapper.vm.form.password = password

    await wrapper.vm.$nextTick()

    expect(fieldUsername.element.value).toEqual(username)
    expect(fieldEmailAddress.element.value).toEqual(emailAddress)
    expect(fieldPassword.element.value).toEqual(password)
  })

  it('제출 헨들러 존재 여부', () => {
    const stub = jest.spyOn(wrapper.vm, 'submitForm')
    buttonSubmit.trigger('submit')
    expect(stub).toBeCalled()
  })

  it('새로운 유저 가입 실패 유무 검증', async () => {
    expect.assertions(2)
    const stub = jest.fn()
    wrapper.vm.$router.push = stub
    wrapper.vm.form.username = 'sunny'
    wrapper.vm.form.emailAddress = 'sunny@taskagile.com'
    wrapper.vm.form.password = 'JestRocks!'
    wrapper.vm.submitForm()
    expect(registerSpy).toBeCalled()
    await wrapper.vm.$nextTick()
    expect(stub).toHaveBeenCalledWith({ name: 'LoginPage' })
  })

  it('가입 실패 시 검증', async () => {
    expect.assertions(3)
    wrapper.setData({
      form: {
        username: 'ted',
        emailAddress: 'ted@taskagile.com',
        password: 'JestRocks!'
      }
    })
    expect(wrapper.find('.failed').isVisible()).toBe(false)
    wrapper.vm.submitForm()
    expect(registerSpy).toBeCalled()
    await flushPromises()
    expect(wrapper.find('.failed').isVisible()).toBe(true)
  })

  it('이메일 주소가 유효하지 않을 시 실패 검증', () => {
    wrapper.setData({
      form: {
        username: 'test',
        emailAddress: 'bad-email-address',
        password: 'JestRocks!'
      }
    })
    wrapper.vm.submitForm()
    expect(registerSpy).not.toHaveBeenCalled()
  })

  it('사용자가 유효하지 않을 시 실패 검증', () => {
    wrapper.setData({
      form: {
        username: 'a',
        emailAddress: 'test@taskagile.com',
        password: 'JestRocks!'
      }
    })
    wrapper.vm.submitForm()
    expect(registerSpy).not.toHaveBeenCalled()
  })

  it('비밀번호가 유효하지 않을 시 실패 검증', () => {
    wrapper.setData({
      form: {
        username: 'test',
        emailAddress: 'test@taskagile.com',
        password: 'Bad!'
      }
    })
    wrapper.vm.submitForm()
    expect(registerSpy).not.toHaveBeenCalled()
  })
})
