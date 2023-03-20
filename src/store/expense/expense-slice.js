import { createSlice } from "@reduxjs/toolkit";

export const expenseSlice = createSlice({
  name: "expenseSlice",
  initialState: {
    expenseList: [

    ],
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
  },
});

export const { addExpenseAction, deleteExpenseByNanoID } = expenseSlice.actions;
