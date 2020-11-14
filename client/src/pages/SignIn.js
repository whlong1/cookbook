import React, {Component} from 'react'
import TextInput from '../components/TextInput'
import {__LoginUser} from '../services/UserService'
import '../styles/SignUp.css'

export default class SignIn extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      formError: false
    }
  }

  handleChange = ({target}) => {
    this.setState({[target.name]: target.value})
  }

  handleSubmit = async (event) => {
    event.preventDefault()
    console.log(this.state)
    try {
      await __LoginUser(this.state)
      this.props.history.push('/')
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    const {email, password} = this.state
    return (
      <div className="pageLayout">
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
              placeholder="Password"
              name="password"
              value={password}
              type="password"
              onChange={this.handleChange}
            />
            <button type="submit">SIGN IN</button>
          </form>
        </div>
        <div className="photocont"></div>
      </div>
    )
  }
}

