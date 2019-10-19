import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
            <div className="col-md-8 mb-4">
                <div className="card">
                    <div className="card-header d-flex justify-content-between">
                        <h4 className="d-inline">{name}</h4>
                        <i className="fa fa-spinner fa-spin" style={{cursor:"pointer"}}></i>
                    </div>
                    <div className="card-body">
                        <p className="card-text">Soyad: {surname}</p>
                        <p className="card-text">Maas: {salary}</p>
                    </div>
                </div>
            </div>
        )
    }
}

User.propTypes = {
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    salary: PropTypes.string.isRequired
}

// User.defaultProps= {

// }

export default User;