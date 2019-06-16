import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ListGroup } from 'react-bootstrap';
import axios from 'axios';

export class Goals extends Component {
  constructor(props) {
    super(props);
    this.state =
      {
        goals: []
      };
  }

  

  componentDidMount() {
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
    console.log( "props logged in " + this.props.isLoggedIn)
    if (this.props.isLoggedIn) {
      return <LoggedInPage goals={this.state.goals}/>
    }
    else {
      return <NotLoggedInPage />
    }

  }
}



function LoggedInPage(props) {
  const goals = props.goals;
  console.log(goals);
  const formattedGoals = goals.map(obj => <ListGroup.Item> <Link to={{ pathname: "/goal", state: { goalid: obj.goalID } }}
  style={{ color: "green" }}>{obj.description}</Link></ListGroup.Item>)
  return (

    <div>
      <h1>Your goals</h1>
      {formattedGoals}
      <Link to="/NewGoal">Create a new Goal<i className="fas fa-plus"></i></Link>

    </div>
  )
}

 function NotLoggedInPage(props) {
  return (
    <div> You are not logged in. Click <Link to="/login">here</Link> to log in </div>
  )

}
