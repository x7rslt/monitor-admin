import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/v1/dp/hotel/detail/1',
    method: 'get',
    baseURL: 'http://localhost:9090',
    params
  })
}
