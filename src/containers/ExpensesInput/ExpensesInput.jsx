import { addExpenseAction } from "../../store/expense/expense-slice";
import { useDispatch } from "react-redux";
import { useState } from "react";

export function ExpensesInput(props) {
  const dispatch = useDispatch();
  const [price, setPrice] = useState();
  const [expenseName, setExpenseName] = useState();
  function submit(event) {
    event.preventDefault();
    dispatch(addExpenseAction({name:expenseName, price: price}));
    console.log("submitExpenses");
  }
  return (
    <form onSubmit={submit}>
      <label>
        Add your expense
        <input
          type="text"
          placeholder="Ex: Laptop"
          onChange={(event) => setExpenseName(event.target.value)}
        />
      </label>
      <label>
        Cost
        <input
          type="number"
          placeholder="Ex: 4000"
          onChange={(event) => setPrice(event.target.value)}
        />
      </label>
      <button type="submit" value="Submit">
        Add
      </button>
    </form>
  );
}
