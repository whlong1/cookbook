import React, {Component} from 'react'
import {__GetAllCuisine} from '../services/CuisineService'

import '../styles/ListPages.css'
import Panel from '../assets/panels4.jpg'

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
    <div className="pageLayout">
      <button className="backButton" onClick={() => this.props.history.goBack()}>Back</button>
      <div className="pageSpread">
        <div className="leftSide">
          {cuisine.map((cuisine) => (
            <CuisineCard
              key={cuisine._id}
              onClick={() => this.props.history.push(`/home/recipes/sort/${cuisine.name}`)}
              name={cuisine.name}
              image={cuisine.image}
            />
          ))}
        </div>
        <div className="rightSide">
          <img className="pagePhoto" src={Panel}></img>
        </div>
      </div>
    </div>
  )
}
}

