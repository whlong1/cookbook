import React, { Component } from 'react'
import TextInput from '../components/TextInput'
import { __LoginUser } from '../services/UserService'

import '../styles/SignUp.css'
import '../styles/Details.css'


export default class SignIn extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      formError: false,
    }
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value, formError: false })
  }

  handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const loginData = await __LoginUser(this.state)
      this.props.toggleAuthenticated(true, loginData.user)
      this.props.history.push('/')
    } catch (error) {
      this.setState({ formError: true })
    }
  }

  render() {
    const { email, password } = this.state
    return (
      <div className="authLayout">
        <button className="backButtonS" onClick={() => this.props.history.goBack()}>Back</button>
        <div className="container">
          <form onSubmit={this.handleSubmit}>
            <label>Email</label>
            <input
              name="email"
              type="email"
              value={email}
              autoComplete="off"
              placeholder="Email"
              onChange={this.handleChange}
            />
            <input
              hidden
              name="name"
              type="text"
              autoComplete="off"
              placeholder="Name"
            />
            <label>Password</label>
            <input
              name="password"
              type="password"
              value={password}
              autoComplete="off"
              placeholder="Password"
              onChange={this.handleChange}
            />
            <button className="subButtonS" type="submit">SIGN IN</button>
          </form>
        </div>
        <div className="photocont"></div>
      </div>
    )
  }
}
