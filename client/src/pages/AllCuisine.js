import React, {Component} from 'react'
import {__GetAllCuisine} from '../services/CuisineService'

import CuisineCard from '../components/CuisineCard'

export default class AllCuisine extends Component {
  constructor() {
    super()
    this.state = {
      cuisine: [],
    }
    console.log(this.state)
  }

componentDidMount() {
  this.getAll()
}


getAll = async () => {
  try {
    const data = await __GetAllCuisine(this.props.match.params.cuisine)
    this.setState({cuisine: data.cuisine})
    console.log('PAGE', this.state)
  } catch (error) {
    console.log(error)
  }
}



render() {
  const {cuisine} = this.state
  console.log('RENDER', cuisine)
  return (
    <div>
      
      <div>
        <button onClick={() => this.props.history.push(`/`)}>HOME</button>
      </div>
      
      <div>
        {cuisine.map((cuisine) => (
          <CuisineCard
            key={cuisine._id}
            onClick={() => this.props.history.push(`/home/recipes/sort/${cuisine.name}`)}
            name={cuisine.name}
            image={cuisine.image}
          />
        ))}
      </div>
    </div>
  )
}
}
