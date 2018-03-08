import axios from 'axios'
import qs from 'qs'
import { Spin, Message } from 'iview';
let config = {
  hostUrl: 'http://192.168.10.103',
  hostPort: 8080
}
// 配置axios请求的 baseURL
axios.defaults.baseURL = config.hostUrl + ':' + config.hostPort + '/api';

// 拦截器
axios.interceptors.request.use(config => {
  Spin.show();
  return config
}, error => {
  Spin.hide();
  Message.error('加载超时');
  return Promise.reject(error)
})
// http响应拦截器
axios.interceptors.response.use(data => { // 响应成功关闭loading
  Spin.hide()
  return data
}, error => {
  Spin.hide();
  Message.error('加载失败')
  return Promise.reject(error)
})

/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */
export function ajaxGet (url, params = {}) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: params
    })
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        reject(err)
      })
  })
}

/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */
export function ajaxPost (url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.post(url, qs.stringify(data), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        reject(err)
      })
  })
}
