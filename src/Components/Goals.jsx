import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ListGroup } from 'react-bootstrap'

export class Goals extends Component {
  constructor(props)
  {
    super(props);
    this.state =
    {
      goals: [],
      redirect: false
    };
  }



  render() {
    return (
      <div>
        <h1>Your goals</h1>
        <ListGroup>
          <ListGroup.Item><Link to="/login">Study Chemistry</Link></ListGroup.Item>
          <ListGroup.Item>Hi2</ListGroup.Item>
      </ListGroup>
        <Link to="/NewGoal">Create a new Goal<i className="fas fa-plus"></i></Link>
      </div>
    )
  }
}
