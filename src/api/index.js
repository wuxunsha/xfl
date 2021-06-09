import request from '@/utils/request'

// 助记词登录
export function loginByWord(str) {
  return request({
    url: '/login/mnemonic',
    method: 'post',
    data: str
  })
}

// 登出
export function quit(data) {
  return request({
    url: '/index/login/quit',
    method: 'get',
    data
  })
}
