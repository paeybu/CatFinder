import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="green darken-2">
      <div className="nav-wrapper">
        <div className="row">
          <div className="col s12">
            <Link to="/" className="brand-logo">
              Cat.
            </Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <Link to="/image">Image Search</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
