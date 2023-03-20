import { ExpenseTotal } from "../../containers/ExpenseTotal/ExpenseTotal";
import { ExpensesList } from "../../containers/ExpensesList/ExpensesList";

export function Main() {
  return (
    <>
      <ExpensesList />
      <ExpenseTotal />
    </>
  );
}
