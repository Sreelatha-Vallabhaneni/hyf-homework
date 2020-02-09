import React, { useState } from 'react';

function Todos(){
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
        return setTodo([...todo, {id : todo[todo.length-1]?.id+1 || 1, 
          title : "Random Text",
          isChecked : false}]);        
    }
    
    const handleOnChange = (e) => {
        return setTodo(e.target.value)
    }
    const toggleTodo = (id) => {
      setTodo(prev => prev.map(todo => {
         if (todo.id === id) {
            todo.isChecked = !todo.isChecked;
          }
          return todo
        }))
    }
    const removeTodo = (id) =>{
      setTodo(prev=> prev.filter(todo => todo.id !== id))       
    }
    const TodoList = () => {
        return (
            todo.length === 0 ? <p>No items....</p> :
            todo.map((list) => {
            return (
              <li key={list.id}>
                <span className="all-titles" style={{ textDecoration: list.isChecked ? "line-through" : "", color: "darkred"}}>{list.title}</span>
                <input type="checkbox" onClick={() => toggleTodo(list.id)} checked={list.isChecked} name ={list.title} onChange={() => handleOnChange}/>
                <button onClick={() => removeTodo(list.id)}>Delete</button>
              </li>
            );})
        )
    }

    return (
      <div>
        <button onClick={submitTodo} onChange={handleOnChange}>Add Todo</button>
        <ul>
        <TodoList/>
        </ul>        
      </div>
    );
}

export default Todos;