import React, { useState } from "react";
import TodoForm from "./todoForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AddDate from "./datePick";

const AddItem = () => {
  const toDoArray = [
    {
      id: 1,
      title: "Get out of bed",
      isCompleted: false
    },
    {
      id: 2,
      title: "Brush teeth",
      isCompleted: false
    },
    {
      id: 3,
      title: "Eat breakfast",
      isCompleted: false
    }
  ];
  //Declare a state variable as todos
  const [todos, setTodo] = useState(toDoArray);
  //updating the state / to updating the array with new obj
  const addToDo = (title) => {
      const newToDos = [...todos,{title}];
      setTodo(newToDos);  
  }

  //
  const completeTodo = (index) => {
    // Get all todos array from state.
    const newToDos = [...todos];
    newToDos[index].isCompleted = true;
    setTodo(newToDos);
  }
  //remove task
  const removeTodo = (index) => {
    const newToDos = [...todos];
    newToDos.splice(index, 1);
    setTodo(newToDos);
  }

  return (
    <div className="App list-items">
      <TodoForm addToDo={addToDo} />
      <div>
        <ul className="list">
          {todos.map((todo, index) => (
            <li key={index} className="todo m-4" style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}>
              <span className="all-titles">{todo.title}</span>
              <AddDate/>
              <button className="btn-success" onClick={() => {completeTodo(index);}}>
                Complete
              </button>
              <FontAwesomeIcon className="faicons" onClick={() => {removeTodo(index);}} icon="trash"/>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AddItem;