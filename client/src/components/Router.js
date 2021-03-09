import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Signup from '../pages/SignUp'
import Signin from '../pages/SignIn'

import { __CheckSession } from '../services/UserService'

import RecipeList from '../pages/RecipeList'
import RecipeDetails from '../pages/RecipeDetails'
import AddRecipe from '../pages/AddRecipe'
import EditRecipe from '../pages/EditRecipe'
import AllCuisine from '../pages/AllCuisine'


//new updates

import { __GetAllCuisine } from '../services/CuisineService'

//

class Router extends Component {
  constructor() {
    super()
    this.state = {
      pageLoading: true,
      authenticated: false,
      cuisine: []

    }
  }

  componentDidMount() {
    this.verifyTokenValid()
    this.setState({ pageLoading: false })
    this.getAll()
  }


  getAll = async () => {
    try {
      const data = await __GetAllCuisine()
      this.setState({ cuisine: data.cuisine })
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  verifyTokenValid = async () => {
    const token = localStorage.getItem('token')
    if (token) {
      try {
        const session = await __CheckSession()
        this.setState(
          {
            currentUser: session.user,
            authenticated: true
          },
          () => this.props.history.push('/')
        )
      } catch (error) {
        this.setState({ currentUser: null, authenticated: false })
        localStorage.clear()
      }
    }
  }

  toggleAuthenticated = (value) => {
    this.setState({ authenticated: true })
  }


  render() {
    return (
      <main>
        {this.state.pageLoading ? (
          <h3>Loading...</h3>
        ) : (
          <Switch>
            <Route
              exact path="/"
              component={(props) => (
                <Home {...props}
                  authenticated={this.state.authenticated}
                >
                </Home>
              )}
            />
            <Route
              path="/signup"
              component={(props) => (
                <Signup {...props}></Signup>
              )}
            />
            <Route
              path="/login"
              component={(props) => (
                <Signin {...props}
                  toggleAuthenticated={this.toggleAuthenticated}
                ></Signin>
              )}
            />
            <Route
              path="/home/recipes/sort/:style"
              component={(props) => (
                <RecipeList {...props} />
              )}
            />
            <Route
              path="/home/recipes/get/:recipe_id"
              component={(props) => (
                <RecipeDetails {...props} />
              )}
            />
            <Route
              path="/home/recipes/add"
              component={(props) => (
                <AddRecipe {...props} />
              )}
            />
            <Route
              path="/home/recipes/edit/:recipe_id"
              component={(props) => (
                <EditRecipe {...props} />
              )}
            />
            <Route
              path="/home/cuisine/all"
              component={(props) => (
                <AllCuisine
                  {...props}
                  cuisine={this.state.cuisine}
                />
              )}
            />
          </Switch>
        )}
      </main>
    )
  }
}
export default Router
