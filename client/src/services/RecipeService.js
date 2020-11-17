import ApiClient from './ApiClient'

export const __AddRecipe = async (formData) => {
  try {
    const response = await ApiClient.post(`/recipes/add`, formData)
    return response.data
  } catch (error) {
    throw error
  }
}

export const __GetListByStyle = async (style) => {
    try {
      const response = await ApiClient.get(`/recipes/sort/${style}`)
      console.log(response.data)
      return response.data
    } catch (error) {
      throw error
    }
  }

export const __GetRecipe = async (recipeid) => {
  try {
    const response = await ApiClient.get(`/recipes/get/${recipeid}`)
    return response.data
  } catch (error) {
    throw error
  }
}

export const __UpdateRecipe = async (formData, recipeid) => {
  try {
    const response = await ApiClient.put(`/recipes/edit/${recipeid}`, formData)
    console.log(response.data)
    return response.data
  } catch (error) {
    throw error
  }
}

export const __DeleteRecipe = async (recipeid) => {
  try {
    const response = await ApiClient.delete(`/recipes/delete/${recipeid}`)
    return response
  } catch (error) {
    throw error
  }
}





