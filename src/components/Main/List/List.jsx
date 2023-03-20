import { ListItem } from "../../ListItem/ListItem";
export function List({ items }) {
  return (
    <div>
      <table>
        <tbody>
          {items.map((item) => (
            <ListItem item={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
