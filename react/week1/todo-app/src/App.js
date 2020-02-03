import React from 'react';
import './app.css';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "react-datepicker/dist/react-datepicker.css";
import TodoHeader from'./components/functions-hooks/todoHeader';
import AddItem from './components/functions-hooks/addTask';


library.add(faTrash);

function App() {
  return (
    <React.Fragment>
      <TodoHeader/>
      <AddItem/>
    </React.Fragment>);
}

export default App;
