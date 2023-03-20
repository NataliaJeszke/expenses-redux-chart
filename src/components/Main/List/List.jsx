import { ListItem } from "../../ListItem/ListItem";
export function List({ items }) {
  return (
    <div>
      <table>
        <tbody>
          {items.map((item, index) => (
            <ListItem key={item + index} item={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
