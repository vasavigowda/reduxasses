import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './Components/Login';

function App() {
  return (
    <div className="App">
            <Router>
        <switch>
        <Route exact path='/' component={Login}></Route> 
        

        </switch>
      </Router>
    </div>
  );
}

export default App;
