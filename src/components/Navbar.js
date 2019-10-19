import React from 'react'
import PropTypes from 'prop-types'

function Navbar(props){
    return (
        <div>
            <h3>{ props.title }</h3>
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
