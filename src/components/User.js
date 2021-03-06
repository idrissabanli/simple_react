import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UserConsumer from '../context';
import axios from 'axios';
import { Link } from 'react-router-dom'

class User extends Component {
    state = {
        isVisible: true,
    }
    static defaultProps = {
        name: 'Melumat yoxdur',
        surname: 'Melumat yoxdur',
        salary: 'Melumat yoxdur'
    }
    componentWillUnmount() {
        console.log("componentWillUnmount");
    }
    

    onClickEvent = (e) =>{
       // Change isVisible state 
       this.setState({
           isVisible: !this.state.isVisible, 
       });
    };
    onDeleteUser = async (dispatch, e) => {
        const {id} = this.props;
        // delete request 
        axios.delete(`http://localhost:3004/users/${id}`)
        dispatch({type: "DELETE_USER", payload:id})
    }

    // constructor(props){
    //     super(props)
    //     this.onClickEvent = this.onClickEvent.bind(this);
    // }

    // constructor(props){
    //     super(props)
    //     this.state = {
    //         isVisible: true,
    //     }
    // }
    render() {
        // Destructing
        const {id, name, surname, salary} = this.props;
        const {isVisible} = this.state;
        return (
            <UserConsumer>
            {
                value => {
                    const {dispatch} = value;
                    return (
                        <div className="col-md-8 mb-4">
                            <div className="card" style = { isVisible? {  backgroundColor : "white"}:{backgroundColor : "#62848d", color: "white"} }>
                                <div className="card-header d-flex justify-content-between">
                                    <h4 className="d-inline" onClick={this.onClickEvent}>{name}</h4>
                                    <i onClick={this.onDeleteUser.bind(this, dispatch)} className="fa fa-spinner fa-spin" style={{cursor:"pointer"}}></i>
                                </div>
                                {
                                    isVisible ? <div className="card-body">
                                    <p className="card-text">Soyad: {surname}</p>
                                    <p className="card-text">Maas: {salary}</p>
                                    <Link to={`edit/${id}`} className="btn btn-dark btn-block" >Update User</Link>
                                    </div>: null
                                }
                                
                            </div>
                        </div>
                    )
                    }
                }
            </UserConsumer>
        )
    }
}

User.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    salary: PropTypes.string.isRequired,
}

// User.defaultProps= {

// }

export default User;