import React, { Component } from 'react'

class User extends Component {
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

export default User;