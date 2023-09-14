import { RiTodoFill } from 'react-icons/ri';
import styles from './Todo.module.css';

const Todo = (props) => {
  const { todo, deleteTodo, index } = props;
  return (
    <>
      <div
        className={styles.todo}
        onDoubleClick={() => deleteTodo(index)}
        index={index}
      >
        <RiTodoFill className={styles.todoIcon} />
        <div className={styles.todoText}>{todo}</div>
      </div>
    </>
  );
};

export default Todo;
