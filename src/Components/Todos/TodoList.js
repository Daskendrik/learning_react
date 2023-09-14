import Todo from './Todo';
import styles from './TodoList.module.css';

const TodoList = ({ todos, deleteTodo, changeTodo }) => {
  return (
    <div className={styles.todoList}>
      {!todos.length ? (
        <h2>Todo list empty</h2>
      ) : (
        todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            changeTodo={changeTodo}
          />
        ))
      )}
    </div>
  );
};

export default TodoList;
