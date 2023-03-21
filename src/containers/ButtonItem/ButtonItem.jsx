import { useDispatch } from "react-redux";
import { deleteExpenseByNanoID } from "../../store/expense/expense-slice";

const ButtonItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(deleteExpenseByNanoID(item.id));
  };

  return (
    <button onClick={handleRemove}>Delete</button>
  );
};

export default ButtonItem;
