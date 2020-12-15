  
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import Login from './components/Login';
import FriendsList from './components/FriendsList';
import PrivateRoute from './components/PrivateRoute';

function App() {
  
  return (
    <Router>
      <header className='header'>
        <NavLink className='navlink' to='/login'> Login </NavLink>
        <NavLink className='navlink' to='/friendslist'> Friends List </NavLink>
      </header>

        <div>
          <Switch>
            <Route path='/login' component={Login}/>
            <PrivateRoute exact path='/friendsList' component={FriendsList}/>
          </Switch>
        </div>
    </Router>
  );
}

export default App;