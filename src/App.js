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
import './globals.js';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Welcome} />
          <Route path='/signup' component={Signup} />
          <Route path='/login' component={LoginPage} />
          <Route path='/goals' component={Goals} />
          <Route path='/trial' component={ConnectionTrial} />
          <Route path='/newGoal' component={NewGoal}/>
          <Route path='/goalBox' component={ GoalBox }/>
          <Route path='/goal' component={Goal}/>
          <Route path='' component={ NotFoundPage }/>
        </Switch>
        
      </Router>
    )
  }
}


export default App;