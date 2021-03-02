import ApiClient from './ApiClient'

export const __GetCuisine = async (cuisineid) => {
  try {
    const response = await ApiClient.get(`/cuisine/get/${cuisineid}`)
    return response.data
  } catch (error) {
    throw error
  }
}

export const __GetAllCuisine = async () => {
  try {
    const response = await ApiClient.get(`/cuisine/all`)
    return response.data
  } catch (error) {
    throw error
  }
}



