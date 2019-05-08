import React, { Component } from "react"
import  NavBar  from './NavBar.jsx'
import '../App.css';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap'
import { Redirect } from 'react-router-dom'
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
      /* Print out the return */

        console.log(res);
        console.log(res.data);
        
      
          this.setState({
          redirect: true
        })
       /*  redirect to login page now  - this way has issues. because it puts the message in history.location.message. Which is not a regular prop
        I think. and so when I do this it works, but when I go straight to the login page, it gets undefined errors. 
        So I will try the other way, of having a state field that says true or false if I want to redirect. And in the reponse I will set it to true
        Then in my render, if it is true I will put a <Redirect />
       this.props.history.push(
        {
          pathname: '/login',
          state: { message: "Thanks for signing up! Please log in below." }
        }
       )*/
    })
  }




  render() {
    /* If this.state.redirect is true, then render a Redirect to the login page. */
    if(this.state.redirect)
      {
        return (
          <Redirect to="/login" message="Thanks for signing up! Please log in to access your account."/> 
        );
      }

      /* Otherwise render the signup regularly */
    return (  


      <div>
        <NavBar/>
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
