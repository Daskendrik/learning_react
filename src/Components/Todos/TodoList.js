import Todo from './Todo';
import styles from './TodoList.module.css';

const TodoList = (props) => {
  const { todos, deleteTodo } = props;
  //   const [arrayTodoArray, setarrayTodoArray] = useState(null);
  console.log(todos);

  return (
    <div className={styles.todoList}>
      {!todos.length ? (
        <h2>Todo list empty</h2>
      ) : (
        todos.map((todo, index) => (
          <Todo key={index} todo={todo} deleteTodo={deleteTodo} index={index} />
        ))
      )}
    </div>
  );
};

export default TodoList;
