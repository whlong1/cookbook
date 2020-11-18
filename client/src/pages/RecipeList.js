import React, {Component} from 'react'

import {__GetListByStyle} from '../services/RecipeService'
import RecipeCard from '../components/RecipeCard'

import '../styles/ListPages.css'

import Panel from '../assets/panels3.jpg'



export default class RecipeList extends Component {
  constructor() {
    super()
    this.state = {
      recipes: [],
    }
    
  }

componentDidMount() {
  this.getRecipesByStyle()
}

getRecipesByStyle = async () => {
  try {
    const data = await __GetListByStyle(this.props.match.params.style)
    this.setState({recipes: data.list})
  } catch (error) {
    console.log(error)
  }
}

render() {
  const {recipes} = this.state
  return (
    <div className="pageLayout">
      
      <div>
        <button className="backButton" onClick={() => this.props.history.goBack()}>Back</button>
      </div>
      
      <div className="pageSpread">

        <div className="leftSide">
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

        <div className="rightSide">
            <img 
              className="pagePhoto" 
              src={Panel}
            ></img>
        </div>

      

      </div>



    

    </div>
  )
}
}


