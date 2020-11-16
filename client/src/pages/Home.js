import React from 'react'
import '../styles/Home.css'
import Nav from '../components/Nav'
import UserCard from '../components/UserCard'
import FoodList from '../components/FoodList'

export default (props) => {
    console.log(props)
  return (
    <div className="homepage">
        <div className="homepage-left">

            <div className="welcome-msg"><h1>Welcome to CookBook</h1></div>
            <div className="yellow-block"></div>

            <div>
                <Nav {...props}
                authenticated = {props.authenticated}
                ></Nav>
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



