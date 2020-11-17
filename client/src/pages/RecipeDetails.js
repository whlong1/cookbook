import React, { Component } from 'react'
import { __GetRecipe } from '../services/RecipeService'
import { __DeleteRecipe } from '../services/RecipeService'
import '../styles/RecipeDetails.css'
import TextInput from '../components/TextInput'
import ReviewCard from '../components/ReviewCard'


export default class RecipeDetails extends Component {
  constructor() {
    super()
    this.state = {
      recipe: null,
      reviews: [],
      review: ''
    }
  }

  componentDidMount() {
    this.getRecipeDetails()
  }

  getRecipeDetails = async () => {
    const data = await __GetRecipe(this.props.match.params.recipe_id)
    console.log('LINE 26', data)
    this.setState({ recipe: data, reviews: data.reviews })
    console.log('STATE', this.state)
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


  //=============

  handleChange = ({target}) => {
    this.setState({[target.name]: target.value})
  }


  // handleSubmit = async (event) => {
  //   event.preventDefault()
  //   try {
  //     // await __AddRecipe(this.state)
  //     console.log(this.state)
  //     let stored = await __AddRecipe(this.state)
  //     console.log('IT WORKS!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!', stored)
  
  //     this.props.history.push(`/home/recipes/get/${stored.recipe._id}`)
    
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
  //=============


  render() {
    const { recipe } = this.state
    console.log('HERE HERE', recipe)
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
              <div>REVIEW PLACEHOLDER</div>


              <div className="review-list">
                {recipe.reviews.length ? (
                  recipe.reviews.map((review) => (
                    <div key={review._id}>
                      <ReviewCard
                        key={review._id}
                        // onClick={() => this.props.history.push(`/home/recipes/get/${recipe._id}`)} 
                        text={review.text}
                      />
                    </div>
                  ))
                ) : (
                    <h3>No Reviews</h3>
                  )}
              </div>


              <div className="entry">
                <form>
                  <TextInput
                    fieldType="textfield"
                    placeholder="review"
                    // name="description"
                    // value={description}
                    onChange={this.handleChange}
                  />
                  <button>POST REVIEW</button>
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


