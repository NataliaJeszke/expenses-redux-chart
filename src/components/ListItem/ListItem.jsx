import { useDispatch } from "react-redux";
import { deleteExpenseByNanoID } from "../../store/expense/expense-slice";

export function ListItem({ item }) {
  const dispatch = useDispatch();

  function handleRemove(id) {
    dispatch(deleteExpenseByNanoID(id));
  }
  return (
    <div>
      <p>{item.name}</p>
      <p>{item.price}</p>
      <button onClick={() => handleRemove(item.id)}>Delete</button>
    </div>
  );
}
