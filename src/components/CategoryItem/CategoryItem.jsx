import ButtonCategoryDelete from "./ButtonCategoryDelete/ButtonCategoryDelete";

export function CategoryItem({ item }) {
  return (
    <div>
      <p>{item.label}</p>
      <ButtonCategoryDelete item={item} />
    </div>
  );
}
