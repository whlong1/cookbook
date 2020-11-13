import React from 'react'
import {NavLink} from 'react-router-dom'


export default ({className}) => {
  return (
    <header className={className}>
      <div></div>
      <nav>
        <NavLink activeClassName="nav" to="/signup"><p className="signin-up">SIGN UP</p></NavLink>
      </nav>
    </header>
  )
}