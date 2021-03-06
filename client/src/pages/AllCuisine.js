import React, { Component } from 'react'


import '../styles/ListPages.css'
// import Panel from '../assets/panels4.jpg'

import CuisineCard from '../components/CuisineCard'
import LoadingScreen from '../components/LoadingScreen'

export default class AllCuisine extends Component {


  render() {
    console.log(this.props)
    const cuisine = this.props.cuisine
    const pageLoading = this.props.pageLoading
    return (
      <div className="pageLayout">
        {this.props.cuisine.length ?
          <div className="pageSpread">
            {/* <button className="backButtonL" onClick={() => this.props.history.goBack()}>Back</button> */}
            <div className="cardContainer">
              {cuisine.map((cuisine) => (
                <CuisineCard
                  key={cuisine._id}
                  onClick={() => this.props.history.push(`/home/recipes/sort/${cuisine.name}`)}
                  name={cuisine.name}
                  image={cuisine.image}
                  recipes={cuisine.recipes}
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

