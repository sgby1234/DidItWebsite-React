import React, { Component } from 'react';
import { Button, Form, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import axios from 'axios';
import '../globals.js';

export class NewGoal extends Component {

  constructor(props)
  {
    super(props);
    this.state = {
      name: "",
      days: 0,
      isPublic: false
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }


  handleSubmit(event)
  {
    axios.post("http://localhost:8080/addGoal", 
    {
      goalID: null,
      duration: this.state.days,
      accomplishedDays: 0,
      isPublic: this.state.isPublic,
      description: this.state.name,
      dateCreated: new Date().toISOString().substring(0,10),

    }).then(res =>
      {
       
        //successful, redirect to all goals
        if(res.data)
        {
          this.props.history.push('/goals');
        }
        //display message for unsuccessful erros
        else 
        {
            alert("Could not add that goal. Please check your input")
        }
      })

      if(this.state.isPublic){
         this.addMessage("Started a new goal! " + this.state.days + " days : " + this.state.name)
      }
  }

  addMessage(message) {

    axios.post("http://localhost:8080/message", {
      messageId: undefined,
      messageText: message,
      messageDate: new Date().toISOString().substring(0, 10),
    }).then(res => {
      console.log(res.data)
    })
  }

  handleChange = event =>
  {
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value
     this.setState ({
      [event.target.id]: value,
     })
  }

  validateForm() {
    return this.state.days > 0 
  }
  render() 
  {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h2>Create a new goal here</h2>

          <FormGroup controlId="name">
            <label>Title</label>
            <FormControl
              onChange={this.handleChange}
              autoFocus
              type="text"
              value={this.state.name}
            />
          </FormGroup>

          <FormGroup controlId="days">
          
            <FormLabel>
              Number of days
              </FormLabel>
            <FormControl 
            onChange={this.handleChange}
            type='number'
             value={this.state.days} />
          </FormGroup>

          <Form.Group controlId="isPublic">
            <Form.Check
            onChange={this.handleChange}
            type="checkbox"
             label="My goal should be shared with my friends" value={this.state.isPublic}/>
          </Form.Group>


          <Button
            block
            disabled={!this.validateForm()}
            type="submit"
          >
            Submit
          </Button>
        </form>
      </div>
    )
  }
}
