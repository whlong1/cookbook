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



  


// Router.use('/users', UserRouter)

//my user routes

// Router.post('/add', UserController.AddUser)
// //POST-> localhost:3000/home/users/add

// Router.get('/search/:id', UserController.GetUser)
// //GET -> localhost:3000/home/users/search/5fad6efaec3f93ff91750437

// Router.delete('/delete/:id', UserController.DeleteUser)
// //DELETE-> localhost:3000/home/users/delete/5fad5a0b223c0bf85226d3f8

// Router.put('/edit/:id', UserController.UpdateUser)
// //PUT-> localhost:3000/home/users/edit/5fad490a37d80bf073fe36ee

// Router.post('/login', UserController.SignInUser, createToken)
// //POST->localhost:3000/home/users/login