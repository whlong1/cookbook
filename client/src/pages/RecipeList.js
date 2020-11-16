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
    console.log(this.state)
  }

componentDidMount() {
  this.getRecipesByStyle()
}


getRecipesByStyle = async () => {
  try {
    const data = await __GetListByStyle(this.props.match.params.style)
    this.setState({recipes: data.list})
    console.log(this.state)
  } catch (error) {
    console.log(error)
  }
}



render() {
  const {recipes} = this.state
  return (
    <div>
      
      <div>
        <button onClick={() => this.props.history.push(`/`)}>HOME</button>
      </div>
      
      <div>
        {recipes.map((recipe) => (
          <RecipeCard
            key={recipe._id}
            onClick={() => this.props.history.push(`/home/recipes/get/${recipe._id}`)}
            title={recipe.title}
            author={recipe.author}
            image={recipe.image}
          />
        ))}
      </div>
    </div>
  )
}
}


