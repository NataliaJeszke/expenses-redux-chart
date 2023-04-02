import { useDispatch } from "react-redux";
import ButtonCategoryDelete from "../ButtonCategoryDelete/ButtonCategoryDelete";
import { deleteCategory } from "../../store/category/category-slice";

export function CategoryItem({ item }) {
  const dispatch = useDispatch();

  const handleRemoveCat = () => {
    console.log("usuwam kategorię");
    dispatch(deleteCategory(item.value));
  };
  return (
    <div>
      <p>{item.label}</p>
      <button onClick={handleRemoveCat}>DELETE</button>
    </div>
  );
}
