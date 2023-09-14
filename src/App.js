import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import './App.css';
import TodoForm from './Components/Todos/TodoForm';
import TodoList from './Components/Todos/TodoList';
import TodosAction from './Components/Todos/TodosAction';

function App() {
  const [todos, SetTodos] = useState([]);
  // const [todosDone, SetTodosDone] = useState([]);

  const addTodoHandler = (text) => {
    const newTodo = {
      text: text,
      isCompleted: false,
      id: uuidv4(),
    };
    SetTodos([...todos, newTodo]);
  };
  const deleteTodoHandler = (id) => {
    SetTodos(todos.filter((todo) => todo.id !== id));
  };

  const changeTodoHandler = (id) => {
    SetTodos(
      todos.map((todo) => {
        return todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : { ...todo };
      })
    );

    // todos.map((todo) => {
    //   if (todo.id === id) {
    //     if (todo.isCompleted === false) {
    //       todo.isCompleted = true;
    //       SetTodosDone([...todosDone, todo]);
    //     } else {
    //       todo.isCompleted = false;
    //       SetTodosDone([todosDone.filter((todo) => todo.id !== id)]);
    //     }
    //   }
    // });
  };
  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodoHandler} />
      <TodosAction />
      <TodoList
        todos={todos}
        deleteTodo={deleteTodoHandler}
        changeTodo={changeTodoHandler}
      />
      {/* {!!todosDone.length && <h3>Готово {todosDone.length} задач(а)</h3>} */}
    </div>
  );
}

export default App;
