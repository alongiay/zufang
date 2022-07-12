import request from '@/utils/request'
export const getMap = (level) => {
  return request({
    url: 'area/city',
    params: {
      level
    }
  })
}
export const getHot = () => {
  return request({
    url: 'area/hot'
  })
}
export const getImg = () => {
  return request({
    url: 'home/swiper'
  })
}
export const getGroups = ({ id }) => {
  return request({
    url: 'home/groups',
    params: {
      id
    }
  })
}
