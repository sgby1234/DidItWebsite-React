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

        console.log("in CMD")
        axios.get("http://localhost:8080/messages").then(res => {
          console.log(res.data)
          this.setState 
          ({
              messages: res.data //ask chaya
           })
      });
        
    }
    
    render() {
        const newsItems = this.state.messages.map(obj =>  <li class="list-group-item">{obj.MessageText}</li>)
      
        return (
          <div>
            <h1 class="display-4">Your news feed</h1>
            <p>Check out whats going on</p>
            <hr class="my-4"></hr>
            <ul>{newsItems}</ul>
           </div>
       
        )
    }
}
