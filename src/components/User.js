import React, { Component } from 'react'
import PropTypes from 'prop-types'

class User extends Component {
    static defaultProps = {
        name: 'Melumat yoxdur',
        surname: 'Melumat yoxdur',
        salary: 'Melumat yoxdur'
    }
    render() {
        // Destructing
        const {name, surname, salary} = this.props
        return (
            <div>
                <ul>
                <li>Ad: {name}</li>
                <li>Soyad: {surname}</li>
                <li>Maas: {salary}</li>
                </ul>
            </div>
        )
    }
}

User.propTypes = {
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    salary: PropTypes.number.isRequired
}

// User.defaultProps= {

// }

export default User;