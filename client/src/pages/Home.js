import React from 'react'
import '../styles/Home.css'
import Nav from '../components/Nav'
import FoodList from '../components/FoodList'

export default () => {
  return (
    <div className="homepage">
        <div className="homepage-left">
            <div className="welcome-msg"><h1>Welcome to CookBook</h1></div>
            <div className="yellow-block"></div>
            <div>
                <Nav></Nav>
            </div>

        </div>
        <div className="homepage-right">
            <div className="link-container">
                <div>
                    <FoodList></FoodList>
                </div>
            </div>
        </div>
    </div>
  )
}
