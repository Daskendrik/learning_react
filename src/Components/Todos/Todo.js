import TodoForm from './TodoForm';
import style from './Todo.module.css';
import TodoList from './TodoList';

const Todo = () => {
  return (
    <>
      <div className={style.todo}>
        <h2 className={style.todoText}>Todo App</h2>
      </div>
      <TodoForm />
      <TodoList />
    </>
  );
};

export default Todo;
