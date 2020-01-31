import React from 'react';
import './App.css';
import TodoHeader from'./components/todoHeader';
import AddItem from './components/addItems';

function App() {
  return (
    <div className="App">
      <TodoHeader/>
      <AddItem/>
    </div>
  );
}

export default App;
