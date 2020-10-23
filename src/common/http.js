import axios from 'axios'
// 创建axios实例
const service = axios.create({
  baseURL: 'http://127.0.0.1:84',
  // baseURL: 'http://www.crean.top:84',
  timeout: 800000 // 请求超时时间 
})
service.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response.data
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});

export default service
