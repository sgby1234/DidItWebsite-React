import React, { Component } from "react"
import '../App.css';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';
import '../globals.js';



export class Signup extends Component {
  constructor(props)
  {
    super(props);
    this.state =
    {
      firstName: "",
      lastName: "",
      userName: "",
      email: "",
      password: "",
      redirect: false
    };
  }


  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }


  handleSubmit = event => {
    let url = "http://localhost:8080/";
   
    event.preventDefault();
    axios.post(url + "processSignup",
     { 
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        userName: this.state.userName,
        email: this.state.email,
        password: this.state.password,
     })
    .then( res => {
      
       if(res.data)
       {
          this.props.history.push('/login');
       }
    
    })
  }




  render() {
    return ( 

      <div>
        <div className="jumbotron"> <h1 className="display-4">Signup to DidIT</h1></div>
         
  
        <Form onSubmit={this.handleSubmit} >
          <Form.Group controlId="firstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control value={this.state.firstName}  onChange={this.handleChange} type="text" placeholder="John"/>
          </Form.Group>

          <Form.Group controlId="lastName"> 
            <Form.Label>Last Name</Form.Label>
            <Form.Control value={this.state.lastName} onChange={this.handleChange} type="text" placeholder="Doe"/>
          </Form.Group>

          <Form.Group controlId="userName">
            <Form.Label>Display Name</Form.Label>
            <Form.Control value={this.state.userName} onChange={this.handleChange} type="text" placeholder="#jDOE"/>
            <Form.Text className="text-muted">This is how others will see your name.</Form.Text>
          </Form.Group>

          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control value={this.state.email}  onChange={this.handleChange} type="email" placeholder="johndoe@gmail.com"/>
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control value={this.state.password} onChange={this.handleChange} type="password" />
          </Form.Group>

          <Button
            block
            /*disabled={!this.validateForm()}*/
            type="submit"
          >
            Sign up
          </Button>
        </Form>
      </div>
    );
  }
}
