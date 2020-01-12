import React, {Component} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Users from "./components/Users";
import AddUser from './components/AddUser';
// import Test from './components/Test'

class App extends Component{

  render(){
  return (
    <div className="container">
  {/* User App Navbar function-unu icine gedir */}
    {/*  <Test test="deneme"/> */}
      <Navbar title="User App"/> 
      <h4 className="header">App Components</h4>
      <AddUser/>
      <hr/>
      <Users/>
    </div>
  );
}}

export default App;
