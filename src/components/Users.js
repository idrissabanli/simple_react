import React, { Component } from 'react';
import User from './User';
import UserConsumer from "../context";

class Users extends Component {
    render() {

        return (
            <UserConsumer>
            {
                value => { // value = this.state
                    const {users} = value;
                    return (
                        <div>
                        {
                            users.map( user => {
                                return (
                                    <User 
                                    key = {user.id} //vermeliyik ki, unique etsin companentleri
                                    id={user.id} 
                                    name={user.name} 
                                    surname= {user.surname} 
                                    salary={user.salary}
                                    />
                                );
                            })
                        }
                            
                        </div>
                    )
                }
            }
            </UserConsumer>
        )
    }
}

export default Users;