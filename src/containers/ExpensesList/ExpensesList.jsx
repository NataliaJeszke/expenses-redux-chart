import { useSelector } from "react-redux";
import { List } from "../../components/Main/List/List";

export function ExpensesList() {
  const expenseList = useSelector((store) => store.EXPENSE.expenseList);
  return (
    <>
      <List items={expenseList} />
    </>
  );
}
