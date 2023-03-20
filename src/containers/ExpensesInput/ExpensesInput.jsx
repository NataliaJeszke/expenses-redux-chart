import { addExpenseAction } from "../../store/expense/expense-slice";
import {useDispatch} from "react-redux";

export function ExpenseInput() {
    const dispatch = useDispatch();

    function submit(event){
        event.preventDefault();
        dispatch(addExpenseAction());
        console.log("submitExpenses")
    }
    return (
      <form onSubmit={submit}>
        <label>
          Add your expense
          <input
            type="text"
          //   onChange={(event) => setIncome(event.target.value)}
          />
        </label>
        <label>
          Cost
          <input
            type="number"
          //   onChange={(event) => setIncome(event.target.value)}
          />
        </label>
        <button
          type="submit"
          value="Submit"
        >
          Add
        </button>
      </form>
    );
  }
  