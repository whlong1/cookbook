import React, {Component} from 'react'
import '../styles/SignUp.css'
import TextInput from '../components/TextInput'
import {__LoginUser} from '../services/UserService'


export default class SignIn extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      formError: false,
      // loggedIn: false
    }
  }

  handleChange = ({target}) => {
    this.setState({[target.name]: target.value, formError:false})
  }

  handleSubmit = async (event) => {
    event.preventDefault()
    console.log(this.state)
    try {
      const loginData = await __LoginUser(this.state)
      this.props.toggleAuthenticated(true)
      this.props.history.push('/')
      // this.setState({loggedIn: true})
      // console.log('LOGGED', this.state)
    } catch (error) {
      this.setState({ formError: true })
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
