import { useState } from 'react';
import style from './TodoForm.module.css';

const TodoForm = (props) => {
  const { addTodo } = props;

  const [text, setText] = useState('');
  const onSubmitHandler = (event) => {
    event.preventDefault();
    addTodo(text);
    setText('');
  };

  return (
    <form className={style.form} onSubmit={onSubmitHandler}>
      <input
        className={style.input}
        type="text"
        placeholder={'Enter new todo'}
        id="input"
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></input>
      <button type="submit" className={style.button}>
        Submit
      </button>
    </form>
  );
};

export default TodoForm;
