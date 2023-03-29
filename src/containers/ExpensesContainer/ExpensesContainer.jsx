import { List } from "../../components/Main/List/List";
import { useSelector } from "react-redux";
import { useState } from "react";
import { ExpenseTotal } from "../ExpenseTotal/ExpenseTotal";
import ExpensesContainerStyle from "./ExpensesContainerStyle.module.css";
import FilterSelect from "../FilterSelect/FilterSelect";

export function ExpensesContainer({}) {
  //Get all items (expenses) from store and filter by categories//

  const expenseList = useSelector((store) => store.EXPENSE.expenseList);
  const [selectedCategories, setSelectedCategories] = useState([]);

  console.log(selectedCategories);

  const filteredExpenses =
    selectedCategories.length > 0
      ? expenseList.filter((expense) =>
          selectedCategories.includes(expense.category)
        )
      : expenseList;

  const handleCategoryClick = (categories) => {
    const values = categories.map((option) => option.value);
    setSelectedCategories(values);
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
