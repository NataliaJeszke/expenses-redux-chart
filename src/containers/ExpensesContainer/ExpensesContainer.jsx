import { List } from "../../components/Main/List/List";
import { FilterButtons } from "../../components/Main/FilterButtons/FilterButtons";
import { useSelector } from "react-redux";
import { useState } from "react";
import { ExpenseTotal } from "../ExpenseTotal/ExpenseTotal";
import ExpensesContainerStyle from "./ExpensesContainerStyle.module.css";
import Select, { StylesConfig } from "react-select";
import catalogue from "../SelectInput/catalogue";

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
      <Select
        closeMenuOnSelect={false}
        isMulti
        options={catalogue}
        onChange={handleCategoryClick}
        value={selectedCategories.map((category) => ({
          value: category,
          label: category,
        }))}
        className="basic-multi-select"
        classNamePrefix="select"
      />
      <List items={filteredExpenses} />
      <ExpenseTotal expenses={filteredExpenses} />
    </div>
  );
}
