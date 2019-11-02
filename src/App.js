import React, {Component} from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Users from "./components/Users"

class App extends Component{

  render(){
  return (
    <div className="container">
  {/* User App Navbar function-unu icine gedir */}
      <Navbar title="User App"/> 
      <h4 className="header">App Components</h4>
      <Users/>
    </div>
  );
}}

export default App;
