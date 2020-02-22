import React, { useState, createContext } from 'react';
import './App.css';
import Header from './components/header';
import Form from './components/form';
import UsersData from './components/usersData';
import MyRepos from './components/renderProps/myRepos';

export const stateContext = createContext();

function App() {
  const [input, setInput] = useState("");
  const [user, setUser] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  
  return (
    <div className="App">
      <Header/>
      <div className = "container">
        <stateContext.Provider className="user-container" value=
        {{input, setInput, user, setUser, error, setError, loading, setLoading}}>
        <Form />
        <UsersData />        
        </stateContext.Provider>
        <MyRepos/>
      </div>      
    </div>
  );
}

export default App;
