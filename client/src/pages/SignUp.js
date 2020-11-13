import React, {Component} from 'react'
import TextInput from '../components/TextInput'

export default class Signup extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      email: '',
      password: ''
    }
  }

  handleChange = (event) => {
    const {target} = event
    this.setState({[target.name]: target.value})
  }

  handleSubmit = async (event) => {
    event.preventDefault()
    console.log(this.state)
  }

  render() {
    const {name, email, password} = this.state
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
    )
  }
}