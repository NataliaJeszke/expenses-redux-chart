export function ListItem({item}) {
  return (
    <div>
      <p>{item.name}</p>
      <p>{item.price}</p>
    </div>
  );
}