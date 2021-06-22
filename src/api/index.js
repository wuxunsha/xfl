import request from '@/utils/request'

// 提交咨询
export function save(params) {
  return request({
    url: '/wxconsultation/save',
    method: 'post',
    data: params
  })
}
