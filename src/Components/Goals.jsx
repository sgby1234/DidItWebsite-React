import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ListGroup } from 'react-bootstrap';
import axios from 'axios';

export class Goals extends Component {
  constructor(props)
  {
    super(props);
    this.state =
    {
      goals: []
    };

  }
  componentDidMount(){
    console.log("in CMD")
    axios.get("http://localhost:8080/getAllGoals").then(res => {
      console.log(res.data)
      this.setState 
      ({
        goals: res.data //ask chaya
       })

     
  });
}


  render() {
    const goals = this.state.goals.map(obj => <ListGroup.Item  ><Link to={{pathname: "/goal", state: { goalid: obj.goalID}}} 
    style={{color: "green"}}>{obj.description}</Link></ListGroup.Item> )
    return (
      <div>
        <h1>Your goals</h1>
        {goals}
        <Link to="/NewGoal">Create a new Goal<i className="fas fa-plus"></i></Link>
       
      </div>
    )
  }
}
/*
<ListGroup>
<ListGroup.Item><Link to="/login">Study Chemistry</Link></ListGroup.Item>
<ListGroup.Item>Hi2</ListGroup.Item>
</ListGroup>*/
