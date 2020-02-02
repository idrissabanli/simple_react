import React, { Component } from 'react'
import UserConsumer from '../context';
import axios from 'axios';


export default class UpdateUser extends Component {

    state = {
        name: "",
        surname: "",
        salary: "", 
    }
    
    updateUser = async (dispatch, e) =>{
        e.preventDefault();
        const {name, surname, salary} = this.state;

        const updateUser = {
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

        const {id} = this.props.match.params;

        const response = await axios.put(`http://localhost:3004/users/${id}`, updateUser)

       dispatch({type:"UPDATE_USER", payload: response.data})
       this.setState({
           name: "",
           surname: "",
           salary: "",
       });
       this.props.history.push('/');
    }
    changeInput = (e) => {
        this.setState({
            // I = input name property,  II = input value
            [e.target.name]: e.target.value
        })
    }

    componentDidMount = async () =>{
        const {id} = this.props.match.params;
        const response = await axios.get(`http://localhost:3004/users/${id}`)
        const {name, surname, salary} = response.data;
        this.setState({
            name, 
            surname,
            salary,
        })
    }

    

    render() {
        const {name, surname, salary} = this.state;
        return (
            <UserConsumer>
            {
                value => {
                    const {dispatch} = value;
                    return (<div className="col-md-8 mb-4">
                    <div className="card" >
                        <div className="card-header">
                            <h4>Add User Form</h4>
                        </div>
                        <div className="card-body">
                            <form onSubmit={this.updateUser.bind(this, dispatch)}>
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
                
                </div>)
                }
            }
            
            </UserConsumer>
        )
    }
}
