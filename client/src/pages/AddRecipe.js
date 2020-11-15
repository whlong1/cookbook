import React, {Component} from 'react'
import TextInput from '../components/TextInput'
import '../styles/AddRecipe.css'
import {__AddRecipe} from '../services/RecipeService'

export default class AddRecipe extends Component {
    constructor() {
      super()
      this.state = {
        title: ''
      }
    }
  
    handleChange = ({target}) => {
      this.setState({[target.name]: target.value})
    }
  
    handleSubmit = async (event) => {
        event.preventDefault()
        try {
          await __AddRecipe(this.state)
        //   this.props.history.push('/')
        } catch (error) {
          console.log(error)
        }
      }
  
    render() {
      const {title} = this.state
      console.log(this.state)
      return (
        <div>
            <div><h1>HELLO</h1></div>
          <form onSubmit={this.handleSubmit}>
            <TextInput
              placeholder="Title"
              name="title"
              value={title}
              onChange={this.handleChange}
            />
            <button type="submit">POST RECIPE</button>
          </form>
        </div>
      )
    }
  }
  
