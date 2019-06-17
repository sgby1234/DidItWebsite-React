import React, { Component } from 'react';
import axios from 'axios';

export class NewsFeed extends Component {
  constructor(props) {
    super(props)

    this.state = {
      messages: []
    }
  }



  componentDidMount() {

    axios.get("http://localhost:8080/messages").then(res => {
    
      this.setState
        ({
          messages: res.data //ask chaya
        })
    });

  }

  render() {
    const newsItems = this.state.messages.map(obj =>
      <li className="list-group-item"><div style={{ color: 'b4f99a' }} className="lead">{obj.userName}</div> {"   " + obj.messageText}</li>)

    return (
      <div>
        <h1 className="display-4">Your news feed</h1>
        <p>Check out whats going on</p>
        <hr className="my-4"></hr>
        <ul>{newsItems}</ul>
      </div>

    )
  }
}
