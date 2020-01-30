import React from 'react';
//import logo from './logo.svg';
import './App.css';
import "react-datepicker/dist/react-datepicker.css";
import TodoHeader from'./components/functions-hooks/todoHeader';
import AddItem from './components/functions-hooks/addTask';
//import TodoForm from "./components/functions-hooks/todoInput";
function App() {
  return (
    <React.Fragment>
      <TodoHeader/>
      <AddItem/>
    </React.Fragment>);
}

export default App;
