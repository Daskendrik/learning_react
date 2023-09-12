import style from './Todo.module.css';

const Todo = (props) => {
  const { todo } = props;
  return (
    <>
      <div className={style.todo}>
        <h2 className={style.todoText}>{todo} To do!</h2>
      </div>
    </>
  );
};

export default Todo;
