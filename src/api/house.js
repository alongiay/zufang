import request from '@/utils/request'
export const getCondition = (id) => {
  return request({
    url: 'houses/condition',
    params: {
      id
    }
  })
}
