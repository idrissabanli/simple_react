import React, {Component} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Users from "./components/Users";
import AddUser from './components/AddUser';
// import Test from './components/Test'
import {BrowserRouter as Router, Route} from 'react-router-dom';

class App extends Component{
  // <Navbar title="User App"/> 
  //     <h4 className="header">App Components</h4>
  //     <AddUser/>
  //     <hr/>
  //     <Users/>
  render(){
  return (
    <Router>
    <div className="container">
  {/* User App Navbar function-unu icine gedir */}
    {/*  <Test test="deneme"/> */}
    <Route exact path= "/" render = {
      () => {
        return <h3>Home Page</h3>
      }
      
    }/>

    <Route path= "/about" render = {
      () => {
        return <h3>About Page</h3>
      }
      
    }/>
      
    </div>
    </Router>
  );
}}

export default App;
