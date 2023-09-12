import { useState } from 'react';
import style from './Todo.module.css';

const Todo = (props) => {
  const [value, setValue] = useState('');
  //   setValue(props.value);
  return (
    <>
      <div className={style.todo}>
        <h2 className={style.todoText}>{value} To do!</h2>
      </div>
    </>
  );
};

export default Todo;
