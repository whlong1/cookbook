import React, { Component } from 'react'
import '../styles/ListPages.css'
import CuisineCard from '../components/CuisineCard'
import LoadingScreen from '../components/LoadingScreen'

export default class AllCuisine extends Component {
  render() {
    const cuisine = this.props.cuisine
    return (
      <div className="pageLayout">
        {this.props.cuisine.length ?
          <div className="pageSpread">
            <div className="cardContainer">
              {cuisine.map((cuisine) => (
                <CuisineCard
                  key={cuisine._id}
                  name={cuisine.name}
                  image={cuisine.image}
                  recipes={cuisine.recipes}
                  onClick={() => this.props.history.push(`/home/recipes/sort/${cuisine._id}`)}
                />
              ))}
            </div>
          </div>
          :
          <div><LoadingScreen cuisine={cuisine}/></div>
        }
      </div>
    )
  }
}

