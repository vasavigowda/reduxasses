import React, { Component } from 'react';

class Register extends Component {
    render() {
        return (
            <div>
                <label>FirstName:</label>
                <input type="text"   name="username" onclick={this.props.username}></input>
                <label>LastName:</label>
                <input type="password"  name="password" onclick={this.props.password}></input>
                <button>login</button>
                <button>Register</button>
            </div>
        );
    }
}

export default Register;