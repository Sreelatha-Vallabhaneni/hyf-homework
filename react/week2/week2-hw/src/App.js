import React from 'react';
import './App.css';
import TodoHeader from "./components/todoHeader";
import Timer from "./components/timer";
import Todos from "./components/todoList";

function App() {
  return (
    <div className="App">
      <TodoHeader/>
      <Timer/>
      <Todos/>
    </div>
  );
}

export default App;
