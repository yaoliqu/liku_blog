import Axios, { AxiosInstance } from 'axios'
import { message } from 'ant-design-vue'
import { showMessage } from './status' // 引入状态码文件

const axios: AxiosInstance = Axios.create({
  timeout: 20000 // 请求超时 20s
})
// 请求地址，这里是动态赋值的的环境变量
// @ts-ignore

axios.defaults.baseURL = import.meta.env.VITE_API_URL

// http request 拦截器
axios.interceptors.request.use(
  (config) => {
    // 配置请求头
    config.headers = {
      // 'Content-Type':'application/x-www-form-urlencoded',   // 传参方式表单
      'Content-Type': 'application/json;charset=UTF-8' // 传参方式json
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// http response 拦截器
axios.interceptors.response.use(
  (response) => {
    // console.log(response)
    return response
  },
  (error) => {
    if (error.response && error.response.data) {
      const code = error.response.status
      showMessage(code) // 传入响应码，匹配响应码对应信息
      const msg = error.response.data.message
      // ElMessage.error(`Code: ${code}, Message: ${msg}`)
      // eslint-disable-next-line no-console
      console.error(`Code: ${code}, Message: ${msg}`)
    } else {
      // eslint-disable-next-line no-console
      console.error(`${error}`)
      // ElMessage.error(`${error}`)
    }

    message.warning('网络连接异常,请稍后再试!')
    return Promise.reject(error)
  }
)

// 封装 GET POST 请求并导出
export function request(url = '', params = {}, type = 'GET') {
  // 设置 url params type 的默认值
  return new Promise((resolve, reject) => {
    let promise: any
    if (type.toUpperCase() === 'GET') {
      promise = axios({
        url,
        params
      })
    } else if (type.toUpperCase() === 'POST') {
      promise = axios({
        method: 'POST',
        url,
        data: params
      })
    }
    // 处理返回
    promise
      .then((res: any) => {
        resolve(res)
      })
      .catch((err: any) => {
        reject(err)
      })
  })
}

export default {}
