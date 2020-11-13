import React from 'react'
import {NavLink} from 'react-router-dom'


export default ({className}) => {
  return (
    <header className={className}>
      <div></div>
      <nav>
        <NavLink activeClassName="nav" to="/signup"><p className="signup">SIGN UP</p></NavLink>
        <NavLink activeClassName="nav" to="/signin"><p className="signin">SIGN IN</p></NavLink>
      </nav>
    </header>
  )
}