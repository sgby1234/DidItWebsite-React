import React, { Component } from 'react';
import { GoalBox } from './GoalBox'
import axios from 'axios';
import { Link } from 'react-router-dom';

export class Goal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      goalid: -1,
      goalname: "yeah",
      amountCompleted: 0,
      totalAmount: 0,
      isPublic: false,
      start: "",
      areChecked: [],
      boxes: [],
      message: ""
    }


    this.modifyAmountAccomplished = this.modifyAmountAccomplished.bind(this);
    this.addMessage = this.addMessage.bind(this);
    this.halfCompleted = this.halfCompleted.bind(this);

  }

  modifyAmountAccomplished() {
  
    axios.post("http://localhost:8080/updateAmountAccomplished", {
      goalId: this.state.goalid,
      newAmount: this.state.amountCompleted
    }).then((res) => {
      console.log("Got response " + res.data)
    }
    )
    //check if they are now finished: and write out message if they are
    if (this.state.amountCompleted === this.state.totalAmount) {
      this.setState({
        message: "Congratulations " + global.userName + "!! Awesome work!"
      })

      //send message to the database if this goal is public
      if (this.state.isPublic) {
        this.addMessage("DidIt!! " + this.state.totalAmount + " days: " + this.state.goalname)
      }

    }

    //if they are halfway finished send a message to the database
    else if (this.state.isPublic && this.halfCompleted()) {
      this.addMessage("Halfway there! I did " + this.state.amountCompleted + " out of " + this.state.totalAmount + " days : " + this.state.goalname);
    }
  }

  halfCompleted = () => {
    //adjust the total amount if it is odd
    var amount
    if (this.state.totalAmount % 2 === 1) {
      amount = this.state.totalAmount + 1
    }
    else {
      amount = this.state.totalAmount;
    }

    //check if they are halfway through
    if (amount / this.state.amountCompleted === 2) {
      return true;
    }
    else {
      return false;
    }
  }

  addMessage = (message) => {

    axios.post("http://localhost:8080/message", {
      messageId: undefined,
      messageText: message,
      messageDate: new Date().toISOString().substring(0, 10),
    })
  }

  componentDidMount() {
    console.log("in CMD")

    axios.get("http://localhost:8080/getGoal", {
      params:
      {
        goalID: this.props.location.state.goalid,
      }
    }).then(res => {
      this.setState({
        goalid: this.props.location.state.goalid,
        amountCompleted: res.data.accomplishedDays,
        totalAmount: res.data.duration,
        isPublic: res.data.public,
        start: new Date(res.data.dateCreated),
        goalname: res.data.description,
      })

      //add values for true
      for (let i = 0; i < this.state.amountCompleted; i++) {
        this.state.areChecked.push(true);
      }

      //add values for false
      for (let j = 0; j < (this.state.totalAmount - this.state.amountCompleted); j++) {
        this.state.areChecked.push(false);
      }

      //map through the list of true and false, and create goalboxes, with check if true and empty if false
      this.setState({
        boxes: this.state.areChecked.map(item => <GoalBox onClick={this.handleClick}
          addCheckMark={() => {
            //change state, and call a callback to change the back end
            this.setState({ amountCompleted: this.state.amountCompleted + 1 },
              this.modifyAmountAccomplished)



          }}
          removeCheckMark={() => {
            this.setState(
              { amountCompleted: this.state.amountCompleted - 1 },
              this.modifyAmountAccomplished
            )
          }
          }

          checked={item} />)
      })
    });//close .then 
  }//close ComponentDidMount



  render() {
    return (
      <div>
        <Link to="/goals"><i class="fas fa-arrow-left"></i> Back to your goals</Link>
        <h1>{this.state.goalname}</h1>
        {this.state.goalname}
        <h4>{this.state.message}</h4>
        <div className="d-flex flex-row">
          <div>{this.state.boxes}</div>
        </div>


      </div>
    )
  }
}
