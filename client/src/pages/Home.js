import React from 'react'
import '../styles/Home.css'
import Nav from '../components/Nav'

export default () => {
  return (
    <div className="homepage">
        <div className="homepage-left">
            <div className="welcome-msg"><h1>Welcome to CookBook</h1></div>
            <div className="yellow-block"></div>
            <div>
                <Nav className="navlinks"></Nav>
            </div>

        </div>
        <div className="homepage-right">
            <div className="link-container">
                <div></div>
            </div>
        </div>
    </div>
  )
}


