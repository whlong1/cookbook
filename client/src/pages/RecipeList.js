import Axios from 'axios'
import React, {Component} from 'react'
import RecipeCard from '../components/RecipeCard'

export default class RecipeList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cuisineId: props.match.params.cuisineId,
      recipes: []
    }
  }

  componentDidMount() {
    this.getRecipesByStyle()
  }

  getRecipesByStyle = async () => {
    const response = await Axios.get(
    //
      `${this.state.cuisineId}`
      // GET-> localhost:3000/home/recipes/all
    //
    )
    this.setState({recipes: response.data.results})
  }

  render() {
    return (
      <div>
        {this.state.recipes.map((recipe) => (
          <RecipeCard
            onClick={() => this.props.history.push(`/home/recipes/${recipe.id}`)}
            key={recipe.id}
            title={recipe.title}
            author={recipe.author}
            prep_time={recipe.prep_time}
            image={recipe.image}
          />
        ))}
      </div>
    )
  }
}