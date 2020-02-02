import React, {Component} from 'react';
import './App.css';
import Navbar from './layout/Navbar';
import Users from "./components/Users";
import AddUser from './forms/AddUser';
import UpdateUser from './forms/UpdateUser';
import NotFound from './pages/NotFound';
import Contribute from './pages/Contribute';
// import Test from './components/Test'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

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
    <Navbar title="User App"/> 
    
    <Switch>
      <Route exact path= "/" component={Users}/>
      <Route exact path= "/add" component={AddUser}/>
      <Route exact path= "/edit/:id" component={UpdateUser}/>
      <Route exact path= "/contribute" component={Contribute}/>
      <Route component={NotFound}/>

    </Switch>
    
      
    </div>
    </Router>
  );
}}

export default App;
