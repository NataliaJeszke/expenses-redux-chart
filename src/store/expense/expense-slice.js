import { createSlice } from "@reduxjs/toolkit";

export const expenseSlice = createSlice({
  name: "expenseSlice",
  initialState: {
    expenseList: [

    ],
    filteredExpenses: [],
  },
  reducers: {
    addExpenseAction: (currentSlice, action) => {
      console.log(action);
      currentSlice.expenseList.push(action.payload);
    },
    deleteExpenseByNanoID: (state, action) => {
      const id = action.payload;
      state.expenseList = state.expenseList.filter((item) => item.id !== id);
    },
    filteredExpensesAction: (state,action) => {
      state.filteredExpenses = action.payload;
    }
  },
});

export const { addExpenseAction, deleteExpenseByNanoID, filteredExpensesAction } = expenseSlice.actions;

export default expenseSlice.reducer;
