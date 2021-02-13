import React, { Component } from "react";
import TodoCollection from "./todocollection.js"
import AddTodo from "./AddForm.js"

class Todo extends Component {
    constructor(props) {
      super(props);
      this.state = {
        todos : []
      };
      this.deleteTodo = this.deleteTodo.bind(this);
      this.addTodo = this.addTodo.bind(this);
    }

    addTodo = (todo) => {
        todo.id = this.state.todos.length+1
        let todos = [...this.state.todos, todo];
        this.setState({
            todos : todos
        })
    }

    deleteTodo = (id) => {
        const todos = this.state.todos.filter(todo => {
            return todo.id !== id
        });
        this.setState({
            todos : todos
        })
    }

    render () {
        return (
            <div className='Todo'>
                <h1>ToDo LiSt</h1>
                <TodoCollection todos={this.state.todos} deleteTodo={this.deleteTodo}/>
                <AddTodo addTodo={this.addTodo}/>
            </div>
        )
    }
}

export default Todo