import ApiClient from './ApiClient'

export const __AddReview = async (formData, recipeid) => {
    try {
      const response = await ApiClient.post(`/reviews/add/${recipeid}`, formData)
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












