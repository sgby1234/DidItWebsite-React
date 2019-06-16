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
            this.setState({
                friends: res.data
            })

        })
    }

    render() {
        if (this.props.isLoggedIn) {
            return (<LoggedInPage friends={this.state.friends} />)
        }
        else {
            return (<NotLoggedInPage />)
        }
    }
}

function LoggedInPage(props) {
    const friendElements = props.friends.map(friend => <li className="list-group-item">{friend.userName}</li>)
    return (
        <div>
            <div className="display-4">Your friends</div>
            <div className="lead">Looking for more friends? Click <Link to="/befriend">here</Link></div>
            <hr classNme="my-4"></hr>
            {friendElements}
        </div>
    )
}

function NotLoggedInPage(props) {
    return (
        <div> You are not logged in. Click <Link to="/login">here</Link> to log in </div>
    )
}
