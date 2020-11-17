import React, { Component } from 'react'
import '../styles/RecipeDetails.css'

import { __GetRecipe } from '../services/RecipeService'
import { __DeleteRecipe } from '../services/RecipeService'
import {__AddReview} from '../services/ReviewService'

import TextInput from '../components/TextInput'
import ReviewCard from '../components/ReviewCard'


export default class RecipeDetails extends Component {
  constructor() {
    super()
    this.state = {
      recipe: null,
      text: '',
    }
  }

  componentDidMount() {
    this.getRecipeDetails()
  }

  getRecipeDetails = async () => {
    const data = await __GetRecipe(this.props.match.params.recipe_id)
    this.setState({ recipe: data, reviews: data.reviews })
    console.log('STATE', this.state.reviews)
  }

  delete = async (recipeId) => {
    try {
      console.log('THE FIRST ONE', recipeId)
      await __DeleteRecipe(recipeId)
      console.log('THE SECOND ONE', recipeId)

      this.props.history.push(`/`)
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
      await __AddReview(this.state, this.props.match.params.recipe_id)
      this.getRecipeDetails()
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    const { recipe, review, reviews, text } = this.state
    if (this.state.recipe) {
      return (
        <div>
          <button onClick={() => this.props.history.push(`/`)}>HOME</button>
          <button onClick={() => this.delete(recipe._id)}>Delete Recipe</button>
          <button onClick={() => this.props.history.push(`/home/recipes/edit/${recipe._id}`)}>Edit Recipe</button>

          <section>
            <div>
              <img src={recipe.image} alt="an example of the current recipe" />
            </div>
          </section>

          <section>
            <div className="recipe-header">
              <h1>{recipe.title}</h1>
              <h3>By: {recipe.author}</h3>
            </div>
            <div className="description">
              <p>Type: {recipe.style}</p>
              <p>Preparation Time: {recipe.prep_time}</p>
              <p>Description: {recipe.description}</p>
            </div>
            <div className="reviews">
              <div><h3>Reviews</h3></div>
              <div className="review-list">
                {recipe.reviews.length ? (
                  recipe.reviews.map((review) => (
                    <div key={review._id}>
                      <ReviewCard
                        key={review._id}
                        text={review.text}
                      />
                    </div>
                  ))
                ) : (
                    <h3>No Reviews</h3>
                  )}
              </div>

              <div className="entry">
                <form onSubmit={this.handleSubmit}>
                  <TextInput
                    fieldType="textfield"
                    placeholder="review"
                    name="text"
                    value={text}
                    onChange={this.handleChange}
                  />
                  <button type="submit">POST REVIEW</button>
                </form>
              </div>

            </div>
          </section>

        </div>
      )
    }
    return <h1>LOADING</h1>
  }
}


