import React from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.css'

export const NavBar = () => {
  return (
    <nav style={{display:'flex', width:'100%', alignItems:'center', justifyContent:'flex-start'}}>
      <NavLink exact activeClassName='active' to='/' style={{marginRight:'20px'}}>
        <li>Home</li>
      </NavLink>
      <NavLink exact activeClassName='active' to='/login' style={{marginRight:'20px'}}>
        <li>Login</li>
      </NavLink>
      <NavLink exact activeClassName='active' to='/about' style={{marginRight:'20px'}}>
        <li>About</li>
      </NavLink>
    </nav>
  )
}