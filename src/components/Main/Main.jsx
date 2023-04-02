import { Categories } from "./Categories/Categories";
import { ExpensesContainer } from "../../containers/ExpensesContainer/ExpensesContainer";
import { Chart } from "../Chart/Chart";
import { InputSection } from "./InputSection/InputSection";
import mainStyle from "./MainStyle.module.css";

export function Main() {
  return (
    <>
      <div className={mainStyle.main}>
        <InputSection />
        <div className={mainStyle.main_ex_chart}>
          <ExpensesContainer />
          <Chart />
        </div>
        <Categories />
      </div>
    </>
  );
}
