import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri';
import Button from './UI/Button';
import styles from './TodosAction.module.css';

function TodosAction({ resetTodo, deleteCompletedTodo, copmletedTodoExist }) {
  return (
    <div className={styles.todoAction}>
      <Button title="Reset" onClick={resetTodo}>
        <RiRefreshLine />
      </Button>
      <Button
        title="Delete"
        onClick={deleteCompletedTodo}
        disabled={!copmletedTodoExist}
      >
        <RiDeleteBin2Line />
      </Button>
    </div>
  );
}

export default TodosAction;
