import axios from 'axios'
/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */
export function fetch(url, params={}){
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
export function post(url, data={}){
  return new Promise((resolve, reject) => {
    axios.post(url, data)
      .then(res => {
        resolve(res.data)
      }, err => {
        reject(err)
      })
  })
}
