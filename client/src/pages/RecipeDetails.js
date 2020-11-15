import React, {Component} from 'react'
import {__GetRecipe} from '../services/RecipeService'
import '../styles/RecipeDetails.css'


export default class RecipeDetails extends Component {
  constructor() {
    super()
    this.state = {
      // recipeId: props.match.params.recipeId,
      // recipeDetails: {}
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



  render() {
    const {recipe} = this.state
    return (
      <div>
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


//BACK END ROUTE
// Router.get('/get/:recipe_id', RecipeController.GetRecipeById)
// //GET-> localhost:3001/home/recipes/get/5fb007ef7135f341060cb0a8

//SERVICES
// export const __GetRecipe = async (recipeid) => {
//   try {
//     const response = await ApiClient.get(`recipes/get/${recipeid}`)
//     return response.data
//   } catch (error) {
//     throw error
//   }
// }