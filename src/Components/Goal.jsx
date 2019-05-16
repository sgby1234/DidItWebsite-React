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
       totalAmount:4,
       isPublic: false,
       start: "",
       areChecked: [],
       boxes: []
    }


    this.handleClick = this.handleClick.bind(this);

  }

  modifyAmountAccomplished(){
    console.log("will send spring request to change with amount " +  this.state.amountCompleted);
    axios.post("http://localhost:8080/updateAmountAccomplished", {
      goalId: this.state.goalid,
      newAmount: this.state.amountCompleted
    }).then((res) => {
      console.log("Got response " + res.data)
    }
    )
  }

  componentDidMount(){
    console.log("in CMD")
    axios.get("http://localhost:8080/getGoal",  {
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

      
      for(let i = 0; i < this.state.amountCompleted; i++)
      {
          this.state.areChecked.push(true);
      }
   
      for(let j = 0; j < (this.state.totalAmount - this.state.amountCompleted); j++)
      {
           this.state.areChecked.push(false);
      }
      
    this.setState ({
     boxes: this.state.areChecked.map(item => <GoalBox onClick={this.handleClick} 
      addCheckMark={() => 
      {
        this.setState({ amountCompleted: this.state.amountCompleted + 1},
          this.modifyAmountAccomplished)
        
        
    }}
    removeCheckMark={() => 
      {
        this.setState(
          { amountCompleted: this.state.amountCompleted - 1},
          this.modifyAmountAccomplished
          )
      }
    }
    
    checked={item}/>)
    })
  });//close .then 
}//close ComponentDidMount


handleClick (e)
{
  console.log("handling the click")
  alert("HI")
}



  render() {
    return (
      <div>
        <h1>{this.state.goalname}</h1>
        {this.state.goalname}
        <div className="d-flex flex-row">
          <div>{this.state.boxes}</div>
        </div>

              
      </div>
    )
  }
}
