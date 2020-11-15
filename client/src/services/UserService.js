import ApiClient from './ApiClient'

export const __GetProfile = async (userId) => {
    try {
      const response = await ApiClient.get(`/users/search/${userId}`)
      return response.data
    } catch (error) {
      throw error
    }
  }

  export const __AddUser = async (formData) => {
    try {
      const response = await ApiClient.post('/users/add', formData)
      return response.data
    } catch (error) {
      throw error
    }
  }

  export const __CheckSession = async () => {
    try {
      const response = await ApiClient.get('/users/refresh/session')
      return response.data
    } catch (error) {
      throw error
    }
  }

  export const __LoginUser = async (userData) => {
    try {
      const response = await ApiClient.post('/users/login', userData)
      localStorage.setItem('token', response.data.token)
      return response.data
    } catch (error) {
      throw error
    }
  }





