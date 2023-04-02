import { useDispatch } from "react-redux";
import { deleteCategory } from "../../store/category/category-slice";

const ButtonCategoryDelete = ({ item }) => {
  const dispatch = useDispatch();

  const handleRemoveCategory = () => {
    dispatch(deleteCategory(item.value));
  };

  return <button onClick={handleRemoveCategory}>Delete</button>;
};

export default ButtonCategoryDelete;
