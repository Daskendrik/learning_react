import { useState } from 'react';
import './App.css';
import TodoForm from './Components/Todos/TodoForm';
import TodoList from './Components/Todos/TodoList';

function App() {
  const [Todo, SetTodo] = useState('');

  const addTodo = (value) => {
    SetTodo(value);
    console.log('sad');
  };
  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm onClick={addTodo} />
      <TodoList TodoArray={Todo} />
    </div>
  );
}

export default App;
