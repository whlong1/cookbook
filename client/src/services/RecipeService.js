import ApiClient from './ApiClient'

//POST-> localhost:3000/home/recipes/add

//HEY MAN LOOK AT (FORM DATA), AFTER AUTH, ADD USERID
export const __AddRecipe = async (formData) => {
  try {
    // const response = await ApiClient.post(`/recipes/add/${userId}/?active=true`, formData)
    const response = await ApiClient.post(`/recipes/add`, formData)
    console.log('RESPONSE', response.data)
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
    const response = await ApiClient.put(`/recipes/edit/${recipeid}?active=true`, formData)
    console.log(response.data)
    return response.data
  } catch (error) {
    throw error
  }
}


export const __DeleteRecipe = async (recipeid) => {
  try {
    // const response = await ApiClient.delete(`/recipes/delete/${recipeid}?active=true`)
    const response = await ApiClient.delete(`/recipes/delete/${recipeid}`)
    return response
  } catch (error) {
    throw error
  }
}




