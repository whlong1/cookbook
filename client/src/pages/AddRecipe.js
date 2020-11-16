import React, {Component} from 'react'
import TextInput from '../components/TextInput'
import '../styles/AddRecipe.css'
import {__AddRecipe} from '../services/RecipeService'

export default class AddRecipe extends Component {
    constructor() {
      super()
      this.state = {
        title: '',
        author: '',
        prep_time: '',
        description: '',
        image: '',
        style: ''
      }
    }
  
    handleChange = ({target}) => {
      this.setState({[target.name]: target.value})
    }
  
    handleSubmit = async (event) => {
        event.preventDefault()
        try {
          // await __AddRecipe(this.state)
          console.log(this.state)
          let stored = await __AddRecipe(this.state)
          console.log('IT WORKS!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!', stored)
      
          this.props.history.push(`/home/recipes/get/${stored.recipe._id}`)
        
        } catch (error) {
          console.log(error)
        }
      }
      
  
    render() {
      const {title, author, prep_time, description, image, style} = this.state
      console.log(this.state)
      return (
        <div>
          <button onClick={() => this.props.history.push(`/`)}>HOME</button>
          <div><h1>ADD RECIPE</h1></div>
          <form onSubmit={this.handleSubmit}>
            <TextInput
              placeholder="title"
              name="title"
              value={title}
              onChange={this.handleChange}
            />
            <TextInput
              placeholder="author"
              name="author"
              value={author}
              onChange={this.handleChange}
            />
            <TextInput
              placeholder="prep_time"
              name="prep_time"
              value={prep_time}
              onChange={this.handleChange}
            />
            <TextInput
              fieldType="textfield"
              placeholder="description"
              name="description"
              value={description}
              onChange={this.handleChange}
            />
            <TextInput
              placeholder="image"
              name="image"
              value={image}
              onChange={this.handleChange}
            />
            <TextInput
              placeholder="style"
              name="style"
              value={style}
              onChange={this.handleChange}
            />
            <button type="submit">POST RECIPE</button>
          </form>
        </div>
      )
    }
  }
  
