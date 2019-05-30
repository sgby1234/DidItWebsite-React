import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Signup } from './Components/Signup.jsx';
import { Welcome } from './Components/Welcome.jsx'
import { PageSideBar } from "./Components/PageSideBar.jsx";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { LoginPage } from './Components/LoginPage';
import { ConnectionTrial } from './ConnectionTrial';
import { Goals } from './Components/Goals';
import { NewGoal } from './Components/NewGoal';
import { NotFoundPage } from './Components/NotFoundPage';
import { GoalBox } from './Components/GoalBox';
import { Goal } from './Components/Goal';
import { Friends } from './Components/Friends.jsx';
import { PossibleFriends} from './Components/PossibleFriends';
import  { NavBar } from './Components/NavBar.jsx';
import { About } from './Components/About.jsx';

import './globals.js';

class App extends Component {
  constructor(props)
  {
    super(props)
   this.state = {
      login: false,
      userName: "",
    }

    this.setLogin = this.setLogin.bind(this);
    this.logout = this.logout.bind(this)
  }

  setLogin = (isLoggedIn, name) => {
      this.setState({
        login: isLoggedIn,
        userName: name,
      })
  }

  logout = () => {
    this.setState({
      login: false,
      userName: ""
    })
  }

  render() {
    return (
      <Router>
        <div>
        <NavBar  loginStatus={this.state.login} logout={this.logout}/>
        <Switch>
          <Route exact path='/' render={(props) => <Welcome {...props} isLoggedIn={this.state.login} />} />
         <Route path='/signup' render={(props) => <Signup {...props} isLoggedIn={this.state.login}/> } />
         <Route path='/login' render={(props) => <LoginPage {...props} isLoggedIn={this.state.login} setLogin={this.setLogin}/> } />
          <Route path='/goals' render={(props) => <Goals isLoggedIn={this.state.login}/>} />
          <Route path='/trial' component={ConnectionTrial} />
          <Route path='/newGoal' render={(props) => <NewGoal isLoggedIn={this.state.login} />} />
          <Route path='/goalBox' component={ GoalBox }/>
          <Route path='/friends' render={(props) => <Friends isLoggedIn={this.state.login} /> }/>
          <Route path='/befriend' render={(props) => <PossibleFriends isLoggedIn={this.state.login} /> }/>
          <Route path='/about' component= { About } />
          <Route path='/goal'  render={(props) => <Goal isLoggedIn={this.state.login}/>} />
          <Route path='' component={ NotFoundPage }/>
        </Switch>
       </div>
      </Router>
    )
  }
}


export default App;