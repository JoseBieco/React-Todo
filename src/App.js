import React, { useState, useEffect } from "react";
import './App.css';
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [id, setId] = useState(0)
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  // Run once when de App starts
  useEffect(() => {
    getLocalTodos();
  }, []);
  // UseEffect
  useEffect(() => {
      filterHendler();
      saveLocalTodos();
    }, [todos, status]);

  // Functions 
  const filterHendler = () => {
    switch(status){
      case "completed":
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;

      case "uncompleted":
        setFilteredTodos(todos.filter(todo => todo.completed === false));
      break;

      default:
        setFilteredTodos(todos);
      break;
    }
  }

  // Save
  const saveLocalTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    if(localStorage.getItem('todos') === null){
      localStorage.setItem('todos', JSON.stringify([]));
    }else {
      let todoLocal = JSON.parse(localStorage.getItem('todos'));
      setTodos(todoLocal);
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Zé's Todo List</h1>
      </header>
      <Form todos={todos} setTodos={setTodos}  inputText={inputText} setInputText={setInputText}  id={id} setId={setId} setStatus={setStatus} />
      <TodoList todos={todos} setTodos={setTodos} filteredTodos={filteredTodos} />
    </div>
  );
}

export default App;
