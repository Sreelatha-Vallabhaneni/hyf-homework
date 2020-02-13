import React, { useState, useEffect } from 'react';
import TodoForm from './todoForm';

function Todos(){
    const [todo, setTodo] = useState([{}]);
    
    const ROOT_URL =
      "https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw";

    useEffect(() => {
      (async () => {
        const result = await fetch(ROOT_URL).then(response => response.json());
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
         if (todo.id === id) {
            todo.isChecked = !todo.isChecked;
          }
          return todo
        }))
    }

    const removeTodo = id => {
      setTodo(prev => prev.filter(todo => todo.id !== id));
    };

    const editTodo = (id, newtask) => {      
      setTodo(prev => prev.map(todo => {                 
        if (todo.id === id) {
           todo.isEdit = !todo.isEdit 
            return { ...todo, description: newtask }; 
        }
           return todo;       
        }))        
    }

    const handleOnChange = (e) => {
      return setTodo({[e.target.name] : e.target.value})
    }
    const descriptionChange = (id, text) => {
      setTodo(prev =>
        prev.map(todo => {
          if (todo.id === id) {
            return { ...todo, description: text };
          }
          return todo;
        })      
        );
    }
    
    const TodoList = () => {
     let cbRef = null;
      const setCbRef = element => {
        cbRef = element;
      }
      useEffect(() => {
        if(cbRef){
          cbRef.focus()
        }
      })
           
      return todo.length === 0 ? (
        <p>No items....</p>
      ) : (
        
        todo.map((list, id) => {
          console.log(list.id)
          return (
            <div className="todo-list" key={id}>
              <span className="item" style={{ textDecoration: list.isChecked ? "line-through" : ""}}>
                {list.isEdit ?
                  <input 
                    type="text"
                    name="description"
                    ref={setCbRef}
                    value={list.description}
                    onChange={(e) => descriptionChange(list.id, e.target.value)}/>
                 : 
                  <>
                    {list.description} {"|"} {list.deadline}
                  </>
                }
              </span>

              <input className="item"
                type="checkbox"
                onClick={() => toggleTodo(list.id)}
                checked={list.isChecked}
                name="isChecked"
                onChange={() => handleOnChange}
              />
              <button className="item" onClick={() => removeTodo(list.id)}>Delete</button>
              <button className="item" onClick={() => editTodo(list.id, list.description)}>
                {!list.isEdit ? "Edit" : "Update"}
              </button>
            </div>
          );
        })
    
      );
  }

    return (
      <React.Fragment>
        <TodoForm addTodo={addTodo} />        
          <TodoList />        
      </React.Fragment>
    );
}
 export default Todos;

 //toggleTodo={toggleTodo} removeTodo={removeTodo} editTodo={editTodo}