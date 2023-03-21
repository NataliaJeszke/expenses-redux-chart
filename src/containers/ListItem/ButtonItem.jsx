import { useDispatch } from "react-redux";
import { deleteExpenseByNanoID } from "../../store/expense/expense-slice";

export function ButtonItem({ item }) {
  const dispatch = useDispatch();

  function handleRemove(id) {
    dispatch(deleteExpenseByNanoID(id));
  }
  return (
    <div>
      <button onClick={() => handleRemove(item.id)}>Delete</button>
    </div>
  );
}
