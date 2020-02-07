import React, { useState } from 'react';

function AddTodo(){
    const [todo, setTodo] = useState([
    {
      id: 1,
      title: "Get out of bed",
      isChecked: false
    },
    {
      id: 2,
      title: "Brush teeth",
      isChecked: false
    },
    {
      id: 3,
      title: "Eat breakfast",
      isChecked: false
    }
  ]);

    const submitTodo = (e) => {
        e.preventDefault();        
        return setTodo([...todo, {title : "Random Text", id : todo.length + 1}]);        
    }
    
    const handleOnChange = (e) => {
        return setTodo(e.target.value)
    }
    const toggleTodo = (index) => {
        const newToDos = [...todo];
        newToDos[index].isChecked = true;
        setTodo(newToDos);
    }
    const removeTodo = (index) =>{
        const newToDos = [...todo];
        newToDos.splice(index, 1);
        setTodo(newToDos);
    }
    const RenderList = () => {
        return (
            todo.length === 0 ? <p>No items....</p> :
            todo.map((list, index) => {
            return (
              <li key={index}>
                <span className="all-titles" style={{ textDecoration: list.isChecked ? "line-through" : "", color: "darkred"}}>{list.title}</span>
                <input type="checkbox" onClick={() => toggleTodo(index)} checked={list.isChecked} name ={list.title} onChange={() => handleOnChange}/>
                <button onClick={() => removeTodo(index)}>Delete</button>
              </li>
            );})
        )
    }

    return (
      <div>
        <button onClick={submitTodo} onChange={handleOnChange}>Add Todo</button>
        <ul>
        <RenderList/>
        </ul>        
      </div>
    );
}

export default AddTodo;