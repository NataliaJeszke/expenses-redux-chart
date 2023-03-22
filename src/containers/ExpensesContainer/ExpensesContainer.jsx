import { List } from "../../components/Main/List/List";
import { FilterButtons } from "../../components/Main/FilterButtons/FilterButtons";
import { useSelector } from "react-redux";
import { useState } from "react";
import { ExpenseTotal } from "../ExpenseTotal/ExpenseTotal";
import ExpensesContainerStyle from "./ExpensesContainerStyle.module.css"

export function ExpensesContainer({}) {
  //Get all items (expenses) from store and filter by categories//

  const expenseList = useSelector((store) => store.EXPENSE.expenseList);
  const [selectedCategory, setSelectedCategory] = useState();

  const filteredExpenses = selectedCategory
    ? expenseList.filter((expense) => expense.category === selectedCategory)
    : expenseList;

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleClearFilter = () => {
    setSelectedCategory();
  };
  return (
    <div className={ExpensesContainerStyle.container}>
      <FilterButtons
        onCategoryClick={handleCategoryClick}
        onClearFilter={handleClearFilter}
      />
      <List items={filteredExpenses} />
      <ExpenseTotal expenses={filteredExpenses} />
    </div>

    
  );
}
