import inputStyle from "./InputSection.module.css"
import { ExpensesInput } from "../../../containers/ExpensesInput/ExpensesInput";
import { IncomeInput } from "../../../containers/IncomeInput/IncomeInput";

export function InputSection() {
  return (
    <div className={inputStyle.inputs_div}>
      <IncomeInput />
      <ExpensesInput />
    </div>
  );
}
