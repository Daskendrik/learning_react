import style from './TodoForm.module.css';

const TodoForm = () => {
  return (
    <div className={style.form}>
      <input
        className={style.input}
        type="text"
        placeholder={'Enter new todo'}
      ></input>
      <button className={style.button}>Submit</button>
    </div>
  );
};

export default TodoForm;
