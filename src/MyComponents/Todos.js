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
    <div className='container my-3' style={myStyle}>
      <div className='row'>
        <div className='col'>
          <h3 className=' my-3'>My List</h3>
          {/* Render the todos for "My List" */}
        </div>
        
      </div>
      {props.todos.length === 0 ? "No Todos to display" :
        props.todos.map((todo) => {
          return (
            <>
              <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} onToggle={props.onToggle} /><hr />
            </>
          )
        })}
    </div>
  )
}
