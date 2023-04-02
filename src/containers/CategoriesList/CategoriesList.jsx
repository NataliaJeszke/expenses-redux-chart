import { CategoryItem } from "../CategoryItem/CategoryItem";

export function CategoriesList({ items }) {
  return (
    <div>
      {items.map((item, index) => (
        <CategoryItem key={item + index} item={item} />
      ))}
    </div>
  );
}
