import { List } from "../../components/Main/List/List";
import { ExpenseTotal } from "../ExpenseTotal/ExpenseTotal";
import ExpensesContainerStyle from "./ExpensesContainerStyle.module.css";
import FilterSelect from "../FilterSelect/FilterSelect";
import { FilterExpenses } from "../FilterExpenses/FilterExpenses";

export function ExpensesContainer({ selectedCategories, handleCategoryClick }) {
  const filteredExpenses = FilterExpenses(selectedCategories);

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

export default ExpensesContainer;
