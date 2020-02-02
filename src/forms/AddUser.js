import React, { Component } from 'react'
import posed from 'react-pose';
import UserConsumer from '../context';
import axios from 'axios';

const Box = posed.div({
    visible:{
        opacity: 1,
        applyAtStart : {
            display: "block"
        }
    },
    hidden:{
        opacity: 0,
        applyAtEnd : {
            display: "none"
        }
    }
});

export default class AddUser extends Component {

    state = {
        visible: false,
        name: "",
        surname: "",
        salary: "", 
    }
    changeVisibility  = (e) => {
        this.setState({
            visible: !this.state.visible,
        })
    }
    
    addUser = async (dispatch, e) =>{
        e.preventDefault();
        const {name, surname, salary} = this.state;

        const newUser = {
            name,
            salary,
            surname,
        }
        /* if propery and variable name is same
        name --> name:name,
        salary --> salary:salary,
        surname --> surname:surname,
        */

        // post request

        const response = await axios.post('http://localhost:3004/users', newUser)

       dispatch({type:"ADD_USER", payload: response.data});
       this.props.history.push('/');
       this.setState({
           name: "",
           surname: "",
           salary: "",
       })
    }
    changeInput = (e) => {
        this.setState({
            // I = input name property,  II = input value
            [e.target.name]: e.target.value
        })
    }

    render() {
        const {visible, name, surname, salary} = this.state;
        return (
            <UserConsumer>
            {
                value => {
                    const {dispatch} = value;
                    return (<div className="col-md-8 mb-4">
                    <button onClick={this.changeVisibility } className="btn btn-dark btn-block mb-2">{ visible ? "Hide Form": "Show Form"}</button>
                    <Box pose = { visible ? "visible": "hidden"}>
                    <div className="card" >
                        <div className="card-header">
                            <h4>Add User Form</h4>
                        </div>
                        <div className="card-body">
                            <form onSubmit={this.addUser.bind(this, dispatch)}>
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input className="form-control" name="name" id="name" type="text" value ={name} placeholder="Enter name"
                                    onChange ={ this.changeInput}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="surname">Surname</label>
                                    <input className="form-control" name="surname" id="surname"  value ={surname} type="text" placeholder="Enter surname"
                                    onChange ={ this.changeInput}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="salary">Salary</label>
                                    <input className="form-control" name="salary" id="salary" type="text"  value ={salary} placeholder="Enter salary"
                                    onChange ={ this.changeInput}/>
                                </div>
                                <button className="btn btn-danger btn-block" type="submit">Save</button>
                            </form>
                        </div>
                    </div>
                    </Box>
                </div>)
                }
            }
            
            </UserConsumer>
        )
    }
}
