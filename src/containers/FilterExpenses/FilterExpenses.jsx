import { useDispatch } from "react-redux";
import { filteredExpensesAction } from "../../store/expense/expense-slice";
export const FilterExpenses = (expenseList, selectedCategories) => {
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
