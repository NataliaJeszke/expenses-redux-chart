import AppStyle from "./AppStyle.module.css";
import { Header } from "./components/Header/Header";
import { ExpensesInput } from "./containers/ExpensesInput/ExpensesInput";
import { ExpensesList } from "./containers/ExpensesList/ExpensesList";
import { IncomeInput } from "./containers/IncomeInput/IncomeInput";

export function App() {
  return (
    <>
      <Header />
      <IncomeInput />
      <ExpensesInput />
      <ExpensesList/>
    </>
  );
}
