import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { GoalBox } from './GoalBox'
import axios from 'axios';

export class Goal extends Component {
  constructor(props) {
    super(props)

    this.state = {
      goalid: this.props.location.state.goalid,
      goalname: "yeah",
      amountCompleted: 0,
      totalAmount: 0,
      isPublic: false,
      start: "",
      areChecked: [],
      boxes: [],
      message: ""
    }


    this.handleClick = this.handleClick.bind(this);

  }

  modifyAmountAccomplished() {
    console.log("will send spring request to change with amount " + this.state.amountCompleted);
    axios.post("http://localhost:8080/updateAmountAccomplished", {
      goalId: this.state.goalid,
      newAmount: this.state.amountCompleted
    }).then((res) => {
      console.log("Got response " + res.data)
    }
    )
    //check if they are now finished: and write out message if they are
    if (this.state.amountCompleted == this.state.totalAmount) {
      this.setState({
        message: "Congratulations " + global.userName + "!! Awesome work!"
      })

      //send message to the database
      this.addMessage("DidIt!! " + this.state.totalAmount + " days: " + this.state.goalname)
    }

    //if they are halfway finished send a message to the database
    else if (this.halfcompleted()) {
      this.addMessage("Halfway there! I did " + this.state.amountCompleted + " out of " + this.state.totalAmount + " days : " + this.state.goalname);
    }
  }

  halfcompleted() {
    //adjust the total amount if it is odd
    if (this.state.totalAmount % 2 == 1) {
      var amount = this.state.totalAmount + 1
    }
    else {
      var amount = this.state.totalAmount;
    }

    //check if they are halfway through
    if (amount / this.state.amountCompleted == 2) {
      return true;
    }
    else {
      return false;
    }
  }

  addMessage(message) {

    axios.post("localhost:8080/message", {
      messageId: undefined,
      messageText: message,
      messageDate: new Date().toISOString().substring(0, 10),
    }).then(res => {
      console.log(res.data)
    })
  }

  componentDidMount() {
    console.log("in CMD")
    axios.get("http://localhost:8080/getGoal", {
      params:
      {
        goalID: this.state.goalid
      }
    }).then(res => {
      console.log(res.data)
      this.setState
        ({
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
