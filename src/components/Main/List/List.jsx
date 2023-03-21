import { ListItem } from "../../ListItem/ListItem";
export function List({ items }) {
  return (
    <div>
      {items.map((item, index) => (
        <ListItem key={item + index} item={item} />
      ))}
    </div>
  );
}
