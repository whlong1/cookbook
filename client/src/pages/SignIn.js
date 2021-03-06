import React, {Component} from 'react'
import TextInput from '../components/TextInput'
import {__LoginUser} from '../services/UserService'

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

  handleChange = ({target}) => {
    this.setState({[target.name]: target.value, formError:false})
  }

  handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const loginData = await __LoginUser(this.state)
      this.props.toggleAuthenticated(true)
      this.props.history.push('/')
    } catch (error) {
      this.setState({ formError: true })
    }
  }

  render() {
    const {email, password} = this.state
    return (
      <div className="pageLayout">
        <button className="backButtonS" onClick={() => this.props.history.goBack()}>Back</button>
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
            <button className="subButtonS" type="submit">SIGN IN</button>
          </form>
        </div>
        <div className="photocont"></div>
      </div>
    )
  }
}
