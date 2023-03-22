import { List } from "../../components/Main/List/List";
import { FilterButtons } from "../../components/Main/FilterButtons/FilterButtons";
import { useSelector } from "react-redux";
import { useState } from "react";

export function ExpensesList({}) {
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
    <>
      <FilterButtons
        onCategoryClick={handleCategoryClick}
        onClearFilter={handleClearFilter}
      />
      <List items={filteredExpenses} />
    </>
  );
}
