import { ExpenseTotal } from "../../containers/ExpenseTotal/ExpenseTotal";
import { ExpensesList } from "../../containers/ExpensesList/ExpensesList";
import { InputSection } from "./InputSection/InputSection";

export function Main() {
  return (
    <>
      <ExpensesList />
      <ExpenseTotal />
    </>
  );
}
