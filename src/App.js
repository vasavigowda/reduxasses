import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './Components/Login';
import Register from './Components/Register';
import Users from './Components/Users';

import PostForm from './Components/PostForm';
import AllPost from './Components/AllPost';

function App() {
  return (
    <div className="App">
            <Router>
        <switch>
        <Route exact path='/login' component={Login}></Route> 
        <Route exact path='/' component={Register}></Route> 
        <Route exact path='/app' component={Users}></Route> 
        <Route exact path='/Allpost' component={PostForm}></Route>
        <Route exact path='/Allpost' component={AllPost}></Route>
        </switch>
      </Router>
     
    </div>
  );
}

export default App;
