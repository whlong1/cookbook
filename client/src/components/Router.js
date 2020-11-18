import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Signup from '../pages/SignUp'
import Signin from '../pages/SignIn'

import {__CheckSession} from '../services/UserService'

import RecipeList from '../pages/RecipeList'
import RecipeDetails from '../pages/RecipeDetails'
import AddRecipe from '../pages/AddRecipe'
import EditRecipe from '../pages/EditRecipe'
import AllCuisine from '../pages/AllCuisine'


class Router extends Component {
    constructor() {
      super()
      this.state = {
        pageLoading: true,
        authenticated: false

      }
    }

componentDidMount() {
    this.verifyTokenValid()
    this.setState({pageLoading: false})
}

verifyTokenValid = async () => {
    const token = localStorage.getItem('token')
    if (token) {
      try {
        const session = await __CheckSession()
        console.log('session', session)
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
    this.setState({authenticated: true})
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
                            authenticated = {this.state.authenticated}
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
                            toggleAuthenticated = {this.toggleAuthenticated}
                            ></Signin>
                        )}
                    />
                    <Route 
                      path="/home/recipes/sort/:style" 
                      component={(props) => (
                        <RecipeList {...props}/>
                      )}
                    />
                    <Route 
                      path="/home/recipes/get/:recipe_id" 
                      component={(props) => (
                        <RecipeDetails {...props}/>
                      )}
                    />
                    <Route 
                      path="/home/recipes/add" 
                      component={(props) => (
                        <AddRecipe {...props}/>
                      )}
                    />
                    <Route 
                      path="/home/recipes/edit/:recipe_id"
                      
                      component={(props) => (
                        <EditRecipe {...props}/>
                      )}
                    />
                    <Route 
                      path="/home/cuisine/all"
                      
                      component={(props) => (
                        <AllCuisine {...props}/>
                      )}
                    />                  
                </Switch>
            )}
            </main>
    )
  }
}
export default Router
