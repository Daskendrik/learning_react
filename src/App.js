import { useState } from 'react';
import './App.css';
import TodoForm from './Components/Todos/TodoForm';
import TodoList from './Components/Todos/TodoList';

function App() {
  const [todos, SetTodos] = useState([]);

  const addTodoHandler = (text) => {
    SetTodos([...todos, text]);
  };
  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodoHandler} />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
