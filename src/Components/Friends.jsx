import React, { Component } from 'react'
import NavBar from './NavBar.jsx'
import axios from 'axios';

export class Friends extends Component {

    constructor(props) {
        super(props)
        this.state = { friends: [] }

    }
    componentDidMount() {
        console.log("in CMD")
        axios.get("http://localhost:8080/viewFriends").then(res => {
            console.log(res.data)
            this.setState
                ({
                    friends: res.data.map(item => <li className="list-group-item" key={item.userID.toString()} mykey={item.userID.toString()}>{item.userName}
                        <button type="button" value={item.userID} className="btn btn-warning float-right"
                            onClick={() => this.handleClick(item.userID)}>Befriend</button> </li>)
                })
               
                console.log(this.state.friends.map( (e) => "key: " + e.props.mykey + " value " + e.value))
        })

       
    }

    handleClick = (idNum) => {
       
        axios.post("http://localhost:8080/addFriend",
            {
                id: idNum
            }).then(res => {
                
                //remove this friend from list
                this.removePossibleFriend(idNum)
                //send email ¯\_(ツ)_/¯  
            }
            )
    }

    removePossibleFriend(idNum){
       
        let modifiedFriends = this.state.friends.filter(x=> x.props.mykey != idNum);
        this.setState({
            friends: modifiedFriends
        })

    }

    render() {
        return (
            <div>
                <NavBar />
                <h4 className="text-center">Befriend a user to have your accomplishments shared with them.
                     Your new friend can then choose to befriend you back:</h4>
                <ul className="list-group">
                    {this.state.friends}
                </ul>

            </div>
        )
    }
}

export default Friends
