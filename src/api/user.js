import request from '@/utils/request'
import store from '@/store'
export const GetUserInfo = () => {
  return request({
    url: '/user',
    headers: {
      Authorization: store.state.user.token
    }
  })
}
