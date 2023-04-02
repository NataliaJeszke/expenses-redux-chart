import { useDispatch, useSelector } from "react-redux";
import { filteredExpensesAction } from "../../store/expense/expense-slice";

export const FilterExpenses = (selectedCategories) => {
  const expenseList = useSelector((store) => store.EXPENSE.expenseList);

  const dispatch = useDispatch();

  const filteredExpenses =
    selectedCategories.length > 0
      ? expenseList.filter((expense) =>
          selectedCategories.includes(expense.category)
        )
      : expenseList;

  dispatch(filteredExpensesAction(filteredExpenses));

  return filteredExpenses;
};
