import React, {Component} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Users from "./components/Users";
import AddUser from './components/AddUser';
import NotFound from './components/NotFound';
// import Test from './components/Test'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


const Home =  () => {
  return <h3>Home Page</h3>
}

const About =  () => {
  return <h3>About Page</h3>
}


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
      <Route component={NotFound}/>

    </Switch>
    
      
    </div>
    </Router>
  );
}}

export default App;
