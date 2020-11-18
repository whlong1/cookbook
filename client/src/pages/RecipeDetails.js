import React, { Component } from 'react'
import '../styles/Details.css'

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
        <div className="pageLayoutD">
          <nav className="navigationD">
            <button className="backButtonRd" onClick={() => this.props.history.push('/')}>Home</button>
            <button className="backButtonRd" onClick={() => this.props.history.goBack()}>Back</button>
          </nav>
          <div className="pageSpreadD">
            <section className="leftSideD">
              <div className="recipeHeaderD">
                <h2 className="recTitleD">{recipe.title}</h2>
                <div className="userButtons">
                  <button className="uB" onClick={() => this.delete(recipe._id)}>Delete</button>
                  <button className="uB" onClick={() => this.props.history.push(`/home/recipes/edit/${recipe._id}`)}>Edit</button>
                </div>
              </div>
              <div className="descriptionD">
                <p>Author: {recipe.author}</p>
                <p>Category: {recipe.style}</p>
                <p>Preparation Time: {recipe.prep_time}</p>
                <p className="descripT">Description:</p>
                <p className="blurb">{recipe.description}</p>
              </div>
              <div className="reviewsD">
                <div>
                  <p className="rTitle">User Reviews</p>
                </div>
                <div className="reviewListD">
                  {recipe.reviews.length ? (
                    recipe.reviews.map((review) => (
                      <div className="reviewBlockD" key={review._id}>
                        <ReviewCard
                          key={review._id}
                          text={review.text}
                        />
                      </div>
                    ))
                  ) : (
                      <div></div>
                    )}
                </div>
                <div className="entryD">
                  <form className="formBoxD" onSubmit={this.handleSubmit}>
                    <TextInput
                      className="typeHereD"
                      fieldType="textfield"
                      placeholder=""
                      name="text"
                      value={text}
                      onChange={this.handleChange}
                    />
                    <button className="subButtonD" type="submit">POST REVIEW</button>
                  </form>
                </div>
              </div>
            </section>
            <section className="rightSideD">
              <div>
                <img 
                  className="pagePhotoD"
                  src={recipe.image} alt="an example of the current recipe" />
              </div>
            </section>
          </div>
        </div>
      )
    }
    return <h6>LOADING</h6>
  }
}
