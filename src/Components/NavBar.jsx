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
      //redirect to home page
      this.props.history.push('/');
  });
}


componentDidUpdate(props){
  console.log("navbar updated")
}
  render() {
    return (
     
        <nav className="navbar navbar-light fixed-top navbar-expand-md bg-light flex-row">
        <Link to="/">Home</Link>
        <Link to='/about'>About</Link>
        

        {this.props.loginStatus?  <Link to="/goals">Goals</Link> : '' }
        {this.props.loginStatus?  <Link to="/friends">Friends</Link> : <Link to="/signup">Sign up</Link> }
        {this.props.loginStatus? <a href="" onClick={this.handleLogOut}>Log out</a>: <Link to="/login">Log in</Link> }
    
      </nav>
    )
  }
}
