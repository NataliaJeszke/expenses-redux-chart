import { ListItem } from "../../ListItem/ListItem";
import listStyle from "./ListStyle.module.css";

export function List({ items }) {
  return (
    <div>
      {items.map((item, index) => (
        <ListItem key={item + index} item={item} />
      ))}
    </div>
  );
}
