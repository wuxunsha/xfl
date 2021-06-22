import axios from 'axios'
import qs from 'qs'
import { Toast } from 'vant'

// let interfaceURL = 'http://la.lycs.top'
let interfaceURL = 'http://1.117.6.15:9000/note-service/note'

const service = axios.create({
  baseURL: interfaceURL, // 正式环境
  // 请求超时时间
  timeout: 10000
})

service._baseURL = interfaceURL

service.interceptors.request.use(
  config => {
    config.headers.post['Content-Type'] = 'application/json'
    config.method === 'post'
      ? (config.data = qs.parse({
          ...config.data
        }))
      : (config.params = {
          ...config.params
        })

    return config
  },
  error => {
    Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {
    // 这里根据后端提供的数据进行对应的处理
    if (response.data.code === 0) {
      return response.data
    } else if (response.data.code === -100) {
      // Toast({
      //   message: '登录过期，请重新登录!',
      //   icon: 'fail',
      //   forbidClick: true,
      //   overlay: true
      // })
      // localStorage.clear()
      // store.state.token = ''
      // store.state.isLogin = false
      // setTimeout(() => {
      //   router.replace({
      //     path: '/login'
      //   })
      // }, 1000)
    } else {
      // 常规错误处理
      Toast.fail(response.data.msg)
      // Toast.loading({
      //   message: response.data.msg,
      //   // type: 'fail',
      //   duration: 2000,
      //   forbidClick: true,
      //   overlay: true
      // })
    }
  },
  // 响应错误处理
  error => {
    console.log('error----->>>>')
    console.log(error)
    console.log(JSON.stringify(error))
    console.log('error----->>>>')
    let text =
      JSON.parse(JSON.stringify(error)).response.code === 404
        ? '404'
        : '网络异常，请重试'
    Toast.fail(text)
    return Promise.reject(error)
  }
)

export default service
