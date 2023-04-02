import ButtonItem from "./ButtonItem/ButtonItem";
import listItemStyle from "./ListItemStyle.module.css";

export function ListItem({ item }) {
  return (
    <div className={listItemStyle.mainItemContainer}>
      <p>{item.name}</p>
      <p>{item.price}$</p>
      <p>{item.category}</p>
      <ButtonItem item={item} className={listItemStyle.buttonItem} />
    </div>
  );
}
