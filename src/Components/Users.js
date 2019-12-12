import React, { Component } from 'react';

const initialState = {
    name: "",
    password: "",
    nameError: "",
    passwordError: ""
  };
class Users extends Component {
    state = initialState;
    handleChange = event => {
        const isCheckbox = event.target.type === "checkbox";
        this.setState({
          [event.target.name]: isCheckbox
            ? event.target.checked
            : event.target.value
        });
      };
      add_data =event=>{
          const name=
      }
    render() {
        return (
            <div>
                <div>
          <label>UserName :</label><br/>
          <input name="name" placeholder="name" value={this.state.name} onChange={this.handleChange} id="users"/>
          <div className="error" > {this.state.nameError}</div><br></br>
        </div>
        <div>
        <label>Password :</label><br/>
          <input type="password" name="password" placeholder="password" value={this.state.password} onChange={this.handleChange} id="passwords"/>
          <div className="error">{this.state.passwordError}</div><br></br>
        </div>
        <div><button type="submit" onClick={this.add_data}>Add newUser</button></div> 
            </div>
        );
    }
}

export default Users;