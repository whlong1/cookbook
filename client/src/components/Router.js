import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Signup from '../pages/SignUp'
import Signin from '../pages/SignIn'

import RecipeList from './pages/RecipeList'
import RecipeDetails from './pages/RecipeDetails'


class Router extends Component {
    constructor() {
      super()
      this.state = {
        pageLoading: true
      }
    }

    componentDidMount() {
        this.setState({pageLoading: false})
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
                        component={() => (
                            <Home></Home>
                        )}
                    />
                    <Route
                        path="/signup"
                        component={(props) => (
                            <Signup {...props}></Signup>
                        )}
                    />
                    <Route
                        path="/signin"
                        component={(props) => (
                            <Signin {...props}></Signin>
                        )}
                    />

                    <Route path="/home/recipes/:cuisineId" component={RecipeList}/>

                    <Route path="/home/recipes/:recipeId" component={RecipeDetails}/>
                    

                </Switch>
            )}
            </main>
    )
  }
}

export default Router

// GET-> localhost:3000/home/recipes/all

//line 47 should maybe return stuff from the cuisine list

