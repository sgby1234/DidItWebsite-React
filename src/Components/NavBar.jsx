import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../globals.js';

export  class NavBar extends Component {
  handleLogOut() {
      //tell back end to log out
      let url = "http://localhost:8080/";
      axios.post(url + "processLogout")
      .then( () => {
      //make call to app.js to chnage its state
      this.props.logout()
  });
}
  render() {
    
    return (
     
        <nav className="navbar navbar-light bg-light flex-row">
        <Link to="/signup">Signup</Link>
        <Link to="/goals">Goals</Link>
        <Link to="/signup">About</Link>
        <Link to="/friends">Friends</Link>
        {this.props.loginstatus? <a  href="" onClick={this.handleLogOut}>Log out</a>: <Link to="/login">Log in</Link> }
    
      </nav>
    )
  }
}
