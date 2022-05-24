import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from './components/navBar';
import Login from './components/login';
import FriendsList from './components/friends';


function App() {
  return (
    <div className="App">
      <NavBar/>
      
      <Switch>
        <Route path="/friends" component={FriendsList}/>
        <Route path="/login" component={Login}/>
        <Route path="/" component={Login}/>
      </Switch>
    </div>
  );
}

export default App;
