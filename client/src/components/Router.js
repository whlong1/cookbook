import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Signup from '../pages/SignUp'


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
                </Switch>
            )}
            </main>
    )
  }
}

export default Router