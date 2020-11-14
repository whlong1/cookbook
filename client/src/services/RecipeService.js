import ApiClient from './ApiClient'



export const __GetListByStyle = async (cuisine) => {
    try {
      const response = await ApiClient.get(`/recipes/sort/${cuisine}`)
      return response.data
    } catch (error) {
      throw error
    }
  }
  
//GET-> localhost:3000/home/recipes/sort/Fast Food


