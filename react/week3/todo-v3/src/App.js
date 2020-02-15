import React from 'react';
import './App.css';
import TodoHeader from './components/todoHeader';
import Timer from './components/timer';
import Todos from './components/todos';
import Modal from './components/modal';

function App() {
  return (
    <div className="App">
      <TodoHeader/>
      <Timer/>      
        <Modal>
          <Todos/>
        </Modal>      
    </div>
  );
}

export default App;
