import { useDispatch } from "react-redux";
import { deleteExpenseByNanoID } from "../../../store/expense/expense-slice";
import buttonStyle from "./ButtonItemStyle.module.css";

const ButtonItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(deleteExpenseByNanoID(item.id));
  };

  return (
    <button className={buttonStyle.buttonItem} onClick={handleRemove}>
      Delete
    </button>
  );
};

export default ButtonItem;
