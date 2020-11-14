import Axios from 'axios'
import React, {Component} from 'react'
import {__GetListByStyle} from '../services/RecipeService'

import RecipeCard from '../components/RecipeCard'

export default class RecipeList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // cuisineId: props.match.params.cuisineId,
      recipes: []
    }
  }

  componentDidMount() {
    this.getRecipesByStyle()
  }


//   Router.get('/sort/:cuisineStyle', RecipeController.ListRecipesByStyle)
// //GET-> localhost:3000/home/recipes/sort/Fast Food



  getRecipesByStyle = async () => {
    try {
      // const recipes = await __GetListByStyle(this.state.currentPage)
      const recipes = await __GetListByStyle(this.props.match.params.style)
      this.setState({recipes: [...this.state.recipes, ...recipes]})
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    const {recipes} = this.state
    return (
      <div></div>
    )
  }
}


//========
//   getRecipesByStyle = async () => {
//     // const response = await Axios.get(`http://localhost:3001/home/recipes/sort/${this.state.cuisineId}`)
//     const response = await Axios.get(`http://localhost:3001/home/recipes/sort/indian`)
//     this.setState({recipes: response.data.results})
//     console.log(response.data)
//   }

//   render() {
//     const {recipes} = this.state
//     return (
//       <div>
//         {/* {this.state.recipes.map((recipe) => (
//           <RecipeCard
//             onClick={() => this.props.history.push(`/home/recipes/${recipe.id}`)}
//             key={recipe.style}
//             title={recipe.title}
//             author={recipe.author}
//             prep_time={recipe.prep_time}
//             image={recipe.image}
//           />
//         ))} */}
//       </div>
//     )
//   }
// }
//========



//line 33-use recipe cuisine id