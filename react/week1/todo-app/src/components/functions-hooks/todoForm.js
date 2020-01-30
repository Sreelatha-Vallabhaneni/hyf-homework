import React, { useState } from 'react';

const TodoForm = ({addToDo}) => { 
     
    const [task, setTask] = useState(""); 
    const OnFormSubmit = (e) => {
        e.preventDefault();
        if(!task) {
            return alert("Please enter task");
        }
        addToDo(task);
        setTask('');  
    }; 

    const handleOnChange = (event) => {
      return setTask(event.target.value);
    };
    // render form
    return (      
        <form  className="todo-form" onSubmit={OnFormSubmit}>
          <label className="form-label App-link">Add Task</label>
          <div>
            <input type="text" className="form-input" placeholder="Enter new task" value={task} onChange={handleOnChange}/>
            <button type="submit" className="btn btn-warning m-2">Add</button>
            </div>                  
        </form>      
    );
}

export default TodoForm;