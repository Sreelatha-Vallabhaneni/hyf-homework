import React, { useState } from "react";
import TodoForm from "./todoForm";

const AddItem = () => {
  const toDoArray = [
    {
      id: 1,
      title: "Get out of bed, Wed Sep 13 2017",
      isCompleted: false
    },
    {
      id: 2,
      title: "Brush teeth, Thu Sep 14 2017",
      isCompleted: false
    },
    {
      id: 3,
      title: "Eat breakfast, Fri Sep 15 2017",
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

  return (
    <body>
      <div className="App list-items">
        <TodoForm addToDo={addToDo} />
        {todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo} />
        ))}
      </div>
    </body>
  );
}

const Todo = (props, index) => {
  return (
      
    <ul className="list m-4">
      <li className="todo">
         {props.todo.title}
      </li>
    </ul>
  );
};

export default AddItem;