import React, {Component} from 'react'
import {__GetRecipe} from '../services/RecipeService'
import {__DeleteRecipe} from '../services/RecipeService'
import '../styles/RecipeDetails.css'



export default class RecipeDetails extends Component {
  constructor() {
    super()
    this.state = {
      recipe: {}
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
      // const keepers = this.state.recipes.filter((recipe) => recipe._id !== id)
      // this.setState({recipes: keepers}
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
        <button onClick={() => this.delete(recipe._id)}>Delete Recipe</button>
        <div><h1>HELLO</h1></div>
        <section>
          <div>
            {/* <img src={recipe.image} alt="an example of the current recipe"/> */}
          </div>
        </section>
        <section>
          <div>
            <h2>{recipe.title}</h2>
          </div>
        </section>

      </div>
    )
  }
}


