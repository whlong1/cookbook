import React, {Component} from 'react'
import TextInput from '../components/TextInput'
import {__AddUser} from '../services/UserService'
import '../styles/SignUp.css'

export default class Signup extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      email: '',
      password: ''
    }
  }

  handleChange = ({target}) => {
    this.setState({[target.name]: target.value})
    console.log(this.state)
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
    const {name, email, password} = this.state
    return (
      <div className="page-layout">
        <div className="container">
          <form onSubmit={this.handleSubmit}>
            <TextInput
              placeholder="Email"
              name="email"
              type="email"
              value={email}
              onChange={this.handleChange}
            />
            <TextInput
              placeholder="Name"
              name="name"
              value={name}
              type="text"
              onChange={this.handleChange}
            />
            <TextInput
              placeholder="Password"
              name="password"
              value={password}
              type="password"
              onChange={this.handleChange}
            />
            <button type="submit">SIGN UP</button>
          </form>
        </div>
        <div className="photocont"></div>
      </div>
    )
  }
}