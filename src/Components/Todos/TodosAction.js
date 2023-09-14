import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri';
import Button from './UI/Button';

function TodosAction() {
  return (
    <>
      <Button title="Reset">
        <RiRefreshLine />
      </Button>
      <Button title="Delete">
        <RiDeleteBin2Line />
      </Button>
    </>
  );
}

export default TodosAction;
