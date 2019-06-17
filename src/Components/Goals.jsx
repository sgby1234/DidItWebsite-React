import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
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
    axios.get("http://localhost:8080/getAllGoals").then(res => {
      this.setState
        ({
          goals: res.data //ask chaya
        })
    });
  }


  render() {
    if (this.props.isLoggedIn) {
      alert("Logged in on goals page.history: " + this.props.history.location + " loggedin " + this.props.isLoggedIn)
      return <LoggedInPage goals={this.state.goals}/>
    }
    else {
      return <NotLoggedInPage />
    }

  }
}

function LoggedInPage(props) {
  const goals = props.goals;
  const formattedGoals = goals.map(obj => <ListGroup.Item> <Link to={{ pathname: "/goal", state: { goalid: obj.goalID } }}
  style={{ color: "green" }}>{obj.description}</Link></ListGroup.Item>)
  return (

    <div>

      <h1>Your goals</h1>
      <NavLink to="/newGoal">Create a new Goal<i className="fas fa-plus"></i></NavLink>
      {formattedGoals}
    </div>
  )
}

 function NotLoggedInPage(props) {
  return (
    <div> You are not logged in. Click <Link to="/login">here</Link> to log in </div>
  )

}
