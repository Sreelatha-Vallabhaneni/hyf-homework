import React, { useState, useEffect } from 'react';
import TodoForm from './todoForm';

function Todos(){
    const [todo, setTodo] = useState([{}]);    
    const ROOT_URL = "https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw";

    useEffect(() => {
      (async () => {
        const response = await fetch(ROOT_URL)
        const result = await response.json();
        setTodo(result);
      })();
    }, []);

    const addTodo = (title, newDeadLine) => {
      return setTodo([...todo, {id : todo[todo.length-1]?.id+1 || 1, 
        description : title,
        deadline : newDeadLine,
        isChecked : false,
        isEdit : false}])
    }
    const toggleTodo = (id) => {
      setTodo(prev => prev.map(todo => {
        const newTodo = {...todo};
        if (todo.id === id) {
          newTodo.isChecked = !newTodo.isChecked;
          }
          return newTodo;
      }))
    }
    const removeTodo = id => {
      setTodo(prev => prev.filter(todo =>{ 
        const newTodo = {...todo};
        return newTodo.id !== id
      }));      
    };
    const editTodo = (id, newTask) => {      
      setTodo(prev => prev.map(todo => { 
        const newTodo = { ...todo };
        if (todo.id === id) {
          newTodo.isEdit = !newTodo.isEdit 
          return { ...newTodo, description: newTask }; 
        }
        return newTodo;       
      }));  
    }
    const handleOnChange = (e) => {
      return setTodo({[e.target.name] : e.target.value})
    }
    const descriptionChange = (id, text) => {
      setTodo(prev => prev.map(todo => {
        const newTodo = { ...todo };
        if (todo.id === id) {
          return { ...newTodo, description: text };
          }
          return newTodo;
      }));          
    }   
    let cbRef = null;
    const setCbRef = element => {
      cbRef = element;
      }
      useEffect(() => {
        if(cbRef){
          cbRef.focus()
        }
      }, [cbRef]);

console.log("render");
    return (
      <React.Fragment>
        <TodoForm addTodo={addTodo} />
        {todo.length === 0 ? <p>No items....</p> : 
        todo.map((list, id) => {
          return (
          <div className="todo-list" key={id}>
            <span className="item" style={{ textDecoration: list.isChecked ? "line-through" : ""}}>
              {list.isEdit ?
              <input
              type="text"
              name="description"
              ref={setCbRef}
              value={list.description}
              onChange={(e) => descriptionChange(list.id, e.target.value)}/> : 
              <React.Fragment>
                {list.description} {"|"} {list.deadline}
              </React.Fragment>
              }
              </span>
              <input className="item"
              type="checkbox"
              onClick={() => toggleTodo(list.id)}
              checked={list.isChecked}
              name="isChecked"
              onChange={() => handleOnChange}/>
              <button className="item" onClick={() => removeTodo(list.id)}>Delete</button>
              <button className="item" onClick={() => {editTodo(list.id, list.description)}}>
                {!list.isEdit ? "Edit" : "Update"}
              </button>
            </div>
          )
        })    
      }
      </React.Fragment>
    );
}

function areEqual(prevProps, nextProps){
  return prevProps.title === nextProps.title && prevProps.completed ===nextProps.completed;
}
 export default React.memo(Todos, areEqual);

 