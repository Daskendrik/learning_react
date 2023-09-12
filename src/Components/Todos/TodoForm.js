import style from './TodoForm.module.css';

const TodoForm = (props) => {
  const { onClick } = props;

  const addTodo = () => {
    const value = document.getElementById('input').value;
    onClick(value);
  };
  return (
    <form className={style.form}>
      <input
        className={style.input}
        type="text"
        placeholder={'Enter new todo'}
        id="input"
      ></input>
      <button type="submit" className={style.button} onClick={addTodo}>
        Submit
      </button>
    </form>
  );
};

export default TodoForm;
