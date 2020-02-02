import React, { Component } from 'react'
import axios from 'axios';

const UserContext = React.createContext();
// Provider, Consumer

const reducer = (state, action) => {
    switch(action.type){
        case "DELETE_USER": 
            return {
                ...state,
                users: state.users.filter(user=>action.payload !== user.id),
            };
        case "UPDATE_USER": 
            return {
                ...state,
                users: state.users.map(user => user.id === action.payload.id ? action.payload : user)
            };
        case "ADD_USER": 
            return {
                ...state,
                users: [...state.users, action.payload]
            };  
        default:
            return state;
    }
}

export class UserProvider extends Component {
    state = {
        users:[],
        dispatch : action => {
            this.setState(state => reducer(state, action))
        },
      };
    async componentDidMount() {
        const response = await axios.get("http://localhost:3004/users");
        console.log(response);
        this.setState({
            users: response.data
        });
    }
    
    render() {
        return (
            <UserContext.Provider value = {this.state}>
                {this.props.children} {/* APP.js */}
            </UserContext.Provider>
        )
    }
}

const UserConsumer = UserContext.Consumer;

export default UserConsumer;