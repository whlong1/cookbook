import ApiClient from './ApiClient'

//POST-> localhost:3000/home/recipes/add


//EDITED

export const __GetListByStyle = async (style) => {
    try {
      const response = await ApiClient.get(`/recipes/sort/${style}`)
      return response.data
    } catch (error) {
      throw error
    }
  }
  //GET-> localhost:3000/home/recipes/sort/Fast Food


export const __GetRecipe = async (recipeid) => {
  try {
    const response = await ApiClient.get(`recipes/get/${recipeid}`)
    return response.data
  } catch (error) {
    throw error
  }
}
//GET-> localhost:3000/home/recipes/get/5fad6fb2ec3f93ff91750438

export const __UpdateRecipe = async (formData, recipeid) => {
  try {
    const response = await ApiClient.put(`/recipes/edit/${recipeid}?active=true`, formData)
    console.log(response.data)
    return response.data
  } catch (error) {
    throw error
  }
}
//PUT->localhost:3000/home/recipes/edit/5fab5bcd55afbfc17f279e1d

export const __DeletePost = async (recipeid) => {
  try {
    const response = await ApiClient.delete(`/recipes/delete/${recipeid}?active=true`)
    return response
  } catch (error) {
    throw error
  }
}
//DELETE-> localhost:3000/home/recipes/delete/5fab5bcd55afbfc17f279e1d



