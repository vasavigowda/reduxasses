import React, { Component } from 'react';
import {connect} from 'react-redux';
import {handleChange,check} from '../Action/LoginAction';
import BrowserHistory from "./Utils/BrowserHistory";


class Page1 extends Component {
   
      onHandleClick(){
        BrowserHistory.push("/Register");
        }
render() {
return (
<div>
<input type="text" name='number1' placeholder="First operand" onChange={this.props.handleChange}/><br/>
<select name='operator' onChange={this.props.handleChange}> 
            <option>oprator</option>
            <option >+</option>
            <option>-</option>
            <option>*</option>
            <option>/</option>
          </select>
          <input type="text" placeholder="Second operand" name='number2' onChange={this.props.handleChange}/>
            <input type="text" placeholder="Result" name='result' onChange={this.props.handleChange}/>=  
            <button onClick={this.props.check}>Check</button>
            <h1>{this.props.number1}</h1>
            <h1>{this.props.operator}</h1>
            <h1>{this.props.number2}</h1>
            <h1>{this.props.result}</h1>  
            <h1>{this.props.msg}</h1> 
<button  onClick={this.onHandleClick} >Login</button>

</div>
);
}
}

const mapStoreToProps=(state)=>{
const{number1,number2,operator,result,msg}=state.LoginReducer;
return {number1,number2,operator,result,msg};
}

export default connect(mapStoreToProps,{handleChange,check})(Page1);