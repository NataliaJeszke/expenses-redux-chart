import { List } from "../../components/Main/List/List";
import { useSelector } from "react-redux";
import { useState } from "react";
import { ExpenseTotal } from "../ExpenseTotal/ExpenseTotal";
import ExpensesContainerStyle from "./ExpensesContainerStyle.module.css";
import FilterSelect from "../FilterSelect/FilterSelect";
import { FilterExpenses } from "../FilterExpenses/FilterExpenses";
import { useDispatch } from "react-redux";
import { filteredExpensesAction } from "../../store/expense/expense-slice";

export function ExpensesContainer({}) {
  //Get all items (expenses) from store and filter by categories//
  const dispatch = useDispatch();

  const expenseList = useSelector((store) => store.EXPENSE.expenseList);

  const [selectedCategories, setSelectedCategories] = useState([]);

  const filteredExpenses = FilterExpenses(expenseList, selectedCategories);

  const handleCategoryClick = (categories) => {
    const values = categories.map((option) => option.value);
    setSelectedCategories(values);
    dispatch(filteredExpensesAction(values));
  };

  return (
    <div className={ExpensesContainerStyle.container}>
      <FilterSelect
        selectedCategories={selectedCategories}
        handleCategoryClick={handleCategoryClick}
      />
      <List items={filteredExpenses} />
      <ExpenseTotal expenses={filteredExpenses} />
    </div>
  );
}
