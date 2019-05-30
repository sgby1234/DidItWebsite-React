import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export class Friends extends Component {
    constructor(props) {
        super(props)
        this.state = { friends: [] }

    }
    componentDidMount() {
        console.log("in CMD")
        axios.get("http://localhost:8080/friends").then(res => {
            console.log(res.data)
            this.setState
                ({
                    friends: res.data
                })
               
        })
    }
    render() {
        const friendElements = this.state.friends.map(friend => <li>{friend.userName}</li>)
        return (
            <div>
                <div className = "display-4">Your friends</div>
                <div className = "lead">Looking for more friends? Click <Link to="/befriend">here</Link></div>
                <hr classNme="my-4"></hr>
                {friendElements}
            </div>
        )
    }
}
