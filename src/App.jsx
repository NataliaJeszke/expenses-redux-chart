import AppStyle from "./AppStyle.module.css";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { ExpensesInput } from "./containers/ExpensesInput/ExpensesInput";
import { IncomeInput } from "./containers/IncomeInput/IncomeInput";

export function App() {
  return (
    <>
      <Header />
      <IncomeInput />
      <ExpensesInput />
      <Main/>
    </>
  );
}
