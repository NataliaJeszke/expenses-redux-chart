import { useDispatch, useSelector } from "react-redux";
import { setIncomeAction } from "../../store/income/income-slice";
import incomeStyle from "./IncomeInputStyle.module.css";

export function IncomeInput(props) {
  const income = useSelector((store) => store.INCOME.income);

  const dispatch = useDispatch();

  function setIncome(event) {
    dispatch(setIncomeAction(Number.parseFloat(event.target.value)));
  }

  return (
    <form className={incomeStyle.incomeForm}>
      <label className={incomeStyle.incomeLabel} htmlFor="income">
        Add your income:
      </label>
      <input
        className={incomeStyle.incomeInput}
        type="number"
        id="income"
        step="any"
        defaultValue={income}
        onChange={setIncome}
      />
    </form>
  );
}
