import React from 'react';
import axios from 'axios';
/********** todo test field **********/
function axiosCall (inputData) {
    axios
      .get("",{
        withCredentials: true,
        data : {data : inputData}
      })
      .then((res)=>{
        console.log(res.data);
    })
}

function Todos ({todos, deleteTodo}) {
    const todoList = todos.length ? (

    axiosCall(todos),
    todos.map( todo => {
        return (
            <div className = 'collectionItem' key={todo.id}>
                <span onClick = {() => {deleteTodo(todo.id)}}>
                subject : {`${todo.subject} `}
                start time : {`${todo.startTime} `}
                end time : {`${todo.endTime} `}
                date : {todo.date}
                </span>
            </div>
        )
    })
    ) : (
        <div>todo is empty</div>
    );

    return (
        <div className = 'todoscollection'>
            {todoList}
        </div>
    )
}

export default Todos