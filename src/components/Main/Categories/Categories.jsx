import { useSelector } from "react-redux";
import { CategoryInput } from "../../../containers/CategoryInput/CategoryInput";
import { CategoriesList } from "../CategoriesList/CategoriesList";

export function Categories() {
  const categories = useSelector((store) => store.CATEGORY.categoryList);

  return (
    <div>
      <CategoryInput />
      <CategoriesList items={categories} />
    </div>
  );
}
