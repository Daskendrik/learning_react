import { useState } from 'react';
import './App.css';
import TodoForm from './Components/Todos/TodoForm';
import TodoList from './Components/Todos/TodoList';

function App() {
  const [TodoArray, SetTodoArray] = useState('');

  const addTodo = (value) => {
    SetTodoArray(TodoArray.push(value));
  };
  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm onclick={addTodo} />
      <TodoList TodoArray={TodoArray} />
    </div>
  );
}

export default App;
