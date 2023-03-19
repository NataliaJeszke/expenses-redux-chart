import AppStyle from "./AppStyle.module.css";
import { Header } from "./components/Header/Header";
import { IncomeInput } from "./containers/IncomeInput/IncomeInput";

export function App() {
  return (
    <>
      <Header />
      <IncomeInput/>
    </>
  );
}
