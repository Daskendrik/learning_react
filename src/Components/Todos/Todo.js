import style from './Todo.module.css';

const Todo = (props) => {
  const { value } = props;
  return (
    <>
      <div className={style.todo}>
        <h2 className={style.todoText}>{value} To do!</h2>
      </div>
    </>
  );
};

export default Todo;
