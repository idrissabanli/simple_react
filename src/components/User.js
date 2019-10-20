import React, { Component } from 'react';
import PropTypes from 'prop-types';

class User extends Component {
    state = {
        isVisible: true,
    }
    static defaultProps = {
        name: 'Melumat yoxdur',
        surname: 'Melumat yoxdur',
        salary: 'Melumat yoxdur'
    }

    onClickEvent(e){
        console.log(e.target);
        console.log('test');
        console.log('binded this');
        console.log(this);
    }

    // constructor(props){
    //     super(props)
    //     this.state = {
    //         isVisible: true,
    //     }
    // }
    render() {
        // Destructing
        const {name, surname, salary} = this.props;
        const {isVisible} = this.state;
        return (
            <div className="col-md-8 mb-4">
                <div className="card">
                    <div className="card-header d-flex justify-content-between">
                        <h4 className="d-inline" onClick={this.onClickEvent.bind(this)}>{name}</h4>
                        <i className="fa fa-spinner fa-spin" style={{cursor:"pointer"}}></i>
                    </div>
                    {
                        isVisible ? <div className="card-body">
                        <p className="card-text">Soyad: {surname}</p>
                        <p className="card-text">Maas: {salary}</p>
                       
                        </div>: null
                    }
                    
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