import React, {Component} from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Users from "./components/Users"

class App extends Component{
  state = {
    users:[
      {
        id: 1,
        name: "Idris",
        surname: "Shabanli",
        salary: "5000"
      },
      {
        id: 2,
        name: "Idris2",
        surname: "Shabanli2",
        salary: "4000"
      },
      {
        id: 3,
        name: "Idris3",
        surname: "Shabanli3",
        salary: "6000"
      }
    ]
  };
  render(){
  return (
    <div className="container">
  {/* User App Navbar function-unu icine gedir */}
      <Navbar title="User App"/> 
      <h4 className="header">App Components</h4>
      <Users users= { this.state.users }/>
    </div>
  );
}}

export default App;
