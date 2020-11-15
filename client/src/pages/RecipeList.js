import Axios from 'axios'
import React, {Component} from 'react'
import {__GetListByStyle} from '../services/RecipeService'
import '../styles/RecipeCard.css'

import RecipeCard from '../components/RecipeCard'

export default class RecipeList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      recipes: [],
    }
    console.log(props.match.params)
    console.log(this.state)
  }

  componentDidMount() {
    this.getRecipesByStyle()
  }


//VERSION 3
//Returns an empty array, and the message RECIPES NOT FOUND

getRecipesByStyle = async () => {
  try {
    console.log(this.props)
    const recipes = await __GetListByStyle(this.props.match.params.style)
    this.setState({recipes})
    console.log(this.state)
  } catch (error) {
    console.log(error)
  }
}


render() {
  // console.log(this.state)
  const {recipes} = this.state
  console.log(recipes)
  return (
    <div>
      {this.state.recipes.length ? (
      <div>
        {this.state.recipes.map((recipe) => (
          <RecipeCard>
            <div>
              <h4>{recipe.title}</h4>
            </div>
          </RecipeCard>
          

        ))}
      </div>
      ) : (
      <div>FUCK FUCK FUCK NO RECIPES UNDER THAT STYLE</div>
      )}


      {/* {recipes.map((recipe) => (
        <RecipeCard
          key={recipe.id}
          title={recipe.name}
        />
      ))} */}
    </div>
  )
}
}

// {recipes.length ? (recipes.map((recipe) => ())



// render() {
//   console.log(this.state)
//   const {recipes} = this.state
//   return (
//     <div>
//       <div>
//         {this.state.recipes.length ? (
//           <div>
//             {this.state.recipes.map((recipe) => (
//               <div key={recipe.style}>
//                 <RecipeCard></RecipeCard>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <div>RECIPES NOT FOUND!!!!</div>
//         )}
//       </div>
//     </div>
//   )
// }
// }
