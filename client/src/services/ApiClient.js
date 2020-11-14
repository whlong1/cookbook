import axios from 'axios'
const ApiClient = axios.create({baseURL: 'http://localhost:3001/home'})

ApiClient.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (err) => Promise.reject(err)
)

export default ApiClient