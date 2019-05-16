import React, { Component } from 'react';
import NavBar from './NavBar.jsx'
import { Link } from 'react-router-dom';
import axios from 'axios';

export class Welcome extends Component {
  handleClick = event =>{
    let url = "http://localhost:8080/trial";
    
    axios.post(url ).then(res => console.log(res.data)) 
   }

  


  render() {
    return (
      <div>
        <NavBar/>
        <h2>Welcome to DidIt</h2>
        <h5>The best way to achieve your goals</h5>
        <Link to="/signup" >Sign up here</Link>
        <h5>Already a user?</h5>
        <Link to="/login">Log in here </Link>
        <button onClick={this.handleClick}>Click here to test trial</button>
      </div>
    )
  }
}

