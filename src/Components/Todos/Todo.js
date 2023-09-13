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
        <h2 className={styles.todoText}>{todo}</h2>
      </div>
    </>
  );
};

export default Todo;
