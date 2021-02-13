import React, { Component } from "react";

class AddTodo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            content: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state);
        this.setState({ content: '' })
    }

    render() {
        return (
            <div className='inputForm'>
                <form onSubmit={this.handleSubmit}>
                    <label>Add new todo:</label>
                    <input className='input' type="text"
                        onChange={this.handleChange}
                        value={this.state.content}
                    />
                </form>
            </div>
        )
    }
}

export default AddTodo