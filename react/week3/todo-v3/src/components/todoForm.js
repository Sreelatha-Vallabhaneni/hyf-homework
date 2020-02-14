import React, { useState} from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function TodoForm({addTodo}){
    const [state, setState] = useState('');
    const [date, setDate] = useState(new Date());
    
    const onFormSubmit = (event) => {
        event.preventDefault();
        if(!state || !date){
            return alert("Please enter details")
        }
        addTodo(state, date.toISOString().substr(0, 10));
        setState("");
        setDate("");  
    }
    const handleChange = date => {
      setDate(date);
    };
    
    return(
        <form  className="todo-form" onSubmit={onFormSubmit}>
            <label>Todo Description :{" "}
                <input type="text" name="description" value={state} onChange={(event) => {setState(event.target.value)}}></input>
            </label>
            <label>DeadLine :{" "}
                <DatePicker className="date"
                selected={date}
                onChange={handleChange}/>
            </label>
            <input type="submit" value="Add todo"/>
        </form>
    )
}

export default TodoForm;