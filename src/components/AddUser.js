import React, { Component } from 'react'
import posed from 'react-pose';


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
    changeName = (e) =>{
        this.setState({
            name: e.target.value
        });
    }
    changeSurname = (e) =>{
        this.setState({
            surname: e.target.value
        });
    }
    changeSalary = (e) =>{
        this.setState({
            salary: e.target.value
        });
    }
    render() {
        const {visible, name, surname, salary} = this.state;
        return (
            <div className="col-md-8 mb-4">
                <button onClick={this.changeVisibility } className="btn btn-dark btn-block mb-2">{ visible ? "Hide Form": "Show Form"}</button>
                <Box pose = { visible ? "visible": "hidden"}>
                <div className="card" >
                    <div className="card-header">
                        <h4>Add User Form</h4>
                    </div>
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input className="form-control" name="name" id="name" type="text" value ={name} placeholder="Enter name"
                                onChange ={ this.changeName}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="surname">Surname</label>
                                <input className="form-control" name="surname" id="surname"  value ={surname} type="text" placeholder="Enter surname"
                                onChange ={ this.changeSurname}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="salary">Salary</label>
                                <input className="form-control" name="salary" id="salary" type="text"  value ={salary} placeholder="Enter salary"
                                onChange ={ this.changeSalary}/>
                            </div>
                            <button className="btn btn-danger btn-block" type="submit">Save</button>
                        </form>
                    </div>
                </div>
                </Box>
            </div>
        )
    }
}
