import React from 'react'
import { NavLink } from 'react-router-dom'
import { signup } from '../routes/'

export default function () {
  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <a className="navbar-brand" href="index.html">conduit</a>
        <ul className="nav navbar-nav pull-xs-right">
          <li className="nav-item">
            <NavLink className="nav-link" exact to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              <i className="ion-compose"></i>&nbsp;New Post
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              <i className="ion-gear-a"></i>&nbsp;Settings
            </a>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to={signup.path}>Sign up</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}
