import React, { Component } from 'react';
import NavBar from './NavBar.jsx'
import { Link } from 'react-router-dom'

export class Welcome extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <h2>Welcome to DidIt</h2>
        <h5>The best way to achieve your goals</h5>
        <Link to="/signup" >Sign up here</Link>
        <h5>Already a user?</h5>
        <Link to="/login">Log in here </Link>
      </div>
    )
  }
}

