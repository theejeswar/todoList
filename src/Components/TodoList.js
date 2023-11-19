import React from 'react';

function TodoList({ todos, handleDelete, handleEdit }) {
  return (
    <div>
      <h4>Todo Tasks</h4>
      {todos.map((todo, index) => (
        <div key={index} className="todo-container" style={{ backgroundColor: "lightblue", display: 'flex', alignItems: 'center' }}>
          <div className="display-container" style={{ flex: 1 }}>
            <h4>{todo}</h4>
          </div>
          <div className="button-container">
            <button onClick={() => handleDelete(index)} className="btn btn-danger">Delete</button>
            <button onClick={() => handleEdit(index)} className="btn btn-primary">Edit</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
