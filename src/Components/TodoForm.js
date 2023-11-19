import React, { useState } from 'react'
import TodoList from './TodoList';

function TodoForm() {
    const [task, setTask] = useState("");
    const [todos, setTodos] = useState(["Task1", "Task2", "Task3"]);
    const [error,setError] = useState("");
    const [editIndex,setEditIndex] = useState(null);

    const handleChange = e=>{
        setTask(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (task.trim() !== "") {
          if (editIndex !== null) {
            handleUpdateTodo(editIndex, task);
            setEditIndex(null);
          } else {
            const newTodo = [...todos, task];
            setTodos(newTodo);
          }
          setTask("");
          setError("");
        } else {
          setError("*Task cannot be empty");
        }
      };
      
    const handleUpdateTodo = (index, updatedTask) => {
        const updatedTodos = [...todos];
        updatedTodos[index] = updatedTask;
        setTodos(updatedTodos);
        setEditIndex(null);
      };

    const handleDelete = (indexValue)=>{
        const newTodo = todos.filter((todo,index)=>index !== indexValue);
        setTodos(newTodo);
    }

    const handleEdit = (index)=>{
        setEditIndex(index);
        setTask(todos[index])
    }
    

  return (
    <div className="container-lg d-flex justify-content-center align-items-start vh-100">
    <div className='card p-4' style={{width: "400px", marginTop:"50px", backgroundColor:"lightcyan"}}>
        <h1>TODO LIST</h1>
        <hr />
        <form onSubmit={handleSubmit} className="row align-items-center">
            {error && <div style={{color:'red'}}>{error}</div>}
            <div className="col-9">
            <input type="text" name="Task" value={task} onChange={handleChange} 
            className="form-control" /></div>
            <div className="col-3">
            <input type="submit" value={editIndex !== null ? "Update" : "Add"} name="ADD" className="btn btn-primary" />
            </div>

        </form> <br /><br />
        <TodoList todos={todos} handleDelete={handleDelete} handleUpdateTodo={handleUpdateTodo}
        handleEdit={handleEdit}/>
    </div>
    </div>
  )
}

export default TodoForm