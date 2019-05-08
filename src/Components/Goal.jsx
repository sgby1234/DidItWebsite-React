import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { GoalBox } from './GoalBox'

export class Goal extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       header: '',
       goalboxes: '',

    }
  }
  
  render() {
    return (
      <div>
        <GoalBox/>
        <GoalBox/>
        <GoalBox/>
      </div>
    )
  }
}
