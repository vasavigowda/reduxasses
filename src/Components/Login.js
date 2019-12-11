import React, { Component } from 'react';
import {connect} from 'react-redux';
import {username,password} from '../Action/LoginAction';

class Login extends Component {
    render() {
        return (
            <div>
                <label>UserName:</label>
                <input type="text"   name="username" onclick={this.props.username}></input>
                <label>Password:</label>
                <input type="password"  name="password" onclick={this.props.password}></input>
                <button>login</button>
                <button>Register</button>
            </div>
        );
    }
}

    const mapStoreToProps=(state)=>{
    const{username,password}=state.LoginReducer;
    return {username,password};
    }
  
    export default connect(mapStoreToProps,{username,password})(Login);