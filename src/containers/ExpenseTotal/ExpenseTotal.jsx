import { useSelector } from "react-redux";
import expensesTotalStyle from "./ExpensesTotalStyle.module.css";
export function ExpenseTotal(props) {
  const expenses = props.expenses;
  const income = useSelector((store) => store.INCOME.income);
  const expenseList = useSelector((store) => store.EXPENSE.expenseList);

  const total = expenseList.reduce((acc, expense) => {
    return Number.parseFloat(acc) + Number.parseFloat(expense.price);
  }, 0);

  const cattotal = expenses.reduce((acc, expense) => {
    return Number.parseFloat(acc) + Number.parseFloat(expense.price);
  }, 0);

  const moneyLeft = income - total;

  return (
    <div className={expensesTotalStyle.expensesTotalContainer}>
      <div>
        <p>Total expenses</p>
        <p>{total} $</p>
      </div>
      <div>
        <p>Category expenses</p>
        <p>{cattotal} $</p>
      </div>
      <div>
        <p>Money left</p>
        <p>{moneyLeft} $</p>
      </div>
    </div>
  );
}
