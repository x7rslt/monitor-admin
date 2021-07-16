import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/v1/dp/hotel/detail/1',
    method: 'get',
    params:params,
    baseURL: 'http://localhost:9090'
  })
}


