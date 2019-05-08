import React, { Component } from 'react';
import { Button, Form, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import axios from 'axios';
import '../globals.js';

export class NewGoal extends Component {
  render() {
    return (
      <div>
        <form >
        <h2>Create a new goal here</h2>
          <FormGroup >
           <label>Title</label>
            <FormControl
              autoFocus
              type="text"
            />
          </FormGroup>
          <FormGroup>
            <FormLabel>
              Number of days
              </FormLabel>
            <FormControl type='number'/>
            </FormGroup>
         
          </form>
      </div>
    )
  }
}
