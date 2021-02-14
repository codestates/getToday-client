import React from 'react';
// import axios from 'axios';
/********** todo test field **********/
// function axiosCall (inputData, userEmail, getFun) {
//         axios
//       .post("https://localhost:4000/schedules/addSchedule",
//       {          
//       title: inputData[inputData.length - 1].title,
//       startTime: inputData[inputData.length - 1].start_time,
//       endTime: inputData[inputData.length - 1].end_time,
//       date: inputData[inputData.length - 1].date, 
//       userEmail: userEmail
//       },
//       {
//         withCredentials: true
//       })
//       .then((res)=>{
//         console.log(inputData);
//         console.log(res);
//     })
//     ;
    
// }

function Todos ({todos, deleteTodo, userInfo, getTodos}) {
    const todoList = todos.length ? (

    // axiosCall(todos, userInfo.userEmail, getTodos)
    todos.map( todo => {
        console.log(todo);
        return (
            <div className = 'collectionItem' key={todo.id}>
                <span onClick = {() => {deleteTodo(todo.id)}}>
                title : {`${todo.title} `}
                start time : {`${todo.start_time._i.slice(11, 16)}` || `${todo.start_time._i.slice(0, 5)}` }
                end time : {`${todo.end_time._i.slice(11, 16)}` || `${todo.end_time._i.slice(0, 5)}`}
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