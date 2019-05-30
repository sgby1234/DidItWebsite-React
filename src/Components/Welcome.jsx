import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {NewsFeed} from './NewsFeed.jsx';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

export class Welcome extends Component {

  render() {
    let page;
    const loggedIn = this.props.isLoggedIn;
    if(loggedIn){
     page =  <LoggedInPage />;
    }
    else{
      page = <NotLoggedInPage/>;
    }
    return (
      <div>
      {page}
      </div>
    )
  }
}

function NotLoggedInPage(props) {
  return (
    <div>
      <h2>Hey there! Welcome to DidIt. A place where you can track your goals and their progress</h2>
      <h3>Already a member?</h3>
      <p> Well then, waste no time. You've got goals to complete! <Link to="/login">Log in here </Link></p>

      <h3>Not a member yet?</h3>
      <p>You've come to the right place. Didit helps you stay on top of your goals. It helps you accomplish and stick to them using positive peer pressure</p>
      <Link to="/signup" >Sign up here</Link>



    </div>
  );
}

function LoggedInPage(props){
  return (
    <div>
       <NewsFeed />
    </div>

  )
}
