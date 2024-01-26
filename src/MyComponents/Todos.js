import React from 'react'
import TodoItem from "../MyComponents/TodoItem";

export default function Todos(props) {
  // const onDelete = (todoId) => {
  //   // Implement the delete logic here
  //   console.log("Delete", todoId);
  // };
  let myStyle={
    minHeight:"70vh",
    margin:"40px auto"
  }
  return (
    <div className='container my-3'  style={myStyle}>
      <h3 className=' my-3'>Todos List</h3>
      {props.todos.length===0? "No Todos to display":

        props.todos.map((todo)=>{
            return (
              <>
              <TodoItem todo={todo}key={todo.sno} onDelete={props.onDelete}/><hr />
              </>)
        })}
        {/* <TodoItem todo={props.todos[3]}/> */}
        {/* {props.todos.map(todo => <TodoItem key={todo.sno} todo={todo}/>)} */}
      Todos works!
    </div>
  )
}
