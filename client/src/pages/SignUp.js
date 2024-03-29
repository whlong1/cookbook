import React, { Component } from 'react'
import TextInput from '../components/TextInput'
import { __AddUser } from '../services/UserService'

import '../styles/SignUp.css'
import '../styles/Details.css'

export default class Signup extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      email: '',
      password: ''
    }
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value })
  }

  handleSubmit = async (event) => {
    event.preventDefault()
    try {
      await __AddUser(this.state)
      this.props.history.push('/login')
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    const { name, email, password } = this.state
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
            <label>Name</label>
            <input
              name="name"
              type="text"
              value={name}
              autoComplete="off"
              placeholder="Name"
              onChange={this.handleChange}
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
            <button className="subButtonS" type="submit">SIGN UP</button>
          </form>
        </div>
        <div className="photocont"></div>
      </div>
    )
  }
}