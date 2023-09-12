import { useState } from 'react';
import Todo from './Todo';

const TodoList = (props) => {
  const { value } = props;
  //   const [arrayTodoArray, setarrayTodoArray] = useState(null);

  return (
    <div>
      <Todo value={value} />
    </div>
  );
};

export default TodoList;
