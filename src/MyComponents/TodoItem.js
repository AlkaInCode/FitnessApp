
import React from 'react';
import PropTypes from 'prop-types';
console.log(typeof onToggle);
function TodoItem({ todo, onToggle, onDelete }) {
  const todoItemStyle = {
    display: 'flex',           // Align items in a row using Flexbox
    alignItems: 'center',      // Center-align items vertically
    justifyContent: 'space-between', // Space out the checkbox/label and the delete button
    marginBottom: '0.5rem',    // Add some margin at the bottom of each todo item
  };

  const buttonStyle = {
    marginLeft: '0.5rem',      // Add some margin to the left of the button
    padding: '0.25rem 0.5rem', // Reduce padding to make the button smaller
    fontSize: '0.85rem',       // Reduce font size if necessary
  };

  return (
    <div className="todo-item" style={todoItemStyle}>
      <label>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo)}
        />
        {todo.title}
      </label>
      <span>{todo.duration}</span>
      <button onClick={() => onDelete(todo)} style={buttonStyle}>Delete</button>
    </div>
    
  );
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  onToggle: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default TodoItem;

