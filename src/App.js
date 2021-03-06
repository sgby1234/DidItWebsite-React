import React, { Component } from 'react';
import './App.css';
import { Signup } from './Components/Signup.jsx';
import { Welcome } from './Components/Welcome.jsx'
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

  logout(){
    
    this.setState({
      login: false,
      userName: ""
    })
    this.props.history.replace('/');
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
          <Route path='/goals' render={(props) => <Goals  {...props} isLoggedIn={this.state.login}/>} />
          <Route path='/newGoal' render={(props) => <NewGoal {...props} isLoggedIn={this.state.login} />} />
          <Route path='/goalBox' component={ GoalBox }/>
          <Route path='/friends' render={(props) => <Friends  {...props} isLoggedIn={this.state.login} /> }/>
          <Route path='/befriend' render={(props) => <PossibleFriends {...props} isLoggedIn={this.state.login} /> }/>
          <Route path='/about' render={(props) => <About {...props} isLoggedIn={this.state.login} /> } />
          <Route path='/goal'  render={(props) => <Goal  {...props} isLoggedIn={this.state.login}/>} />
          <Route path='' component={ NotFoundPage }/>
        </Switch>
       </div>
      </Router>

    )
  }
}


export default App;