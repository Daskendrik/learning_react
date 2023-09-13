import { useState } from 'react';
import styles from './TodoForm.module.css';

const TodoForm = (props) => {
  const { addTodo } = props;

  const [text, setText] = useState('');
  const onSubmitHandler = (event) => {
    event.preventDefault();
    addTodo(text);
    setText('');
  };

  return (
    <div className={styles.todoForm}>
      <form onSubmit={onSubmitHandler}>
        <input
          type="text"
          placeholder={'Enter new todo'}
          id="input"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default TodoForm;
