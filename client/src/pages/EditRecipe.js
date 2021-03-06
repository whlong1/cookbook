import React, {Component} from 'react'
import TextInput from '../components/TextInput'
import {__GetRecipe, __UpdateRecipe} from '../services/RecipeService'
import '../styles/AddRecipe.css'


export default class EditRecipe extends Component {
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

    componentDidMount() {
        this.getRecipe()
    }


  
    getRecipe = async () => {
        try {
            const data = await __GetRecipe(this.props.match.params.recipe_id)
            this.setState({
                title: data.title,
                author: data.author,
                prep_time: data.prep_time,
                description: data.description,
                image: data.image,
                style: data.style
            })
        } catch (error) {
            console.log(error)
        }
    }


    handleChange = ({target}) => {
      this.setState({[target.name]: target.value})
    }
  

    handleSubmit = async (event) => {
        event.preventDefault()
        try {
          await __UpdateRecipe(this.state, this.props.match.params.recipe_id)
          //
          let backwards = this.props.match.params.recipe_id
          this.props.history.push(`/home/recipes/get/${backwards}`)
          //
        } catch (error) {
          console.log(error)
        }
    }

    render() {
      const {title, author, prep_time, description, image, style} = this.state
      return (
        <div>
          <button onClick={() => this.props.history.push(`/`)}>HOME</button>
          <div><h1>EDIT A RECIPE</h1></div>
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
            <button type="submit">UPDATE RECIPE DETAILS</button>
          </form>
        </div>
      )
    }
  }
  

  