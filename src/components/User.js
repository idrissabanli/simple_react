import React, { Component } from 'react'

class User extends Component {
    render() {
        return (
            <div>
                <ul>
                <li>Ad: {this.props.name}</li>
                <li>Soyad: {this.props.surname}</li>
                <li>Maas: {this.props.salary}</li>
                </ul>
            </div>
        )
    }
}

export default User;