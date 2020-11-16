import React, {Component} from 'react'
import {__GetRecipe} from '../services/RecipeService'
import {__DeleteRecipe} from '../services/RecipeService'
import '../styles/RecipeDetails.css'
import TextInput from '../components/TextInput'

//Component
import AddReview from '../components/AddReview'

//New Page






export default class RecipeDetails extends Component {
  constructor() {
    super()
    this.state = {
      recipe: {}
      //empty review form?
    }
  }

  componentDidMount() {
    this.getRecipeDetails()
  }

  getRecipeDetails = async () => {
    const data = await __GetRecipe(this.props.match.params.recipe_id)
    this.setState({recipe: data.recipe})
    console.log(data)
  }


  delete = async (recipeId) => {
    try {
      console.log('THE FIRST ONE', recipeId)
      await __DeleteRecipe(recipeId)
      console.log('THE SECOND ONE',recipeId)

      this.props.history.push(`/`)
    } catch (error) {
      console.log(error)
    }
  }


  render() {
    const {recipe} = this.state
    return (
      
      <div>
        
        <button onClick={() => this.props.history.push(`/`)}>HOME</button>

        <button onClick={() => this.delete(recipe._id)}>Delete Recipe</button>
        <button onClick={() => this.props.history.push(`/home/recipes/edit/${recipe._id}`)}>Edit Recipe</button>


        <section>
          <div>
            <img src={recipe.image} alt="an example of the current recipe"/>
          </div>
        </section>

        <section>
          <div className="recipe-header">
            <h2>{recipe.title}</h2>
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

            {/* <button onClick={() => this.props.history.push(`/home/recipes/edit/${recipe._id}`)}>ADD REVIEW</button> */}

            <div>
              <AddReview>
              </AddReview>
            </div>
            

          </div>
        </section>

      </div>
    )
  }
}


{/* <div className="review-container">
{review.comments.length ? (
  recipe.review.map((review) => (
    <li className="review-list" key={review._id}>
      <p>
        <Link>{review.user_id.name}</Link>
      </p>
      <p>{review.review}</p>
    </li>
  ))
) : (
  <h3>No Comments</h3>
)}
</div> */}
