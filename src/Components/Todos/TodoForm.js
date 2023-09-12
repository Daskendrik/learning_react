import style from './TodoForm.module.css';

const TodoForm = () => {
  return (
    <form className={style.form}>
      <input
        className={style.input}
        type="text"
        placeholder={'Enter new todo'}
      ></input>
      <button type="submit" className={style.button}>
        Submit
      </button>
    </form>
  );
};

export default TodoForm;
