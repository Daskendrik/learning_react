import Todo from './Todo';

const TodoList = (props) => {
  const { todos } = props;
  //   const [arrayTodoArray, setarrayTodoArray] = useState(null);

  return todos.map((todo, index) => <Todo key={index} todo={todo} />);
};

export default TodoList;
