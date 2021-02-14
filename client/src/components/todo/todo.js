import React, { Component } from "react";
import TodoCollection from "./todocollection.js"
import AddTodo from "./AddForm.js"
import moment from 'moment';
import StudyTimeline from "../../components/timeline/ViewTimeline.js";
import axios from 'axios';

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
        console.log(this.state.todos, todo)
        todo.st = Number(todo.startTime.slice(0,2) + todo.startTime.slice(3))
        todo.et = Number(todo.endTime.slice(0,2) + todo.endTime.slice(3))
        // this.state.todos.map(stateTodo => {
        //     if((todo.startTime > stateTodo.startTime && todo.startTime < stateTodo.endTime) ||
        //         (todo.startTime <= stateTodo.startTime && todo.endTime >= stateTodo.startTime) ||
        //         (todo.endTime > stateTodo.startTime && todo.endTime < stateTodo.endTime) ||
        //         (todo.startTime < stateTodo.endTime && todo.endTime >= stateTodo.endTime)){
        //         alert('check your schedule')
        //         return -1;
        //     }
        //     return 1       
        // });

        for (let stateTodo of this.state.todos) {
            if((todo.st > stateTodo.st && todo.st < stateTodo.et) ||
                (todo.st <= stateTodo.st && todo.et >= stateTodo.st) ||
                (todo.et > stateTodo.st && todo.et < stateTodo.et) ||
                (todo.st < stateTodo.et && todo.et >= stateTodo.et))
                {
                    alert('check your schedule!');
                    return
                }
        }

        axios
        .post("https://localhost:4000/schedules/addSchedule",
        {          
        title: todo.title,
        startTime: todo.startTime,
        endTime: todo.endTime,
        date: todo.date, 
        userEmail: this.props.userInfo.userEmail
        },
        {
          withCredentials: true
        })
        .then((res)=>{
          console.log(res);
        })
        
        const newTodo = {
            id: this.state.todos.length + 1,
            group: 1,
            title: todo.title,
            start_time: moment(`${todo.date} ${todo.startTime}`),
            end_time: moment(`${todo.date} ${todo.endTime}`),
            canMove: false,
            date: todo.date,
            st: Number(todo.startTime.slice(0,2) + todo.startTime.slice(3)),
            et: Number(todo.endTime.slice(0,2) + todo.endTime.slice(3))
        }
        let todos = [...this.state.todos, newTodo];
        this.setState({
            todos : todos
        })
        
    }

    getTodos = (todo) => {
        console.log(todo);
        const newTodo = {
            id: this.state.todos.length + 1,
            group: 1,
            title: todo.title,
            start_time: moment(`${todo.date} ${todo.startTime}`),
            end_time: moment(`${todo.date} ${todo.endTime}`),
            date: todo.date,
            canMove: false
        }
        let todos = [...this.state.todos, newTodo];
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
                <TodoCollection todos={this.state.todos} deleteTodo={this.deleteTodo} userInfo={this.props.userInfo}/>
                <AddTodo addTodo={this.addTodo} getTodos={this.getTodos}/>
                <StudyTimeline todos={this.state.todos} userInfo={this.props.userInfo} getTodos={this.getTodos} todos={this.state.todos}/>
            </div>
        )
    }
}

export default Todo