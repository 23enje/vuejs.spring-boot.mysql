import moxios from 'moxios'
import registrationService from '@/services/registration'

describe('services/registration', () => {
  beforeEach(() => {
    moxios.install()
  })

  afterEach(() => {
    moxios.uninstall()
  })

  it('서비스가 서비스를 호출한 곳에 서버의 응답을 반환하는지 검증', () => {
    expect.assertions(2)
    moxios.wait(() => {
      const request = moxios.requests.mostRecent()
      expect(request).toBeTruthy()
      request.respondWith({
        status: 200,
        response: { result: 'success' }
      })
    })
    return registrationService.register().then(data => {
      expect(data.result).toEqual('success')
    })
  })

  it('HTTP 요청 실패 시나리오', () => {
    expect.assertions(2)
    moxios.wait(() => {
      const request = moxios.requests.mostRecent()
      expect(request).toBeTruthy()
      request.reject({
        status: 400,
        response: { message: 'Bad request' }
      })
    })
    return registrationService.register().catch(error => {
      expect(error.response.message).toEqual('Bad request')
    })
  })
})
