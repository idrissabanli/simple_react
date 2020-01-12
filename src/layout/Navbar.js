import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function Navbar(props){
    return (
        <div>
            <h3>{ props.title }</h3>

            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/add">Add User</Link></li>
                <li><Link to="/contribute">Project</Link></li>
            
            </ul>
            <hr/>
        </div>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired, //type must be string and must to send title when using Navbar
}

Navbar.defaultProps = {
     title: "Default Prop"
}

export default Navbar
