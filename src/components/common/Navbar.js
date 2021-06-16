import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { startLogout } from '../../actions/auth';

export const Navbar = () => {

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch( startLogout() );
  }

  return (
    <div className="navbar flex-around all-width d-flex">
      <h3>TodoApp</h3>
      <ul
        className="navbar__list"
      >
        <Link to='/' style={{textDecoration: 'none', color: "white", paddingLeft: '1rem'}}>Home</Link>
        <Link to='/dashboard' style={{textDecoration: 'none', color: "white", paddingLeft: '1rem'}}>Todos</Link>
        <p
          onClick={ handleLogout }
          style={{textDecoration: 'none', color: "#893168", paddingLeft: '1rem', display: "inline-block", cursor: "pointer"}}>Logout</p>
      </ul>
    </div>
  )
}
