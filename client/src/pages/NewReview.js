import React, {Component} from 'react'
import TextInput from '../components/TextInput'
import '../styles/AddRecipe.css'
import {__AddReview} from '../services/ReviewService'

export default class AddRecipe extends Component {
    constructor() {
      super()
      this.state = {
        description: '',
      }
    }
  
    handleChange = ({target}) => {
      this.setState({[target.name]: target.value})
    }
  
    handleSubmit = async (event) => {
        event.preventDefault()
        try {
          // await __AddReview(this.state)
          console.log(this.state)
          let stored = await __AddReview(this.state)
          console.log('handle submit test', stored)
      
          this.props.history.push(`/home/recipes/get/${stored.recipe._id}`)
          //store recipe in props? or push back 1 page
        
        } catch (error) {
          console.log(error)
        }
      }
      
  
    render() {
      const {description} = this.state
      console.log(this.state)
      return (
        <div>
          {/* <button onClick={() => this.props.history.push(`/`)}>HOME</button> */}
          <form onSubmit={this.handleSubmit}>
            <TextInput
              fieldType="textfield"
              placeholder="Your Review"
              name="review"
              value={description}
              onChange={this.handleChange}
            />
            <button type="submit">ADD REVIEW</button>
          </form>
        </div>
      )
    }
  }
  
