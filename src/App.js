import { useState } from 'react';
import './App.css';
import TodoForm from './Components/Todos/TodoForm';
import TodoList from './Components/Todos/TodoList';

function App() {
  const [todos, SetTodos] = useState([]);

  const addTodoHandler = (text) => {
    SetTodos([...todos, text]);
  };
  const deleteTodoHandler = (index) => {
    SetTodos(todos.filter((_, ind) => ind !== index));
  };
  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodoHandler} />
      <TodoList todos={todos} deleteTodo={deleteTodoHandler} />
    </div>
  );
}

export default App;
