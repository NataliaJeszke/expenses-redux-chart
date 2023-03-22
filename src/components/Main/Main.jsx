import { ExpenseTotal } from "../../containers/ExpenseTotal/ExpenseTotal";
import { ExpensesContainer } from "../../containers/ExpensesContainer/ExpensesContainer";

export function Main() {
  return (
    <>
      <ExpensesContainer />
      <ExpenseTotal />
    </>
  );
}
