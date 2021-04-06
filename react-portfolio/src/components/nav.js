import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'




function Nav() {
  return (
    <nav className="navbar sticky-top" id="navRed">
      <span className="navbar-brand mb-0"><h1 className="textColor">Geoffrey Zimmerman</h1></span>
      <ul className="nav justify-content-end">
        <li className="nav-item">
          <Link className="nav-link active textColor" to="/"><h3>Portfolio</h3></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link textColor" to="/contact"><h3>Contact</h3></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link textColor" to="/about"><h3>About</h3></Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav