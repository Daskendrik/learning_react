import styles from './Todo.module.css';

const Todo = (props) => {
  const { todo } = props;
  return (
    <>
      <div className={styles.todo}>
        <h2 className={styles.todoText}>{todo} To do!</h2>
      </div>
    </>
  );
};

export default Todo;
