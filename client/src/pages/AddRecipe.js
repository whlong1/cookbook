import React, { Component } from 'react'
import TextInput from '../components/TextInput'
import '../styles/AddRecipe.css'
import { __AddRecipe } from '../services/RecipeService'

export default class AddRecipe extends Component {
  constructor(props) {
    super()
    this.state = {
      title: '',
      image: '',
      prep_time: '',
      description: '',
      cuisine_id: props.cuisine[0]?._id
    }
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value })
  }

  handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const data = await __AddRecipe(this.state)
      this.props.history.push(`/home/recipes/get/${data.recipe._id}`)
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    const { title, prep_time, description, image } = this.state
    return (
      <div>
        <button onClick={() => this.props.history.push(`/`)}>HOME</button>
        <div><h2>ADD RECIPE</h2></div>
        <form onSubmit={this.handleSubmit}>
          <input
            required
            name="title"
            value={title}
            placeholder="Title"
            onChange={this.handleChange}
          />
          <input
            required
            name="prep_time"
            value={prep_time}
            placeholder="Prep Time"
            onChange={this.handleChange}
          />
          <input
            required
            name="description"
            value={description}
            type="text"
            placeholder="Description"
            onChange={this.handleChange}
          />
          <input
            name="image"
            value={image}
            placeholder="Image URL"
            onChange={this.handleChange}
            pattern="/(https?:\/\/.*\.(?:png|jpg))/i"
          />
          <select name="cuisine_id" onChange={this.handleChange}>
            {this.props.cuisine.map((cuisine) => (
              <option key={cuisine._id} value={cuisine._id}>
                {cuisine.name}
              </option>
            ))}
          </select>
          <button type="submit">POST RECIPE</button>
        </form>
      </div>
    )
  }
}