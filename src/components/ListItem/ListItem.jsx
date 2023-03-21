import ButtonItem from "../../containers/ButtonItem/ButtonItem";

export function ListItem({ item }) {
  return (
    <div>
      <p>{item.name}</p>
      <p>{item.price}</p>
      <p>{item.category}</p>
      <ButtonItem item={item} />
    </div>
  );
}
