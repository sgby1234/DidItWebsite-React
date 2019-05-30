import React, { Component } from 'react';
import axios from 'axios';

export class ConnectionTrial extends Component {

  constructor()
  {
    super();
    this.state = {
      text: "Hi",
    }
    console.log("Constructing....")
  }

  // try getting data from server when component mounted
  componentDidMount(){
    let url = "http://localhost:8080/";
    axios.get(url).then( response =>
      {
        console.log(response);
        this.setState({text: this.state.text + ' ' + response.data})
      })

  }

  render() {
    return (
      <div>
          <p>Welcome to the trial page</p>
          <p>{this.state.text}</p>
      </div>
    )
  
  }
}
