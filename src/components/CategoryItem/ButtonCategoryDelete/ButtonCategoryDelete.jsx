import { useDispatch } from "react-redux";
import { deleteCategory } from "../../../store/category/category-slice";

const ButtonCategoryDelete = ({ item }) => {
  const dispatch = useDispatch();

  const handleRemoveCat = () => {
    dispatch(deleteCategory(item.value));
  };

  return <button onClick={handleRemoveCat}>Delete</button>;
};

export default ButtonCategoryDelete;
