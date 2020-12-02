import axios from 'axios'
axios.interceptors.request.use(
  config => {
    return config
  },
  error => {
    return Promise.error(error)
  }
)
axios.interceptors.response.use(res => {
  if (res.status === 200) {
    return res.data
  } else {
    return Promise.reject(res)
  }
})
