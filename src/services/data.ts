import request from '../utils/request'

export const getAsyncData = async (): Promise<any> => {
  return request({
    method: 'GET',
    url: 'https://tcb-api.tencentcloudapi.com',
  })
}
