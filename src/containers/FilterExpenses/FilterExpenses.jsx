export const FilterExpenses = (expenseList, selectedCategories) => {
    const filteredExpenses =
      selectedCategories.length > 0
        ? expenseList.filter((expense) =>
            selectedCategories.includes(expense.category)
          )
        : expenseList;
  
    return filteredExpenses;
  };