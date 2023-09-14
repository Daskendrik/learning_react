import { useState } from 'react';
import styles from './TodoForm.module.css';
import Button from './UI/Button';

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
        <Button type="submit" title="Submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default TodoForm;
