import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function Navbar({title}){
    return (
        <nav className="navbar-nav navbar-expand-lg navbar-dark bg-dark mb-4">
        <a href="/" className="navbar-brand">{title}</a>
        <ul className="navbar-nav ml-auto">
             <li className="nav-item active">
                 <Link to="/" className="nav-link">Home</Link>
             </li>
             <li className="nav-item active">
                 <Link to="/add" className="nav-link">Add User</Link>
             </li>
             <li className="nav-item active">
                 <Link to="/contribute" className="nav-link">contribute</Link>
             </li>
             
        </ul>
        
        </nav>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired, //type must be string and must to send title when using Navbar
}

Navbar.defaultProps = {
     title: "Default Prop"
}

export default Navbar
