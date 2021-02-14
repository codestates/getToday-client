import React, { Component } from "react";
class AddTodo extends Component {
    constructor(props){
        super(props)
        this.state = {
            title : '',
            startTime : '',
            endTime : '',
            date : ''
        }
        this.todoBtn = this.todoBtn.bind(this);
        this.titleAdder = this.titleAdder.bind(this);
        this.startTimeAdder = this.startTimeAdder.bind(this);
        this.endTimeAdder = this.endTimeAdder.bind(this);
        this.dateAdder = this.dateAdder.bind(this);
    }
    titleAdder = (e) => {
        this.setState({
            title: e.target.value,
         })
    }
    startTimeAdder = (e) => {
        this.setState({
            startTime : e.target.value
        })
    }
    endTimeAdder = (e) => {
        this.setState({
            endTime : e.target.value
        })
    }
    dateAdder = (e) => {
        this.setState({
            date : e.target.value
        })
    }
    todoBtn = () => {
        this.props.addTodo(this.state);
        this.setState({subject : ''});
        this.setState({startTime : ''});
        this.setState({endTime : ''});
        this.setState({date : ''});
    }
    render () {
        return (
            <div>
                <label>Add new todo : </label>
                <input type="text" 
                    onChange={this.titleAdder} 
                    value={this.state.subject}
                />
                <br></br>
                <label>start time : </label>
                <input type="text"
                    onChange={this.startTimeAdder}
                    value={this.state.startTime}
                /> 
                <br></br>
                <label>end time : </label>
                <input type="text"
                    onChange={this.endTimeAdder}
                    value={this.state.endTime}
                />
                <br></br>
                <label>date : </label>
                <input type="text"
                    onChange={this.dateAdder}
                    value={this.state.date}
                /> 
                <button onClick={this.todoBtn}>add</button>
            </div>
        )
    }
}
export default AddTodo
