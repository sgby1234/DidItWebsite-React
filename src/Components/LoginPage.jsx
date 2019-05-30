import React, { Component } from 'react';
import { Button, Form, FormGroup, FormControl, Jumbotron } from "react-bootstrap";
import axios from 'axios';

import '../globals.js';


export class LoginPage extends Component {
  constructor(props)
  {
    super(props);
    this.state =
    {
      message:"",
      email: "",
      password: "",
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    console.log("props " + this.props)
    let url = "http://localhost:8080/";
 
    event.preventDefault();
    /*Changed to processLogin2 temporarily while trying to see if the cookie will set now */
 
    axios.post(url + "processLogin",
    {
      email: this.state.email,
      password: this.state.password
    })
    .then( res => {
      
        console.log(res);
        console.log(res.data);
        /*res.data = did they log in successfully*/
        if(res.data)
        {
          let loggedIn = res.data
            
            //get their username
            axios.get(url + "getUserName").then(res => {
              console.log(res.data)
              let userName = res.data
              
              this.props.setLogin(loggedIn, userName);
             })

            this.props.history.push('/');
        }
        else
        {
          this.setState({message:"Invalid Credentials. Cannot Login"})
        }
    
    });

 
}
  

  render() {

    return (
      <div className="Login">
       
      <Jumbotron><h1>Login</h1> </Jumbotron>
        
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="email" >
           <label >Email</label>
            <FormControl
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password">
           <label>Password</label>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <h5>{this.state.message}</h5>
          <Button
            block
            disabled={!this.validateForm()}
            type="submit"
          >
            Login
          </Button>
        </form>
      </div>

    )
    }}
