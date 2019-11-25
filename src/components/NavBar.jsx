import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/red">Red Hot Chili Peppers</Link>
        </li>
        <li>
          <Link to="/allman">The Allman Brothers</Link>
        </li>
        <li>
          <Link to="/prince">Prince</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
