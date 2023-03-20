import { configureStore } from "@reduxjs/toolkit";
import { expenseSlice } from "./expense/expense-slice";
import { incomeSlice } from "./income/income-slice";
const store = configureStore({
  reducer: {
    EXPENSE: expenseSlice.reducer,
    INCOME: incomeSlice.reducer
  },
});

export { store };
