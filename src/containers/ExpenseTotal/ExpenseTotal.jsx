import { useSelector } from "react-redux";

export function ExpenseTotal(props) {
  const income = useSelector((store) => store.INCOME.income);
  const expenseList = useSelector((store) => store.EXPENSE.expenseList);

  const total = expenseList.reduce((acc, expense) => {
    return Number.parseFloat(acc) + Number.parseFloat(expense.price);
  }, 0);
  const moneyLeft = income - total;

  return (
    <div>
      <div>
        <p>Total expenses</p>
        <p>{total} $</p>
      </div>
      <div>
        <p>Money left</p>
        <p>{moneyLeft} $</p>
      </div>
    </div>
  );
}
