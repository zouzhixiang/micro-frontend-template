import axios from 'axios'
import { Message } from 'element-ui'
import Vue from 'vue'

const service = axios.create({
  timeout: 60000
})

let messageInstance = null

const openMessage = message => {
  messageInstance && messageInstance.close()

  messageInstance = Message.error({
    message: message || 'Error',
    center: true
  })
}

// 请求拦截
service.interceptors.request.use(config => {

  config.baseURL ??= Vue.prototype.baseUrl

  return config
}, error => {
  return Promise.reject(error)
})

// 响应拦截
service.interceptors.response.use(response => {
  const { responseType } = response.config

  if (responseType && responseType !== 'json') {
    return response
  }

  const res = response.data

  if (!res.status && !res.result) {
    openMessage(res.message)
    return Promise.reject(new Error(res.message || 'Error'))
  } else {
    return res
  }
}, error => {
  if (error.response) {
    const err = error.response

    switch (err.status) {
      // token失效
      case 401:
        openMessage(err.data.message)
        window.$wujie?.bus.$emit('SessionInvalid')
        break
      // 后台异常
      case 500:
        openMessage(err.data.message || '系统异常')
        break
    }
  }

  return Promise.reject(error)
})

export default service
