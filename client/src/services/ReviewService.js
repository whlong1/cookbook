import ApiClient from './ApiClient'

export const __AddReview = async (formData) => {
    try {
      const response = await ApiClient.post(`/reviews/add`, formData)
      console.log('RESPONSE', response.data)
      return response.data
    } catch (error) {
      throw error
    }
  }

  export const __GetReview = async (id) => {
    try {
      const response = await ApiClient.get(`/reviews/search/${id}`)
      return response.data
    } catch (error) {
      throw error
    }
  }









