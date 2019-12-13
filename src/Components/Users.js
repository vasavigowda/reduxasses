import React, { Component } from 'react';


class Users extends Component {
 
      constructor(props){
        super(props);
        this.state = {
            todos: [],
            todo: ''
        }
        this.changeTodo = this.changeTodo.bind(this);
        this.addTodo = this.addTodo.bind(this);
       
    }

    changeTodo(event){
        this.setState({
            todo: event.target.value
        })
    }

    addTodo(){
        let { todo, todos } = this.state;
        this.setState({
            todo: '',
            todos: [...todos, todo]
        })
    }

    removeTodo(index){
        let { todos } = this.state;
        todos.splice(index, 1);
        this.setState({
            todos: todos
        })
      }
    render() {
      let { todo, todos } = this.state;
        return (
            <div>
             
        <label>UserName:</label>
        <input value={todo} onChange={this.changeTodo}/><br/>
        <button onClick={this.addTodo}>Add Todo</button>
       
            {
             todos.map((todo, index)=>{
                   return <h1 onClick={this.addTodo.bind(undefined, index)} key={index}>{todo}</h1>
                })
            }  
             
        </div>
    )
  }
}
            
      
export default Users;