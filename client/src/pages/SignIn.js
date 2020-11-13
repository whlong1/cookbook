import React, {Component} from 'react'
import TextInput from '../components/TextInput'

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
  }

  render() {
    const {email, password} = this.state
    return (
      <div>
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
    )
  }
}