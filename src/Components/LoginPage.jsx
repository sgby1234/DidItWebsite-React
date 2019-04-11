import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { Button, Form, FormGroup, FormControl, Jumbotron } from "react-bootstrap";
import axios from 'axios';

export class LoginPage extends Component {
  constructor(props)
  {
    super(props);
    this.state =
    {
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
    let url = "http://localhost:8080/";
    /*let info =
    {
      email: this.state.email,
      password: this.state.password,
    }*/
    event.preventDefault();
    axios.post(url + "processLogin", 
    {
      email: this.state.email,
      password: this.state.password
    })
    .then( res => {
        console.log(res);
        console.log(res.data);
        
    });

  }
  /*  email: this.state.email, password: this.state.password */

  
  

  render() {
    return (
      <div className="Login">
      <Jumbotron><h1>Login</h1> </Jumbotron>
        <h4>{this.props.message}</h4>
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
  }
}
