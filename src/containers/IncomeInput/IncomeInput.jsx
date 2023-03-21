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
    <form>
      <label htmlFor="income">Add your income</label>
      <input
        type="number"
        id="income"
        defaultValue={income}
        onChange={(event) => setIncome(event.target.value)}
      />
    </form>
  );
}
