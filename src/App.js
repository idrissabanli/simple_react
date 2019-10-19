import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import User from "./components/User"

function App() {
  return (
    <div className="container">
  {/* User App Navbar function-unu icine gedir */}
      <Navbar title="User App"/> 
      <h4 className="header">App Components</h4>
      <User name="Idris" surname="Shabanli" salary="5000"/>
      <User name="Kenan" surname="Seyidov"/>
    </div>
  );
}

export default App;
