import React from 'react';
import axios from 'axios';
/********** todo test field **********/
function axiosCall (inputData) {
    inputData.forEach(el => {
        axios
      .post("https://localhost:4000/schedules/addSchedule",
      {          
      title: el.title,
      startTime: el.startTime,
      endTime: el.endTime,
      date: el.date, 
      userEmail: '1234@1.1'
      },
      {
        withCredentials: true
      })
      .then((res)=>{
        console.log(inputData);
        console.log(res);
    })
    });
    
}

function Todos ({todos, deleteTodo}) {
    const todoList = todos.length ? (

    axiosCall(todos),
    todos.map( todo => {
        return (
            <div className = 'collectionItem' key={todo.id}>
                <span onClick = {() => {deleteTodo(todo.id)}}>
                title : {`${todo.title} `}
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