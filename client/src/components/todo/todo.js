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
        console.log(todo)
        console.log(this.state.todos)
        if (this.state.todos.length === 0){
            let todos = [...this.state.todos, todo];
            console.log(todos)
            this.setState({
                todos : todos
            })
        }

        this.state.todos.map(stateTodo => {

        if((todo.startTime > stateTodo.startTime && todo.startTime < stateTodo.endTime) ||
            (todo.startTime <= stateTodo.startTime && todo.endTime >= stateTodo.startTime) ||
            (todo.endTime > stateTodo.startTime && todo.endTime < stateTodo.endTime) ||
            (todo.startTime < stateTodo.endTime && todo.endTime >= stateTodo.endTime)){
            alert('check your schedule')
            return -1;
        } else {
            let todos = [...this.state.todos, todo];
            this.setState({
                todos : todos
            })
            console.log(this.state.todos)
        }})
    }

    componentDidMount () {
        this.setCurrentState();
    }

    setCurrentState() {
        let todos = [...this.state.todos];
        this.setState({
            todos : todos
        })
        console.log(this.state.todos.length)
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
                <TodoCollection todos={this.state.todos} />
                <AddTodo addTodo={this.addTodo}/>
            </div>
        )
    }
}

export default Todo