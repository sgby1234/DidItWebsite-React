import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class NavBar extends Component {
  render() {
    return (
     
        <nav className="navbar navbar-light bg-light flex-column">
        <Link to="/signup">Signup</Link>
        <Link to="/goals">Goals</Link>
        <Link to="/signup">About</Link>
        <Link to="/friends">Friends</Link>
        <Link to="/signup">Will be: Log out</Link>
      </nav>
    )
  }
}
