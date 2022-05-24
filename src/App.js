import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import NavBar from './components/navBar';
import Login from './components/login';

function App() {
  return (
    <div className="App">
      <NavBar/>
      
      <Login/>
    </div>
  );
}

export default App;
