import { useDispatch, useSelector } from "react-redux";
import { setIncomeAction } from "../../store/income/income-slice";
export function IncomeInput(props) {
  const income = useSelector((store) => store.INCOME.income);
  const dispatch = useDispatch();
  function setIncome(event) {
    dispatch(setIncomeAction(Number.parseFloat(event.target.value)));
  }
  return (
    <form>
      <label>
        Add your income
        <input type="number" defaultValue={income} onChange={setIncome} />
      </label>
    </form>
  );
}
