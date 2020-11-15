import React, {Component} from 'react'
import {__GetListByStyle} from '../services/RecipeService'
import '../styles/RecipeCard.css'

import RecipeCard from '../components/RecipeCard'

export default class RecipeList extends Component {
  constructor() {
    super()
    this.state = {
      recipes: [],
    }
    // console.log(props.match.params)
    console.log(this.state)
  }

  componentDidMount() {
    this.getRecipesByStyle()
  }

getRecipesByStyle = async () => {
  try {
    const recipes = await __GetListByStyle(this.props.match.params.style)
    this.setState({recipes: recipes.list})
    console.log(this.state)
  } catch (error) {
    console.log(error)
  }
}


render() {
  const {recipes} = this.state
  console.log(typeof(recipes))
  console.log(recipes[0])
  return (
    <div>
      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe._id}
          title={recipe.title}
        />
      ))}
    </div>
  )
}
}

