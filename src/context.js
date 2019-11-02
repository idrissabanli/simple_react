import React, { Component } from 'react'

const UserContext = React.createContext();
// Provider, Consumer

export class UserProvider extends Component {
    state = {
        users:[
          {
            id: 1,
            name: "Idris",
            surname: "Shabanli",
            salary: "5000"
          },
          {
            id: 2,
            name: "Idris2",
            surname: "Shabanli2",
            salary: "4000"
          },
          {
            id: 3,
            name: "Idris3",
            surname: "Shabanli3",
            salary: "6000"
          }
        ]
      };
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