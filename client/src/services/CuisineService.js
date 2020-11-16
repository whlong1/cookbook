import ApiClient from './ApiClient'



export const __GetCuisine = async (cuisineid) => {
  try {
    const response = await ApiClient.get(`/cuisine/get/${cuisineid}`)
    return response.data
  } catch (error) {
    throw error
  }
}


//Add to Router


export const __GetAllCuisine = async () => {
  try {
    const response = await ApiClient.get(`/cuisine/all`)
    console.log('SERVICE', response.data)
    return response.data
  } catch (error) {
    throw error
  }
}



//Notes

// Router.get('/get/:cuisine_id', CuisineController.GetCuisineById)
// //GET-> localhost:3001/home/cuisine/get/5fad589718f1b9f74987a725


// Router.get('/all', CuisineController.AllCuisine)
// // GET-> localhost:3001/home/cuisine/all
